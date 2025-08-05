//action types

const INCREASE = 'increment'
const DECREASE = 'decrement'

//action creators

export function increment () {
    return { type : INCREASE}
}

export function decrement () {
    return { type : DECREASE}
}

//reducer

export default function reducer(state = 0, action) {
    switch (action.type) {
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        default:
            return state;
    }
}