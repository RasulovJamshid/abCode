import {combineReducers,createStore} from 'redux';
const editorValue=(state="type",action)=>{
    switch(action.type) {
        case "UPDATE_VAL":
            return action.payload;    
        default:
            return state;
    };
};
const colorPalette=(state=0,action)=>{
    switch(action.type) {
        case "COLOR":
            return action.payload;    
        default:
            return state;
    };
};
const precode=(state="type",action)=>{
    switch(action.type) {
        case "PRECODE":
            return action.payload;    
        default:
            return state;
    };
};


export const editorValAct=(response)=>(
    {
        type:"UPDATE_VAL",
        payload:response,
    }
)

const initialStates={
    editorValue:"type",
    colorPalette:0,
    precode:"type",

}
const reducers= combineReducers({editorValue,colorPalette,precode});


export const store=createStore(reducers,initialStates);