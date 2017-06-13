import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            //return state.concat([action.payload.data]);
            //Don't manipulate state in redux. Use concat. Create a new array and return state
            return [ action.payload.data, ...state];
    }
    return state;
}
