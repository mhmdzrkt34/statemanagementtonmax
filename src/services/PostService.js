import axios from "axios";

class PostService {

    constructor(){
        this.api=axios.create({


            baseURL:"https://jsonplaceholder.typicode.com/"
        })


        if(!PostService.instance){


            PostService.instance=this;


        }

        return PostService.instance;
    }


    async getPosts(){

        try{
            const responce=await this.api.get("/posts");

            return responce.data;




        }catch(e){
            throw e
        }
    }





}

const instance=new PostService();


Object.freeze(instance);


export default instance;