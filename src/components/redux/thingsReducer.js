import uuidv4 from 'uuid/v4'

const initState = {
    thingsDone: [
        {
            id: uuidv4(),
            thing: "A thing I did today"
        },
        {
            id: uuidv4(),
            thing: "Another thing I did"
        }
    ]
}

export const thingsReducer = (state = initState, action) => {
    if (action.type === 'ADD_THING') {
        return {
            ...state,
            thingsDone: [...state.thingsDone, action.payload]
        }
    }
    else { return state }  // this line returns state when not updated (initial state) 
    // !!!!!! It took fucking 4 hours !!!!!!
}


export const addAction = (thing) => ({ type: 'ADD_THING', payload: thing })





