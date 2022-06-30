let store = []
const MAGIC = 'Magic';

function reducer(state, action) {
    if (action.type === MAGIC) {
        return [...state, action.payload]
    }
    return state
}

function dispatch(action) {
    store = reducer(store, action);
}

const action1 = {
    type: MAGIC,
    payload: { answer: 42 }
}

dispatch(action1);
dispatch(action1);
dispatch(action1); // store is now [{ answer: 42 }, { answer: 42 }, { answer: 42 }]
console.log(store);
