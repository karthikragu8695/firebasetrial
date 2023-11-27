import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {firebase} from './firebase'

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        store.commit("SET_LOGGED_IN",true)
    }else{
        store.commit("SET_LOGGED_IN",false)
    }
})

createApp (App).use(store).use(router).mount('#app')
