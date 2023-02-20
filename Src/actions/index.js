export const incrementNum =(i)=>{
    console.log("inc")
    return{
        type:"INCREMENT",
        data:i
    }
}
export const decrementNum =(i)=>{
    console.log("dec")
    return{
        type:"DECREMENT",
        data:i
    }
}
export const AddNum =(num)=>{
   
    return{
        type:"ADDNUM",
        data:num
    }
}

export const AddCartItem =(obj)=>{
   
    return{
        type:"add",
        data:obj
    }
}
export const AddQty =(obj)=>{
   
    return{
        type:"add_qty",
        data:obj
    }
}
export const RemoveQty =(obj)=>{
   
    return{
        type:"remove_qty",
        data:obj
    }
}