<template>
  <div
    :style="{'background-image':'url('+require('./assets/main-bk5.jpg')+')'}"
    class="main-container-background"
  >
    <v-app id="inspire">
      <v-dialog v-model="overlay" hide-overlay max-width="1000" max-height="650">
        <v-card
          min-height="65vh"
          min-width="65%"
          color="rgb(255, 0, 0, 1)"
          class="account-overlay-card"
          v-if="!isLogged"
        >
          <transition name="fade">
            <div v-if="tryingToLogIn">
              <v-conatiner>
                <v-row>
                  <h2 class="login-text-title-card">Log In</h2>
                </v-row>

                <v-row justify="center">
                  <v-col cols="10" sm="5">
                    <v-text-field class="centered-input" v-model="username" placeholder="Username"></v-text-field>
                  </v-col>
                </v-row>

                <v-row justify="center">
                  <v-col cols="10" sm="5">
                    <v-text-field class="centered-input"  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"   :type="show1 ? 'text' : 'password'" @click:append="show1 = !show1" v-model="password" placeholder="Password"></v-text-field>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-btn v-on:click="loginUser" rounded>Log In</v-btn>
                </v-row>
                <v-row style="margin-top: 120px;" justify="center" align="baseline">
                  <h2 class="login-text-register-card">Don't have an account?</h2>
                  <v-btn v-on:click="changeLoginRegisterCard" rounded>Register</v-btn>
                </v-row>
              </v-conatiner>
            </div>

            <div v-else>
              <v-conatiner>
                <v-row>
                  <h2 class="login-text-title-card">Register</h2>
                </v-row>

                <v-row justify="center">
                  <v-col cols="10" sm="5">
                    <v-text-field
                      class="centered-input"
                      v-model="registerUsername"
                      placeholder="Username"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row justify="center">
                  <v-col cols="10" sm="5">
                    <v-text-field
                      class="centered-input"
                      v-model="registerPassword"
                      placeholder="Password"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"   :type="show1 ? 'text' : 'password'" @click:append="show1 = !show1"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="10" sm="5">
                    <v-text-field
                      class="centered-input"
                      v-model="registerFirstName"
                      placeholder="First Name"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="10" sm="5">
                    <v-text-field
                      class="centered-input"
                      v-model="registerLastName"
                      placeholder="Last Name"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-btn v-on:click="registerUser" rounded>Register</v-btn>
                </v-row>
                <v-row justify="center">
                  <h2 class="login-text-register-card">Already have an account?</h2>
                  <v-btn
                    style="margin-botton:10px"
                    v-on:click="changeLoginRegisterCard"
                    rounded
                  >Log In</v-btn>
                </v-row>
              </v-conatiner>
            </div>
          </transition>
        </v-card>
        <v-card
          min-height="65vh"
          min-width="65%"
          color="rgb(255, 0, 0, 1)"
          class="account-overlay-card"
          v-if="isLogged"
        >
          <v-container>
            <v-row class="left-side-user-hotels" cols="3">
              <v-container>
                <v-row justify="center" style="margin-top:1vh">
                  <v-avatar color="#384857" size="62">
                    <v-icon dark size="50">mdi-account-circle</v-icon>
                  </v-avatar>
                </v-row>
                <v-row justify="center">
                  <h2>{{surname}} {{name}}</h2>
                </v-row>
                <v-row justify="center">
                  <v-btn v-on:click="logOffUser" rounded>Log Out</v-btn>
                </v-row>
              </v-container>
            </v-row>
            <v-divider class="mx-4"></v-divider>
            <v-row>
              <v-col>
                <v-container>
                  <h2 class="home-subtext-search">Favorite Hotels</h2>
                  <v-row>
                    <v-col v-for="index2 in (0,numberOfRowsInFavoriteHotels)" :key="index2">
                      <v-card
                        class="elevation-16 mx-auto hotels-card"
                        :style="{'background-image':'url('+hotels[index2-1].img+')'}"
                        width="200"
                        hight="50"
                      >
                        <v-card-title class="headline" primary-title>
                          <h2 class="hotels-text-title-card">{{hotels[index2-1].name}}</h2>
                        </v-card-title>
                        <v-card-text>
                          <div class="text-center mt-3 rating-div">
                            <v-rating
                              v-model="hotels[index2-1].rating"
                              color="orange darken-3"
                              background-color="darkgrey"
                              empty-icon="$ratingFull"
                              half-increments
                              hover
                              small
                              readonly
                            ></v-rating>
                          </div>
                        </v-card-text>
                        <v-divider style="background-color:black; height: 5px;"></v-divider>
                        <div style="background-color:#f7dbc1c0;">
                          <v-card-actions class="justify-space-between">
                            <v-bottom-sheet class="bottom-sheet-hotel" inset max-width="35%">
                              <template v-slot:activator="{ on }">
                                <v-btn text v-on="on">
                                  <v-icon size="18">mdi-phone</v-icon>Phone
                                </v-btn>
                              </template>
                              <v-sheet class="text-center" height="100px">
                                <div class="my-3 text-sub-hotel">{{hotels[index2-1].name}}</div>

                                <div class="my-3 text-sub-hotel">{{hotels[index2-1].phone}}</div>
                              </v-sheet>
                            </v-bottom-sheet>
                            <v-btn v-on:click="deleteFavoriteHotel(hotels[index2-1].id)" text>
                              <v-icon size="18">mdi-close</v-icon>Favorite
                            </v-btn>
                          </v-card-actions>
                        </div>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-dialog>
      <v-container style="z-index:1" pa-0 ma-2 fluid>
        <v-row justify="center" pa-0 ma-0 fluid>
          <v-col align-self="center">
            <v-flex shrink justify-end>
              <v-btn v-on:click="switchOverlay" fixed right color="transparent" fab align-end>
                <v-icon color="#384857">fas fa-user</v-icon>
              </v-btn>
            </v-flex>
          </v-col>
        </v-row>
        <v-row justify="center" pa-0 ma-0 fluid>
          <v-col align-self="center">
            <h2 class="bar-title-text" v-parallax="0.1">LhotelS</h2>
          </v-col>
        </v-row>
      </v-container>
      <v-content>
        <router-view></router-view>
      </v-content>
      <v-snackbar v-model="snackbar" :timeout="timeout">
        <h2 class="snackbar-text">{{snackbarText}}</h2>
      </v-snackbar>
    </v-app>
  </div>
