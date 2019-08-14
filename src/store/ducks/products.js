export const productsStore = {
    loading: false
};

export const TURN_LOADING_ON = 'TURN_LOADING_ON';
export const TURN_LOADING_OFF = 'TURN_LOADING_OFF';

const productsReducer = (state = productsStore, action) => {
    switch (action.type) {
        case TURN_LOADING_ON:
            return {
                ...state,
                loading: true
            };
        case TURN_LOADING_OFF:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
};

export const turnLoadingOn = () => {
    return {
        type: TURN_LOADING_ON
    };
};

export const turnLoadingOff = () => {
    return {
        type: TURN_LOADING_OFF
    };
};

export default productsReducer;
