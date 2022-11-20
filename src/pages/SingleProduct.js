import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../CartContext';


const SingleProduct = () => {
    const [product, setProduct] = useState({});
    const [isAdding, setIsAdding] = useState(false);
    const { cart, setCart } = useContext(CartContext);


    const params = useParams();
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://ecom-rest-apis.herokuapp.com/api/products/${params._id}`)
            .then(res => res.json())
            .then(product => {
                setProduct(product);
            })
    }, [params._id]);


    const addToCart = (e, product) => {
        e.preventDefault();
        let _cart = { ...cart };
        if (!_cart.items) {
            _cart.items = {};
        }
        if (_cart.items[product._id]) {
            _cart.items[product._id] += 1;
        } else {
            _cart.items[product._id] = 1;
        }
        if (!_cart.totalItems) {
            _cart.totalItems = 1;
        } else {
            _cart.totalItems += 1;
        }
        setCart(_cart);
        setIsAdding(true);
        setTimeout(() => {
            setIsAdding(false);
        }, 1000);
    }

    return (
        <>
            <div className='container mx-auto mt-12'>
                <button className='mb-12 font-bold' onClick={() => { navigate(-1) }}>Back</button>
                <div className='flex'>
                    <img src={product.image} alt="Single Pizza" />
                    <div className='ml-16'>
                        <h1 className='text-xl font-bold'>{product.name}</h1>
                        <div className='text-md'>{product.size}</div>
                        <div className='font-bold mt-2'>{product.price}</div>
                        <button disabled={isAdding} onClick={(e) => { addToCart(e, product) }} className={`${isAdding ? 'bg-green-500' : 'bg-yellow-500'} py-1 px-4 rounded-full font-bold`}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct;