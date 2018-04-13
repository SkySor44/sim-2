const initialState = {
    propName: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    image: '',
    mortgage: 0,
    rent: 0
}

const UPDATE_STEP_ONE = 'UPDATE_STEP_ONE';
const UPDATE_STEP_TWO = 'UPDATE_STEP_TWO';
const UPDATE_STEP_THREE = 'UPDATE_STEP_THREE';
const RESET_STATE = 'RESET_STATE';

export function resetState(){
    return {
        type: RESET_STATE,
        payload: initialState
    }
}


export function updateStepOne(propName, address, city, state, zip){
    return{
        type: UPDATE_STEP_ONE,
        payload: {
            propName: propName,
            address: address, 
            city: city, 
            state: state,
            zip: zip
        }
    }
}

export function updateStepTwo(image){
    return{
        type: UPDATE_STEP_TWO,
        payload: image
    }
}

export function updateStepThree(mortgage, rent){
    return{
        type: UPDATE_STEP_THREE,
        payload: {
            mortgage: mortgage,
            rent: rent
        }
    }
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_STEP_ONE:
        return Object.assign({}, state, {propName: action.payload.propName, address: action.payload.address, city: action.payload.city, state: action.payload.state, zipcode: action.payload.zipcode});
           
        case UPDATE_STEP_TWO:
        return Object.assign({}, state, {image: action.payload});

        case UPDATE_STEP_THREE:
        return Object.assign({}, state, {mortgage: action.payload.mortgage, rent: action.payload.rent});

        case RESET_STATE:
        return Object.assign({});

        default: return state;
    }
}