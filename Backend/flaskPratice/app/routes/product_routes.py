from flask import Blueprint, request, jsonify
from sqlalchemy import text
from ..models import Product
from ..schemas import product_schema, products_schema
from ..extensions import db

productBp = Blueprint("products", __name__)

# Create
@productBp.route("/", methods=["POST"])
def addProduct():
    try:    
        name = request.get_json()["name"]
        description = request.json["description"]
        price = request.json["price"]

        if not name or not price or not description: 
            return jsonify({ "error":"Bad Request"}), 400

        newProduct = Product(
            name=name,
            description=description,
            price=price
        )

        db.session.add(newProduct)
        db.session.commit()

        response = product_schema.jsonify(newProduct)
        return response, 201
    
    except Exception as e:
        return jsonify({ "error": str(e) }), 500

# Get All Products
@productBp.route("/", methods=["GET"])
def getProducts():
    try:
        # products = Product.query.all()

        products = db.session.execute(text("SELECT * FROM product"))
        response = products_schema.jsonify(products)
        return response, 200
    
    except Exception as e:
        return jsonify({ "error": str(e) }), 500
    
@productBp.route("/<int:id>", methods=["GET"])
def getProduct(id):
    try:
        # product = Product.query.get(id)

        data = db.session.execute(text("SELECT * FROM product WHERE id = :id"), {"id": id})
        row = data.fetchone()

        if not row: return jsonify({ "error":"Product Not Found" }), 404

        product = dict(row._mapping)
        response = product_schema.jsonify(product)
        return response, 200

    except Exception as e:
        return jsonify({ "error": str(e) }), 500
    
@productBp.route("/<int:id>", methods=["PUT"])
def updateProduct(id):
    try:
        product = Product.query.get(id)
        if not product: return jsonify({ "error": "Product Not Found" }), 404

        body = request.get_json()

        allowedFields = ["name", "description", "price"]
        for field, value in body.items():
            if field in allowedFields:
                setattr(product, field, value)
        
        db.session.commit()
        response = product_schema.jsonify(product)
        return response, 200

    except Exception as e:
        return jsonify({ "error":str(e) }), 500
    
@productBp.route("/<int:id>", methods=["DELETE"])
def deleteProduct(id):
    try:
        product = Product.query.get(id)
        if not product: return jsonify({ "error": "Product Not Found" }), 400

        db.session.delete(product)
        db.session.commit()
        return jsonify({ "message": f"Product {id} deleted" }), 200
    
    except Exception as e:
        return jsonify({ "error":str(e) }), 500

