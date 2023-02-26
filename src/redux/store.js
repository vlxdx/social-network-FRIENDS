import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'It\'s my fourth post', likesCount: 49 },
                { id: 2, message: 'It\'s my third post', likesCount: 42 },
                { id: 3, message: 'It\'s my second post', likesCount: 46 },
                { id: 4, message: 'It\'s my first post', likesCount: 31 }
            ],
            newPostText: 'It\'s my fifth post'
        },
        dialogsPage: {
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
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State was changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}



export default store;
window.store = store;
// store - OOP