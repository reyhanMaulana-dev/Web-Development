import axios from 'axios';

class ProductController {

    getProduct = async (req, res) =>{
        try {
            
            const response = await fetch('https://fakestoreapi.com/products');

            if(!response.ok) throw new Error(`Something went wrong`);

            const product = await response.json();
            res.send(product);

        } catch (error) {
            res.send(error);
        }
    }

    findProduct = async (req, res) =>{
        try {
            const {id} = req.params;
            
            /*
            ver 1

            const response = await axios.get('https://fakestoreapi.com/products');
            res.send(response.data);
            */
            
            const {data: products} = await axios.get('https://fakestoreapi.com/products')
            
            const productFound = products.find((product) => product.id == id);
            if(!productFound) throw new Error('Product not found');

            res.send(productFound);

        } catch (error) {
            res.send(error);
        }
    
    }
}

export const productController = new ProductController();