import React, { useReducer } from 'react';
import Context from './config';
import productsReducer, { productsStore } from './ducks/products';

const Store = props => {
    const [productsState, productsDispatch] = useReducer(
        productsReducer,
        productsStore
    );

    const triggerDispatchs = action => {
        const dispatchs = [productsDispatch];
        for (let i = 0; i < dispatchs.length; i++) {
            dispatchs[i](action);
        }
    };

    const combinedReducers = {
        store: {
            ...productsState
        },
        dispatch: action => triggerDispatchs(action)
    };

    return (
        <Context.Provider value={combinedReducers}>
            {props.children}
        </Context.Provider>
    );
};

export default Store;
