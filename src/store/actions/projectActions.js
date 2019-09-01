export const createProject = (project) => {
    // redux thunk allows us to return a function instead of just an action, that's when we can pause to get asynchronous data from the database
    return (dispatch, getState) => {
        // make async call to database, halt the dispatch and then start it again
        dispatch({ type: 'CREATE_PROJECT', project: project })
    }
}