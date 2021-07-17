import {rerenderFunc} from '../../render';
const state = {
    messagesPage:{
        userDialogs:[
            {id:1, name:'name1'},
            {id:2, name:'name2'},
            {id:3, name:'name3'},
            {id:4, name:'name4'},
            {id:5, name:'name5'},
            {id:6, name:'name6'},
            {id:7, name:'name7'},
        ],
        userDialodsMessages:[
            {id:1, mess:'mess1'},
            {id:2, mess:'mess2'},
            {id:3, mess:'mess3'},
            {id:4, mess:'mess4'},
            {id:5, mess:'mess5'},
            {id:6, mess:'mess6'},
            {id:7, mess:'mess7'},
          ]
    },
    profilePage:{
        userPosts:[
            {id:1, mess:'mess1', like:0},
            {id:2, mess:'mess2', like:20},
            {id:3, mess:'mess3', like:30},
            {id:4, mess:'mess4', like:40},
            {id:5, mess:'mess5', like:50},
            {id:6, mess:'mess6', like:550},
            {id:7, mess:'mess7', like:20},
        ]
    }
}
export const profilePageAddPost = (postMessage) => {
    const newPost = {
        id: 5555,
        mess: postMessage,
        like: 0
    };
    state.profilePage.userPosts.push(newPost);
    rerenderFunc(state);
}
export const messagesPageAddPost = (postMessage) => {
    const newPost = {
        id: 123,
        mess: postMessage
    };
    state.messagesPage.userDialodsMessages.push(newPost);
    rerenderFunc(state);
}
export default state;