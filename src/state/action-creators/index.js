// ya setup ak bar kia jata hay aur phir done
export const depositMoney = (amount) => {
   return(dispatch)=>{
    dispatch({ //dispatch is a function which takes an object
        type:'deoposit',
        payload:amount,
    })
   } 
}

export const withdrawMoney = (amount) => {
    return(dispatch)=>{
        dispatch({
            type:'withdraw',
            payload:amount,
        })
    }
}
// ham nay 2 function deposit and withdraw banay hain jo kay dispatch function may obj latay hian ya ak template hoti hay hamysha same banti hay 