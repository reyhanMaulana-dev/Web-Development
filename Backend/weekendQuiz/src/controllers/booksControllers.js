import axios from 'axios';
const seed = 100;

class BookController {

    getBook = async (req, res) => {
        try {
            const { limit = 10 } = req.query;           
            const { data: { data : books }} = await axios.get(`https://fakerapi.it/api/v2/books?_quantity=${limit}&_seed=${seed}`);
            
            res.send(books);
        } catch (error) {
            res.send(error);
        }
    }

    findBook = async (req, res) =>{
        try {
            const { publisher } = req.headers
            const { id } = req.params;
            const { data : { data : books } } = await axios.get(`https://fakerapi.it/api/v2/books?_quantity=${id}&_seed=${seed}`);
            const bookFound = books.at(-1);
            
            if (publisher) bookFound.publisher = publisher;
            
            if(!bookFound) throw new Error('Book not found!');
            res.send(bookFound);
        } catch (error) {
            res.status(404).send(error.message);
        }
    }
}

export const bookController = new BookController();