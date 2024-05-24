
import TestModelView from "../viewmodels/TestModelView";
export default function VarTwo(props){
    console.log("var two is rendered");

    const vartwo=TestModelView.store((state)=>state.vartwo)
    


    return (<h1>{vartwo}</h1>);


}