</template>


<script>
/* eslint-disable no-alert, no-console, no-unused-vars */
import axios from "axios";
import { EventBus } from "./event-bus.js";

export default {
  name: "App",
  data() {
    return {
      show1:false,
      overlay: false,
      isLogged: false,
      tryingToLogIn: true,
      tryingToRegister: false,
      username: "",
      password: "",
      registerUsername: "",
      registerPassword: "",
      registerFirstName: "",
      registerLastName: "",
      surname: "",
      timeout: 2000,
      snackbar: false,
      snackbarText: "",
      name: "",

      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Account", icon: " mdi-account-box" },
        { title: "Admin", icon: "mdi-gavel" }
      ],
      hotels: []
    };
  },
  methods: {
    switchOverlay() {
      this.overlay = true;
      //  console.log((Math.trunc(this.hotels.length/3)));
    },
    changeLoginRegisterCard() {
      this.tryingToLogIn = !this.tryingToLogIn;
      this.tryingToRegister = !this.tryingToRegister;
    },

    logging() {},
    testApi() {
      axios
        .post("/api/test", {
          test: "yes"
        })
        .then(
          response => {
            console.log(response.body);
          },
          error => {
            console.log(error);
          }
        );
    },
    loginUser() {
      console.log("Logging User..");
      axios
        .post("http://lhotels.herokuapp.com/api/user/login", {
          username: this.username,
          password: this.password
        })
        .then(
          response => {
            localStorage.setItem("id", response.data.id);
            this.name = response.data.firstName;
            this.surname = response.data.lastName;
            this.isLogged = true;
            this.getAllFavoriteHotels();
            this.$root.$emit("userLogged", true);
            this.snackbar = true;
            this.snackbarText = "Login Successfully!";
          },
          error => {
            console.log(error);
            this.snackbar = true;
            this.snackbarText = "Login Failed!";
          }
        );
    },
    registerUser() {
      console.log("Register User..");
      axios
        .post("http://lhotels.herokuapp.com/api/user/register", {
          firstName: this.registerFirstName,
          lastName: this.registerLastName,
          username: this.registerUsername,
          password: this.registerPassword
        })
        .then(
          response => {
            console.log(response.data);
            this.hotels = response.data;

            this.tryingToLogIn = !this.tryingToLogIn;
            this.snackbar = true;
            this.snackbarText = "Register Successfully!";
          },
          error => {
            console.log(error);
            this.snackbar = true;
            this.snackbarText = "Register Failed!";
          }
        );
    },
    logOffUser() {
      localStorage.clear();
      this.$root.$emit("userLogged", false);
      this.isLogged = false;
      this.snackbar = true;
      this.snackbarText = "Logged Off!";
    },
    getAllFavoriteHotels() {
      console.log("Trying to get hotels for id:" + localStorage.getItem("id"));
      axios
        .post("http://lhotels.herokuapp.com/api/favoriteHotel/getAllHotels", {
          id: localStorage.getItem("id")
        })
        .then(
          response => {
            console.log(
              "This are the hotels:" +
                JSON.stringify(response.data.favoriteHotels)
            );
            console.log(this.hotels);
            this.hotels = response.data.favoriteHotels;
            console.log(this.hotels);
          },
          error => {
            console.log(error);
          }
        );
    },
    deleteFavoriteHotel(id) {
      console.log("Trying to delte hotel with id:" + id);
      axios
        .post("http://lhotels.herokuapp.com/api/favoriteHotel/deleteHotel", {
          hotelId: id
        })
        .then(response => {
          console.log(response);
          this.getAllFavoriteHotels();
        });
    }
  },
  computed: {
    numberOfRowsInFavoriteHotels() {
      return Math.trunc(this.hotels.length);
    }
  },
  mounted: function() {
    this.$root.$on("newFavorite", isTrue => {
      console.log("Ain't nobody got time for that");
      if (isTrue) {
        this.getAllFavoriteHotels();
      }
    });
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Satisfy&display=swap");
@import url("https://fonts.googleapis.com/css?family=Courgette&display=swap");

.main-container-background {
  background-size: cover;
  background-color: #f7dbc1c0;
}

.bar-title-text {
  font-family: "Satisfy", cursive;
  color: #384857;
  font-size: 5rem;
  text-align: center;
}

#inspire {
  background: none;
}

