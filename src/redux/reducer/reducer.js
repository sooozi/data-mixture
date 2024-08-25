//초기값이 필요!
let initialState={
    count: 0,
    id: "",
    password: "",
}

//행동지침이 들어가는 부분
function reducer(state=initialState, action) {
    console.log(action);

    // if(action.type === "INCREMENT") {
    //     //return 값으로 reducer가 store를 바꾸는 역할을 함!
    //     //...state한 이유 : (만약 state가 여러개이면)다른 state값은 유지하되!
    //     //count만 바꾼다 ^^
    //     //store는 주소값이 바뀐것만 반응하기 때문에 새로운 주소에 객체를 넣어서 전달한다!
    //     // return {...state, count:state.count+1}
    //     return {...state, count:state.count + action.payload.num}
    // }

    //if, switch 모두 사용 가능! 회사 규정에 따라 사용하면 됨 ^^
    switch (action.type) {
        case "INCREMENT" :
            return {...state, count:state.count + action.payload.num};
        case "DECREMENT" :
            return {...state, count:state.count - action.payload.num};
        case "INCREMENT02" :
            return {...state, count:state.count + action.payload.num};
        case "DECREMENT02" :
            return {...state, count:state.count - action.payload.num};
        case "LOGIN" :
            return {...state, id:action.payload.id, password:action.payload.password};
        default:
            return {...state};

    }
    // return {...state};
}

export default reducer;