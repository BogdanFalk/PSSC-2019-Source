<template>
  <v-container fluid  fill-height ma-0 pa-0 :style="{'background-image':'url('+require('../assets/main-bk-full-hd.png')+')'}" class="main-container-background" >
    <v-row fluid align="center" justify="space-between" no-gutters="true">
      <v-col  cols="auto" >
        <v-card  class="">
          <v-navigation-drawer permanent>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title">Application</v-list-item-title>
                <v-list-item-subtitle>subtext</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense nav>
              <v-list-item v-for="item in items" :key="item.title" link>
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </v-col>
      <v-col   cols="auto">
        <v-card color="rgb(255, 255, 255, 0.5)" min-width="740">
          <v-card-title class="pa-11 justify-center">Need a place to rest?</v-card-title>
        </v-card>
      </v-col>
      <v-col   cols="auto">
        <v-card  class="">
          <v-navigation-drawer right permanent>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title">Application</v-list-item-title>
                <v-list-item-subtitle>subtext</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense nav>
              <v-list-item v-for="item in items" :key="item.title" link>
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" }
      ]
    };
  }
};
</script>

<style>
.main-container-background{
   
    background-size:cover;
}
</style>
