export const GET_POSTS = "GET_POSTS"
export const DEL_POST = "DEL_POST"
export const ADD_POST = "ADD_POST"

const initialState = {
    posts: [{id: 1, title: 'Hello'},{id: 2, title: 'Test'},{id: 3, title: 'Text'}],
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return { ...state, posts: action.payload};
        case ADD_POST:
            return { ...state, posts: action.payload};
        case DEL_POST:
            return {posts: action.payload};
        default:
            return state;
    }
};




export default postsReducer