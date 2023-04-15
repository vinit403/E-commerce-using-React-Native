const initState = 0
const upDown = (state = initState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state = state + 1
            break;
        case "DECREMENT":
            return state = state - 1
            break;
        case "ADDNUM":
            return state = state + action.data
            break;
        default:
            return state

    }
}
export default upDown;