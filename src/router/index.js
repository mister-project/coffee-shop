import Vue from 'vue'
import VueRouter from 'vue-router'

import HeroView from '../views/HeroView.vue'
import OurCoffeeView from '../views/OurCoffeeView.vue'
import ForYourPleasure from '../views/ForYourPleasure.vue'
import ContactUs from '@/views/ContactUs.vue'
import Thanks from '@/views/Thanks.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: HeroView
},
{
    path: '/our-coffee',
    component: OurCoffeeView
},
{
    path: '/your-pleasure',
    component: ForYourPleasure
},
{
    path: '/contact-us',
    component: ContactUs
},
{
    path: '/thanks',
    component: Thanks
},

]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router