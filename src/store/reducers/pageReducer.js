import { OPEN_PAGE, CLOSE_PAGE} from 'store/actions/types'; 



const intialState = {
    open: false 
}


export default function(state = intialState, action) { 
    switch(actions.type) {
        case PAGE_OPEN: 
            return true
        case PAGE_CLOSE: 
            return false
        default: 
            return state 
    }
}