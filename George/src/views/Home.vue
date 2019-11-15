<template>
  <div class="home">
    <tabbar></tabbar>
    <!-- <login></login> -->
  </div>
</template>

<script>
  // @ is an alias to /src
  import tabbar from "../components/shopping/tabbar.vue";
  // import login from "../components/shopping/login.vue";
  export default {
    // name: "home",
    components: {
      // HelloWorld
      tabbar
    }
  };
</script>
