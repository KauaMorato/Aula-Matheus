// O carrinho começa vazio (como uma sacola nova!)
const initialState = {
    cartItems: [] // lista vazia de produtos
  };
  
  // Esse é o robozinho! Ele recebe bilhetinhos e age
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
  
      // Bilhetinho: "ADICIONA ESSE ITEM!"
      case 'ADD_ITEM':
        const item = action.payload;
        const existingItem = state.cartItems.find(
          (i) => i.id === item.id
        );
        if (existingItem) {
          // Se já tem no carrinho, aumenta a quantidade
          return {
            ...state,
            cartItems: state.cartItems.map((i) =>
              i.id === item.id
                ? { ...i, quantity: i.quantity + 1 }
                : i
            )
          };
        } else {
          // Se não tem, adiciona do zero
          return {
            ...state,
            cartItems: [...state.cartItems, { ...item, quantity: 1 }]
          };
        }
  
      // Bilhetinho: "REMOVE ESSE ITEM!"
      case 'REMOVE_ITEM':
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (i) => i.id !== action.payload.id
          )
        };
  
      // Se o bilhetinho for desconhecido, não faz nada
      default:
        return state;
    }
  };
  
  export default cartReducer;