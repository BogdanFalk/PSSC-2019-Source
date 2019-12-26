<template>
  <v-app class="overflow-hidden">
    <v-content transition="slide-x-transition"> 
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  })
};
</script>

<style>

</style>