export const addReducer = (state: any, action: any) => {
    const ADD_USER = 'ADD_USER'
    switch (action.type) {
        case ADD_USER:
            return [...state, action.payload];
        default:
            return state;
    }
}