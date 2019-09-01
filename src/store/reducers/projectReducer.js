const initState = {
    projects: [
        { id: '1', title: 'title sth', content: 'let it be' },
        { id: '2', title: 'title sth sth', content: 'let it go' },
        { id: '3', title: 'title sth sth sth', content: 'let it snow' }
    ]
}

const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer;