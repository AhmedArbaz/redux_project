// ham action-craetor banty hain jo kay hamin batata hay kay reducer kia karay aur reducer bhot saray ho sakty hin e.g deposit, withdraw,ager normal example dakhin to bacha hamara ui tha aur reducer ko bhot kam ho sakty hain bachy ko khana khilana , sleep ,etc reducer ko insturction 

const reducer = (state=0, action) => {
    if(action.type === 'deoposit'){
        return state + action.payload
    }
    else if(action.type === 'withdraw'){
        return state - action.payload
    }
    else{
        return state
    }
}
export default reducer
// ya ham nay reducer bana lia hay 

   