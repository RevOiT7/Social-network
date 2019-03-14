const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

let initialState = {
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
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.massage.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}

export let sendMessageCreator = () => ({type: SEND_MESSAGE});

export let updateNewMassageBodyCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text

})

export default dialogReducer;