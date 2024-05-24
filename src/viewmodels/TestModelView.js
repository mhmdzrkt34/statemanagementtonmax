import { create } from "zustand";

const usestore=create((set=>({

    varone:0,


    incrementVarOne:()=>set(state=>({


        varone:state.varone+1,





})),
    vartwo:0,
    incrementVarTwo:()=>set(state=>({
        vartwo:state.vartwo+1



    }))









})));

class TestModelView{

    



    constructor(){

        if(!TestModelView.instance){
            this.store=usestore;


            TestModelView.instance=this;
        }
        return TestModelView.instance;



    }
     addVarOne(){

        this.store.getState().incrementVarOne();
    
    
    }
     addvartwo(){
        this.store.getState().incrementVarTwo();
    
    
        
    }

    
}




const instance=new TestModelView();

Object.freeze(instance);

export default instance;