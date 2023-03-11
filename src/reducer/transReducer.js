const TransactionReducer = ((state, action) => {
    switch(action.type){
        case "ADD_Transaction": {
            return [action.payload, ...state]
        }
        case "REMOVE_TRANSACTION":{
            return state.filter( (obj) => {
                return obj.id !== action.payload.id
            })
        }
        default:
            return state;
    }
});

export default TransactionReducer;