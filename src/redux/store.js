import profileReducer from "./profile-reucer";
import dialogReducer from "./dialog-reducer";
import sitebarReducer from "./sitebar-reduser";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

let store = {
    _state: {
        profilePage: {
            post: [
                {id: 1, message: 'Hello', like: 15},
                {id: 2, message: 'How are you?', like: 20},
                {id: 3, message: 'Hello', like: 15},
                {id: 4, message: 'How are you?', like: 20}
            ],
            newPostText: 'Введіть назву поста'
        },
        dialogPage: {
            dialog: [
                {id: 1, name: 'Misha'},
                {id: 2, name: 'Dima'},
                {id: 3, name: 'Vlad'},
                {id: 4, name: 'Sania'},
                {id: 5, name: 'Oleg'}
            ],
            massage: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo'}
            ],
            newMessageBody: ''
        },
        sitebar: {
            frends: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Vlad'},
                {id: 3, name: 'Tania'}
            ]
        }
    },
    _renderEntireTree() {
        console.log('Heool');
    },

    subscribe(observer) {
        this._renderEntireTree = observer;
    },
    getState() {
        return this._state;
    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
        this._state.sitebar = sitebarReducer(this._state.sitebar, action);

        this._renderEntireTree(this._state);
    }
}




export default store;