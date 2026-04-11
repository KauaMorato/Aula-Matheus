import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // Estado global da aplicação
        cart: [],
    },
    mutations: {
        // Mutations para modificar o estado
        ADD_TO_CART(state, product) {
            state.cart.push(product);
        },
    },
    actions: {
        // Ações que irão disparar as mutations
        addToCart({ commit }, product) {
            commit('ADD_TO_CART', product);
        },
    },
    getters: {
        // Getters para acessar o estado
        cartItemCount: state => {
            return state.cart.lenght;
        },
    },
});