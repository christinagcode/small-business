export const addBusiness= (business) =>{
    console.log("in actions", business);
    return {
        type: "ADD_BIZ",
        payload: business
    }
}

export const removeBusiness =(index) =>{
    console.log("in actions", index);
    return{
        type: "REMOVE_BIZ",
        payload: index
    }
}