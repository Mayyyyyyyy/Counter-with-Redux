import {add,subtract} from '../actions/action'

const reducer = (state=10,action)=>{
    switch(action.type){
        case add.type:
            return state+1;
        case subtract.type:
            return state-1;
        default:
            return state;
    }
}

export default reducer;