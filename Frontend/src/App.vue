<template>
  <v-app>
    <span :style="{'background-image':'url('+require('./assets/main-bk2.jpg')+')'}" class="main-container-background" ></span>
    <v-container pa-0 ma-2 elevation-3 fluid>
      <v-row pa-0 ma-0 elevation-3 fluid>
       <v-navigation-drawer elevation-3 v-model="sidebar" app>
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar elevation-3 app>
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="sidebar = !sidebar">
        </v-toolbar-side-icon>
      </span>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
      </v-row>
    </v-container>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>


<script>
export default {
  name: "App",
  data() {
    return {
      appTitle: 'Awesome App',
      sidebar: false,
      menuItems: [
          { title: 'Home', path: '/home', icon: 'home' },
          { title: 'Sign Up', path: '/signup', icon: 'face' },
          { title: 'Sign In', path: '/signin', icon: 'lock_open' }
     ]
    };
  }
};
</script>

<style>

.main-container-background{
   
    background-size:cover;
    background-position-y: -120px;
    scroll-behavior: smooth;
     width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    
}

</style>