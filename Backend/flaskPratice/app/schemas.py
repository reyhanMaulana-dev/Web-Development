from marshmallow import fields
from .extensions import ma
from .models import Product

class ProductSchema(ma.SQLAlchemyAutoSchema):
    id = fields.Int()
    name = fields.Str()
    description = fields.Str()
    price = fields.Float()

    class Meta:
        model = Product
        load_instance = True
        ordered = True

product_schema = ProductSchema()
products_schema = ProductSchema(many=True)