const initState = []
const addCart = (state = initState,action)=>{
    switch(action.type){
        case "add":
            //console.log(state)
            // let obj = state.find((o, i) => {
            //     if (o.pro_id === action.data.pro_id) {
            //         var temp = o
                    
            //         if(temp.qty===undefined){
            //             //console.log("called"+temp.qty)
            //             temp.qty =1
            //         }else{
            //             temp.qty = parseInt( temp.qty) +1
            //         }
            //         //console.log(temp)
            //         state[i]=temp
            //        // temp.
            //         //state[i] = { qty: state[i].qty+1, value: 'this', other: 'that' };
            //         return true; // stop searching
            //     }
            // });
            // // console.log(obj)
            // if(obj){
            //     state = state
            //     return state
            // }
            return state = [...state,action.data]
            break;
        case "add_qty":
            const index = state.findIndex(item => item.pro_id === action.data.pro_id)

            return [
            ...state.slice(0, index), // everything before current post
            {
                
                ...state[index],
                qty: action.data.qty ? action.data.qty+1 :1,
            },
            ...state.slice(index + 1), // everything after current post
            ]
            break;
        case "remove_qty":
            const inde = state.findIndex(item => item.pro_id === action.data.pro_id)

            return [
            ...state.slice(0, inde), // everything before current post
            {
                
                ...state[inde],
                qty: action.data.qty ? action.data.qty-1 :1,
            },
            ...state.slice(inde + 1), // everything after current post
            ]
        default:
            return state
        
    }   
}
export default addCart;