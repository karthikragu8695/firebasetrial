<template>
   <div>
      <h1>
    Home page</h1>
   <button @click="logout">Logout</button>
   </div>

   
</template>

<script>
import {firebase} from '../firebase'
export default{
    methods:{
      logout(){
         firebase.auth().signOut()
      }
    }
}
</script>