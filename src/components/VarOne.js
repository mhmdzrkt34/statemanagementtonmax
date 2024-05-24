
import TestModelView from "../viewmodels/TestModelView";
export default function VarOne(props){
    console.log("var one is rendered");
    const varone=TestModelView.store((state)=>state.varone)


    return (<h1>{varone}</h1>);


}
