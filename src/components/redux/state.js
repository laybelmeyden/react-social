// import messageReducer from "./messageReducer";
// import profileReducer from "./profileReducer";


// let store = {
//   _state: {
//     messagesPage: {
//       userDialogs: [
//         { id: 1, name: "name1" },
//         { id: 2, name: "name2" },
//         { id: 3, name: "name3" },
//         { id: 4, name: "name4" },
//         { id: 5, name: "name5" },
//         { id: 6, name: "name6" },
//         { id: 7, name: "name7" },
//       ],
//       userDialodsMessages: [
//         { id: 1, mess: "mess1" },
//         { id: 2, mess: "mess2" },
//         { id: 3, mess: "mess3" },
//         { id: 4, mess: "mess4" },
//         { id: 5, mess: "mess5" },
//         { id: 6, mess: "mess6" },
//         { id: 7, mess: "mess7" },
//       ],
//       newMessageText: "",
//     },
//     profilePage: {
//       userPosts: [{ id: 1, mess: "test", like: 0 }],
//       newPostText: "Напишите что нибудь",
//     },
//   },
//   getState() {
//     return this._state;
//   },
//   _rerenderFunc() {
//     console.log("123123");
//   },
//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.messagesPage = messageReducer(this._state.messagesPage, action);
//     this._rerenderFunc(this._state);
//   },
//   subscribe(observer) {
//     this._rerenderFunc = observer;
//   },
// };

// export default store;
// window.store = store;
