export default (state, action) => {

    console.log("ACTION :", action)
    switch (action.type) {
        case "ADD_TRANSACTION":
            return {
                ...state,
                User: [...state.User, action.payload],
                User_Register: state.User_Register + 1
            }

        case "DELETE_USER":

            return {
                ...state,
                User: state.User.filter(((item, index) => index !== action.key)),
                // User : state.User.splice(User.index, 1),
                
                User_Register: state.User_Register - 1
            }




        default:
            return state

    }
}