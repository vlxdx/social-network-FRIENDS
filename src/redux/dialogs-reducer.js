const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Joanne' },
        { id: 2, name: 'Alison' },
        { id: 3, name: 'Volodymyr' },
        { id: 4, name: 'Alex' },
        { id: 5, name: 'Marie' },
        { id: 6, name: 'Ashley' }
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'How is it going?' },
        { id: 4, message: 'Hey!' },
        { id: 5, message: 'What\'s up?' }
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;