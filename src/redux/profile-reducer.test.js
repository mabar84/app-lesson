import profileReducer, {addPostActionCreator, deletePostActionCreator} from './profile-reducer';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, world!', like: 58},
        {id: 2, message: 'I\'m happy', like: 79},
        {id: 3, message: 'Yes!', like: 12},
    ]
}

test('length of posts should be incremented', () => {
    let action = addPostActionCreator('bla-bla')
    let newState = profileReducer(initialState, action)
    expect(newState.posts.length).toBe(4)
})

test('length of posts should be decremented', () => {
    let action = deletePostActionCreator(3)
    let newState = profileReducer(initialState, action)
    expect(newState.posts.length).toBe(2)
})

test('new post should be correct', () => {
    let action = addPostActionCreator('someText')
    let newState = profileReducer(initialState, action)
    expect(newState.posts[0].message).toBe('someText')
})