import { MutationTree, ActionTree } from 'vuex';
import axios from 'axios';
import { ICatalog } from '../interfaces/main'
// =================================================
// Interface
// =================================================
export interface RootState {
    catalogItems: Array<ICatalog>;
    catalogItem: ICatalog;
    isErrorRequest: string;
}

// =================================================
// State
// =================================================
// initial state
export const getInitialState = (): RootState => {
    return {
        catalogItems: [],
        catalogItem: {
            id: 0,
            title: '',
            price: 0,
            description: '',
            image: '',
            category: '',
        },
        isErrorRequest: ''
    };
};

export const state = getInitialState();

// =================================================
// Mutations
// =================================================
export const mutations: MutationTree<RootState> = {
    RESET_STORE(state: RootState) {
        Object.assign(state, getInitialState());
    },
    SET_CATALOG_ITEMS(state: RootState, catalogItems: Array<ICatalog>) {
        state.catalogItems = catalogItems;
    },
    SET_CATALOG_ITEM(state: RootState, catalogItem: ICatalog) {
        state.catalogItem = catalogItem;
    },
    SET_IS_ERROR_REQUEST(state: RootState, isErrorRequest: string) {
        state.isErrorRequest = isErrorRequest;
    },
    RESET_CATALOG_ITEM(state: RootState) {
        state.catalogItem = { id: 0, title: '', price: 0, description: '', image: '', category: '' };
    },
};

// =================================================
// Actions
// =================================================
export const actions: ActionTree<RootState, RootState> = {
    GET_CATALOG_ITEMS({ commit }) {
        commit('SET_IS_ERROR_REQUEST', 'pending');
        // resources of fake Apis: https://github.com/keikaavousi/fake-store-api
        return axios
            .get('https://fakestoreapi.com/products')
            .then((response) => {
                commit('SET_CATALOG_ITEMS', response.data);
                commit('SET_IS_ERROR_REQUEST', 'success');
            })
            .catch(() => {
                commit('SET_IS_ERROR_REQUEST', 'error');
            });
    },
    GET_CATALOG_ITEM({ commit }, itemId) {
        commit('SET_IS_ERROR_REQUEST', 'pending');
        // resources of fake Apis: https://github.com/keikaavousi/fake-store-api
        return axios
            .get(`https://fakestoreapi.com/products/${itemId}`)
            .then((response) => {
                commit('SET_CATALOG_ITEM', response.data);
                commit('SET_IS_ERROR_REQUEST', 'success');
            })
            .catch(() => {
                commit('SET_IS_ERROR_REQUEST', 'error');
            });
    },
};
