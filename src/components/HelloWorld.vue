<template>
   <section class="container flex">
        <div class="bg-white w-[400px] h-[450px] mx-auto rounded-[10px]  mt-12">
            <h1 v-if="!login"  class="font-bold text-3xl text-center pt-10" >sign up</h1>
            <h1 v-else class="font-bold text-3xl text-center pt-10">sign in</h1>
            

            <div class="mt-5 text-center">
                <input type="Email" v-model="email" placeholder="Email" class="text-center w-[350px] h-[35px] text-[20px] focus:outline-none border border-gray-400 rounded-[10px]">
                <input type="password" v-model="password" placeholder="password" class="text-center mt-5 w-[350px] h-[35px] text-[20px] focus:outline-none border border-gray-400 rounded-[10px]">
                <input type="password" v-model="confirmpassword" placeholder="confirm password" v-if="!login" class="text-center mt-5 w-[350px] h-[35px] text-[20px] focus:outline-none border border-gray-400 rounded-[10px]"><br>
                <input type="checkbox" v-if="!login"  class="mt-5" >I accept the terms of use & Privacy policy <br>
                <button v-if="!login" @click="registerUser" class="mt-5 bg-violet-500 w-[350px] h-[35px] rounded-[5px]">Sign Up</button>
                <button v-else  @click="signIn" class="mt-5 bg-violet-500 w-[350px] h-[35px] rounded-[5px]">Sign in</button>
                <h2 v-if="!login" class="mt-5">Already have an account? <button @click="login=true">Login here</button></h2>
                <h2 v-else class="mt-5">create a new account <button @click="login=false">signUp here</button></h2>
                <h2 class="mt-2">Copyright YourCompany.com</h2>
                <dialog :open="loading" class="text-center w-[350px] h-[35px] text-[20px] focus:outline-none border border-gray-400 rounded-[10px]" >
                    <p>please wait</p>
                </dialog>
                <dialog :open="error" class="text-center w-[350px] h-[35px] text-[20px] focus:outline-none border border-gray-400 rounded-[10px]" >
                    <p>{{ errortext }}</p>
                    <button @click="error=false">close</button>
                </dialog>
            </div>
        </div>
       
   </section>
</template>

<script>
import {firebase} from '../firebase'
export default{
    name:'hello-world',
    data(){
        return{
            dialog:false,
            login:false,
            email:'',
            password:'',
            confirmpassword:'',
            loading:false,
            errortext:'',
            error:false
        }
    },
    methods:{
        registerUser(){
            firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
            .then((data) => console.log(data))
        },
        async signIn(){
            this.loading=true
            firebase.auth().signInWithEmailAndPassword(this.email,this.password)
            .then((data) =>{
                this.loading=false
                console.log(data)
            })
            .catch((error) => {
                console.log(error)
                this.loading=false
                this.errortext=error.message
                this.error=true
            })     
        },
        
    }
}
</script>
