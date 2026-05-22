import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from './redux/cartActions';

const ShoppingCart = () => {
  // useSelector = "deixa eu ver o que tem no baú!"
  const cartItems = useSelector((state) => state.cartItems);

  // useDispatch = "deixa eu mandar bilhetinhos!"
  const dispatch = useDispatch();

  // Função que roda quando clica em "Adicionar Laptop"
  const handleAddItem = () => {
    const newItem = {
      id: 1,
      name: 'Laptop',
      price: 1500
    };
    dispatch(addItem(newItem)); // manda o bilhetinho!
  };

  // Função que roda quando clica em "Remover"
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id)); // manda o bilhetinho!
  };

  return (
    <div>
      <h1>Carrinho de Compras</h1>

      {/* Botão para adicionar */}
      <button onClick={handleAddItem}>
        Adicionar Laptop
      </button>

      {/* Lista de itens no carrinho */}
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} x R${item.price}
            <button onClick={() => handleRemoveItem(item.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;