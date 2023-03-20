import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import ReactDOM from "react-dom";
import App from "../App";
import React from "react";

let state = {
    posts: [
        { id: 1, message: 'It\'s my fourth post', likesCount: 49 },
        { id: 2, message: 'It\'s my third post', likesCount: 42 },
        { id: 3, message: 'It\'s my second post', likesCount: 46 },
        { id: 4, message: 'It\'s my first post', likesCount: 31 }
    ]
};

it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("New Post");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(5);

});

it('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator("New Post");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[4].message).toBe("New Post");
});

it('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    // 1. test data
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});