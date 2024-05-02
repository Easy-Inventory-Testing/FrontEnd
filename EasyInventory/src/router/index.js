//Routing Module
import {createRouter, createWebHistory} from "vue-router";
import userComponent from "@/user/components/user.component.vue";
import homeComponent from "@/inventory/components/home.component.vue";
import signUpComponent from "../public/pages/signup.component.vue";
import loginComponent from "@/public/pages/login.component.vue";
import searchComponent from "@/search/components/search.component.vue";
import customerComponent from "@/customers/components/register-customer.component.vue";
import productComponent from "@/products/components/product.component.vue";
import providerComponent from "@/providers/components/provider.component.vue";
import shoppingComponent from "@/shops/component/shopping.component.vue";
import saleComponent from "@/sales/components/sales.component.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/home', component: homeComponent, meta: {title: 'Home'}},
        {path: '/user', component: userComponent},
        {path: '/search', component: searchComponent},
        {path: '/customer', component: customerComponent},
        {path: '/provider', component: providerComponent},
        {path: '/product', component: productComponent},
        {path: '/shopping', component: shoppingComponent},
        {path: '/sale', component: saleComponent},
        {path: '/sign-up',component: signUpComponent},
        {path: '/login',component: loginComponent},
        {path: '/', redirect: '/login'}
    ]

})


export default router;