import VueRouter from 'vue-router'

import WordPart from '../pages/WordPart.vue'

export default new VueRouter({
    routes: [
        // {
        //     path:'/',
        //     component:WordPart
        // },
        {
            path:'/wordpart',
            component:WordPart
        }
    ]
})