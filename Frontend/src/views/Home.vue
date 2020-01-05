<template>
  <div>
    <v-lazy
      :options="{
            threshold: .5
          }"
      min-height="200"
      transition="fade-transition"
    >
      <v-container fluid style="height: 100%;z-index:2;">
        <v-row fluid align="center" justify="center" no-gutters>
          <v-col align-self="center" width="100%" class="center-col-home" cols="auto">
            <v-img
              v-bind:src="require('../assets/title2.png')"
              max-height="184px"
              max-width="920px"
              contain
              v-parallax="0.1" 
            ></v-img>
          </v-col>
        </v-row>
        <v-row fluid align="center" justify="center" class="ma-1">
          <v-col cols="auto" class="ma-2">
            <!-- <v-btn elevation="10" large rounded class="btn-hotels">
             <h2 class="btn-text-hotels">Find hotels nearby!</h2>
            </v-btn>-->
          </v-col>
        </v-row>
        <v-row fluid align="center" justify="center">
          <v-col id="autoCompleteCity" cols="auto" class="ma-5">
            <h2 class="home-subtext-search">Search for a city</h2>
            <v-select
              v-model="citySelected"
              spellcheck="false"
              dark
              dense
              :items="cities"
              outlined
              rounded
              :menu-props="{ auto: true, overflowY: true }"
              background-color="#384857B3"
              color="black"
            ></v-select>
            <center>
              <v-btn large rounded elevation="6">
                <h2 v-on:click="getCityHotels" class="btn-text-search">Search!</h2>
              </v-btn>
            </center>
          </v-col>
        </v-row>
        <v-lazy>
        <v-row fluid align="center" justify="center">
          <v-col cols="auto" v-for="index3 in (0,numberOfRowsInFavoriteHotels)" :key="index3">
            <v-card
              class="elevation-16 mx-auto hotels-card"
              :style="{'background-image':'url('+hotels[index3-1].img+')'}"
              width="200"
              hight="50"
            >
              <v-card-title class="headline" primary-title>
                <h2 class="hotels-text-title-card">{{hotels[index3-1].name}}</h2>
              </v-card-title>
              <v-card-text>
                <div class="text-center mt-3 rating-div">
                  <v-rating
                    v-model="hotels[index3-1].rating"
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
                      <div class="my-3 text-sub-hotel">{{hotels[index3-1].name}}</div>
                      <div class="my-3 text-sub-hotel">{{hotels[index3-1].phone}}</div>
                    </v-sheet>
                  </v-bottom-sheet>
                  <v-btn
                    v-show="isLogged"
                    v-on:click="addHotelToFavorites(hotels[index3-1].id,hotels[index3-1].name,hotels[index3-1].img,hotels[index3-1].phone,hotels[index3-1].rating)"
                    text
                  >
                    <v-icon size="18">mdi-plus-box</v-icon>Favorite
                  </v-btn>
                </v-card-actions>
              </div>
            </v-card>
          </v-col>
        </v-row>
        </v-lazy>
      </v-container>
    </v-lazy>
  </div>
</template>

<script>
/* eslint-disable no-alert, no-console, no-unused-vars */
import axios from "axios";
export default {
  data() {
    return {
      positive: true,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" }
      ],
      alignments: ["start", "center", "end"],
      searchInput: null,
      isLogged: false,
      cities: [
        "All",
        "Bacau",
        "Braila",
        "Brasov",
        "Bucuresti",
        "Cluj-Napoca",
        "Constanta",
        "Craiova",
        "Deva",
        "Galati",
        "Hunedoara",
        "Iasi",
        "Oradea",
        "Ploiesti",
        "Timisoara"
      ],
      hotels: [],
      citySelected:"All"
    };
  },

  methods: {
    addHotelToFavorites(id, name, img, phone, rating) {
      axios.post("http://lhotels.herokuapp.com/api/favoriteHotel/insertHotel", {
        id:localStorage.getItem("id"),
        name,
        img,
        phone,
        rating
      }) .then(
          response => {
            console.log(response.body);
             this.$root.$emit('newFavorite',"true");
          },
          error => {
            console.log(error);
          }
        );
    },

    getAllHotels()
    {
      axios.post("http://lhotels.herokuapp.com/api/hotel/getAllHotels")
      .then(
        response =>{
          this.hotels=response.data;
        },
        error => {
          console.log(error);
        }
      )
    },

    getCityHotels()
    {
      console.log(this.citySelected);
      if(this.citySelected==="All")
      {
        this.getAllHotels()
      }
      else
      {
        axios.post("http://lhotels.herokuapp.com/api/hotel/getCityHotels",
        {
          city:this.citySelected
        })
         .then(
        response =>{
          this.hotels=response.data;
        },
        error => {
          console.log(error);
        }
      )
      }
    }
  },

  computed: {
    numberOfRowsInFavoriteHotels() {
      return Math.trunc(this.hotels.length);
    },
    isLoggedComputed() {
      return this.isLogged;
    }
  },

  mounted: function() {
    this.$root.$on("userLogged", isLogged => {
      console.log("Ain't nobody got time for that");
      this.isLogged = isLogged;
      
    });
  },

  created: function(){
    this.getAllHotels();
  }
};
</script>

<style>
.title-text {
  font-family: "Satisfy", cursive;
}

.center-col-home {
  margin-top: 170px !important;
}

.home-subtext-search {
  font-family: "Satisfy", cursive;
  color: #384857;
  text-align: center;
  font-size: 2rem;
}

.v-btn {
  text-transform: none !important;
}

.btn-hotels {
  height: 50px !important;
}

.btn-text-hotels {
  font-size: 1.79rem;
  font-family: "Courgette", cursive;
  color: #384857;
}

.btn-text-search {
  font-size: 1.2rem;
  font-family: "Courgette", cursive;
  color: #384857;
}

.v-list {
  margin-left: 10px;
  background-color: #384857 !important;
  font-family: "Courgette", cursive;
}

#autoCompleteCity .v-select__selection {
  font-family: "Courgette", cursive !important;
  cursor: pointer !important;
}

.v-select-list.theme--light.v-card {
  background: transparent !important;
}

.v-list-item {
  border-radius: 32px !important;
}

.v-list-item__title {
  color: #384857 !important;
  text-align: center;
  font-size: 1rem !important;
  font-family: "Courgette", cursive;
}
</style>
