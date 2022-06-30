let store = []
const MAGIC = 'Magic';

function reducer(state, action) {
    if (action.type === MAGIC) {
        return [...state, action.payload]
    }
    return state
}

function dispatch(action) {

    if (typeof action === 'function') {
        action(dispatch)
    } else {
        store.push(action)
    }

    store = reducer(store, action);
}

const action1 = {
    type: MAGIC,
    payload: { answer: 42 }
}

dispatch(action1);
dispatch(action1);
dispatch(action1); // store is now [{ answer: 42 }, { answer: 42 }, { answer: 42 }]
////////////////////
// to jest to samo co niżej
dispatch ((dispatch_) =>{
    dispatch_({
        type: MAGIC,
        payload: {magic: false}
    })
})
console.log(store);

// to jest to samo co wyżej 
const doMagic = (dispatch_) =>{
    dispatch_({
        type: MAGIC,
        payload: {magic: false}
    })
}
dispatch (doMagic)
console.log(store);
////////////////////

const upper = (text) => {
    return text[0].toUpperCase() + text.slice[1];
}

const reverse = (text) => {
    return text.split('').reverse().join('');
}

const createSentece = (text, fn) => {
    return fn(text);
}

// console.log(createSentece(upper('Elo'), reverse));
console.log(createSentece('Elo', upper, reverse));


// function notThunk() {
//     return function thunk (){
        
//     }
// }