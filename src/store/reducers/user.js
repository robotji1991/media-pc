const initialState = {
    token:localStorage.getItem('media-pc')||''
}

const user = (state = initialState,action) => {
    switch(action.type){
        case "login/setToken":
            return {
                ...state,
                token:action.payload
            }
            default:
                return state
    }
}

export default user