.account-overlay-card {
  background-color: #f7dbc1 !important;
}

.login-text-title-card {
  text-align: center;
  width: 100%;
  font-family: "Satisfy", cursive;
  color: #384857;
  font-size: 3rem;
  margin-top: 3vh;
}

.login-text-register-card {
  text-align: center;
  width: 100%;
  font-family: "Satisfy", cursive;
  color: #384857;
  font-size: 1.7rem;
}

.home-subtext-search {
  font-family: "Satisfy", cursive;
  color: #384857;
  text-align: center;
  font-size: 2rem;
}

.snackbar-text {
  font-family: "Satisfy", cursive;
  color: #ff504a;
  text-align: center;
  width: 100%;
  font-size: 1.5rem;
}

.hotels-text-title-card {
  text-align: center;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #384857;
  font-size: 1rem;
  margin-bottom: 10vh;
  margin-top: 0.5vh;
  background-color: #f7dbc1c0;
  border-radius: 20px;
}

.theme--light.v-sheet {
  background-color: #f7dbc1 !important;
}

.login-drawer-menu-card {
  background-color: transparent !important;
}

.hotels-button-title-card {
  align-self: center !important;
  width: 100%;
  overflow: hidden;
}

.hotels-card {
  background-size: cover;
}

.text-sub-hotel {
  text-align: center;
  width: 100%;
  font-family: "Satisfy", cursive;
  color: #384857;
  font-size: 2rem;
}

.rating-div {
  background-color: #f7dbc1c0;
  border-radius: 20px;
}

.centered-input input {
  text-align: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>