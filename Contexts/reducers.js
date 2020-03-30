export const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE':
            return {
                ...state,
                ...action.payload,
                name: `${action.payload.familyName} ${action.payload.givenName}`
            };
        case 'REMOVE':
            return null;
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