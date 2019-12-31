<template>
 <div :style="{'background-image':'url('+require('./assets/main-bk3.jpg')+')'}" class="main-container-background" >
 <v-app id="inspire">
    <v-container style="z-index:1" pa-0 ma-2 fluid>
      <v-row justify="center" pa-0 ma-0 fluid>
        <v-col align-self="center">
          <v-flex shrink justify-end>
            <v-btn fixed right color="transparent" fab align-end><v-icon color="#384857">fas fa-user</v-icon></v-btn>
          </v-flex>
          
        </v-col>
      </v-row>
      <v-row justify="center" pa-0 ma-0 fluid>
        <v-col align-self="center">
          <h2 class="bar-title-text">LhotelS</h2>
        </v-col>
      </v-row>
    </v-container>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
  </div>
  
</template>


<script>
export default {
  name: "App",
  data() {
    return {
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
@import url('https://fonts.googleapis.com/css?family=Satisfy&display=swap');

.main-container-background{

  background-size:cover;
    
}

.bar-title-text{
    font-family: 'Satisfy', cursive;
    color:#384857;
    font-size: 5rem;
    text-align: center;
}

#inspire {
  background: none;
}

</style>