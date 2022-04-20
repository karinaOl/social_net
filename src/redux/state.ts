import {DialogsActionType, dialogsReducer} from "./dialogsReducer";
import {ProfileActionType, profileReducer} from "./profileReducer";
import {sidebarReducer} from "./sidebarReducer";

type MessageType = {
    id: number
    message: string
}

type DialogType = {
    id: number
    name: string
}

type PostType = {
    id: number
    message: string
    likesCount: number
}

type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}

type ProfilePageType = {
    posts: Array<PostType>
    messageForNewPost: string
}

type SidebarType = {}

type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

type StoreType = {
    _state: RootStateType
    addPost: (postMessage: string) => void
    changeNewText: (newValue: string) => void
    _renderTree: (state: RootStateType) => void
    subscribe: (callBack: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionType) => void
}

type ActionType = ProfileActionType | DialogsActionType;

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello, how are you?', likesCount: 5},
                {id: 2, message: 'How it is going?', likesCount: 8},
            ],
            messageForNewPost: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Karina'},
                {id: 2, name: 'Leha'},
                {id: 3, name: 'Ilona'},
                {id: 4, name: 'Margarita'}
            ],
            messages: [
                {id: 1, message: 'Hello!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Hey hey!'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _renderTree(state: RootStateType) {
        console.log("State changed");
    },
    subscribe(callBack: (state: RootStateType) => void) {
        this._renderTree = callBack;
    },
    getState() {
        return this._state;
    },
    addPost(postMessage: string) {
        let newPost = {id: new Date().getTime(), message: postMessage, likesCount: 1};
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.messageForNewPost = ''
        this._renderTree(this._state);
    },
    changeNewText(newValue: string) {
        this._state.profilePage.messageForNewPost = newValue;
        this._renderTree(this._state);
    },
    dispatch(action) {
        /*this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._renderTree(this._state)*/
    }
}







