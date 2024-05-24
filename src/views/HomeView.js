import "../views/HomeView.css"

import HomeModelView from "../viewmodels/HomeModelView"
import { useEffect } from "react"

export default function HomeVIew(){

    const posts=HomeModelView.store(state=>state.posts)


    useEffect(()=>{


        HomeModelView.getPostsList();

    },[])

    





    return (


        posts.map((item,index)=>{


            return(<h1 key={index}>{item['title']}</h1>)
        })

    )
}