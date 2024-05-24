
import TestModelView from "../viewmodels/TestModelView";
export default function AddVarOne(){
    console.log("var one button is rendered");


    return <>

    <button  onClick={(e)=>{

        TestModelView.addVarOne();


    }}>add Var One</button>
    </>
}

