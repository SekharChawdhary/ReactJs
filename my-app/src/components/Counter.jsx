import React, { useState } from 'react';

const ShoppingCart = () => {
    const [cart, setCart] = useState([]);
    const products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 }
    ];

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (id) => {
        setCart(cart.filter((product) => product.id !== id));
    };

    const totalPrice = cart.reduce((total, product) => total + product.price, 0);

    return (
        <div>
            <h3>Products</h3>
            {products.map((product) => (
                <div key={product.id}>
                    <p>{product.name} - ${product.price}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
            <h3>Shopping Cart</h3>
            <ul>
                {cart.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}{' '}
                        <button onClick={() => removeFromCart(product.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h4>Total: ${totalPrice}</h4>
        </div>
    );
};

export default ShoppingCart;
