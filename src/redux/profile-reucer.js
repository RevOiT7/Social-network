const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    post: [
        {id: 1, message: 'Hello', like: 15},
        {id: 2, message: 'How are you?', like: 20},
        {id: 3, message: 'Hello', like: 15},
        {id: 4, message: 'How are you?', like: 20}
    ],
    newPostText: 'Введіть назву поста'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 11
            }
            state.post.unshift(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.nextText;
            return state;
        default:
            return state;
    }
}


export let addPostActionCreator = () => ({type: ADD_POST});


export let updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    nextText: text

})

export default profileReducer;