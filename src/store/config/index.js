import React from 'react';

// STORE
import { productsStore } from '../ducks/products';

export const initialState = {
    store: {
        ...productsStore
    },
    dispatch: () => {}
};

const Context = React.createContext(initialState);

export default Context;
