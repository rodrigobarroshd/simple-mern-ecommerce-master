import {useState, useEffect} from 'react'
import axios from 'axios'

function CategoriesAPI() {
    const [categories, setCategories] = useState([]); // Inicializado como um array vazio.

    useEffect(() => {
        const getCategories = async () => {
            try {
                const res = await axios.get('https://renderbackend-ecommerce.onrender.com/api/category');
                setCategories(res.data.categories || []); // Garante que seja um array.
            } catch (err) {
                console.error(err);
            }
        };
        getCategories();
    }, []);

    return {
        categories: [categories, setCategories],
    };
}


export default CategoriesAPI
