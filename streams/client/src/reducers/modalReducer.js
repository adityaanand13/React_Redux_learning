export default (state = false, action = {}) => {
    switch (action.type) {
        case "MODAL_OPEN": {
            return {...state, modal: action.payload };
        }

        case "MODAL_CLOSE": {
            return {...state, modal: action.payload }
        }

        default:
            return state;
    }
};