import {createRouter,createWebHistory} from "vue-router";
import HomeBlock from "../components/HomeBlock.vue";



let router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            name:'home',
            path:'/',
            component:HomeBlock
        }
    ]
})

export default router