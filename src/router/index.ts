import {createRouter, createWebHistory} from 'vue-router'
import Form from "../pages/Form.vue";
import Preview from "../pages/Preview.vue";

const routes = [
    {
        path:'/',
        component:Form
    },
    {
        path:'/preview',
        component:Preview
    },
]
export const router = createRouter({routes,history:createWebHistory()})