export const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE':
            return {
                ...state,
                ...action.payload
            };
        default: return state;
    }
}

export const initialState = {
    email: '',
    familyName: '',
    givenName: '',
    id: '',
    name: '',
    photoUrl: '',
    age: '',
    height: '',
    weight: ''
}