import { create } from "zustand";

import PostService from "../services/PostService";

const useStore=create(set=>({



  posts:[],

  getPostsList:(PostList)=>set(state=>({


    posts:PostList
  }))



}))


class HomeModelView {

  constructor(){

    if(!HomeModelView.instance){

      this.store=useStore;


      HomeModelView.instance=this;
    }

    return HomeModelView.instance;


  }

  async getPostsList(){

    try {
      var posts=await PostService.getPosts();

      this.store.getState().getPostsList(posts);


    }catch(e){
      throw e
    }
  }




}



const instance=new HomeModelView();
Object.freeze(instance);

export default instance;