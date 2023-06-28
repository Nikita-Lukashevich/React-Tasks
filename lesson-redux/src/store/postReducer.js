export const GET_POSTS = "GET_POSTS"
export const DEL_POST = "DEL_POST"
export const ADD_POST = "ADD_POST"

const initialState = {
    posts: [],
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return { ...state, posts: [...state.posts, ...action.payload]};
        case ADD_POST:
            return { ...state, posts: action.payload};
        case DEL_POST:
            return {posts: action.payload};
        default:
            return state;
    }
};

export const getAllPosts = (payload) => ({type: GET_POSTS, payload})


export default postsReducer