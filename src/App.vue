<template>
    <div>
      <auth-page v-if="!loggedIn"></auth-page>
      <layout-page v-else></layout-page>
    </div>
</template>


<script>
import AuthPage from './components/HelloWorld.vue'
import LayoutPage from './views/LayoutPage.vue';
export default{
  data(){
    return{
    }
  },
  computed:{
    loggedIn(){
        return this.$store.getters.isLoggedIn
    }
  },
    components:{
      AuthPage,
      LayoutPage
    }
}

</script>

<style>
body{
  background-color: blueviolet;
}
</style>