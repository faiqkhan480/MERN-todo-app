const initState = {
    item: [],
    text: '',
    id: ''
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_TASKS':
            return {
                // ...state,
                item: action.payload
            }
        case 'ADD_ITEMS':
            return {
                ...state,
                item: [...state.item, action.payload ],
                text: ''
            };
        case 'TEXT':
            return {
                ...state,
                text: action.payload
            };
        case 'DEL_ITEM':
            return {
                ...state,
                item: state.item.filter(i=> i._id !== action.payload._id)
            };
        case 'GET_TASK':
            return {
                ...state,
                id: action.payload._id,
                text: action.payload.task
            };
        case 'UPDATE':
            const updatedItem = state.item.map((todo) => {
                if(todo._id !== action.payload._id){
                    return todo;
                }
                return { ...todo, ...action.payload}
            });
            return {
                ...state,
                item: updatedItem,
                text: ''
            };
        default:
            return state;
    }
};

export default reducer