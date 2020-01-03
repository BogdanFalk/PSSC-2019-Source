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
              spellcheck="false"
              dark
              dense
              :items="cities"
              outlined
              rounded
              :menu-props="{ auto: true, overflowY: true }"
              background-color="#384857B3"
            ></v-select>
            <center>
              <v-btn large rounded elevation="6">
                <h2 class="btn-text-search">Search!</h2>
              </v-btn>
            </center>
          </v-col>
        </v-row>
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
                  <v-btn text>
                    <v-icon size="18">mdi-plus-box</v-icon>Favorite
                  </v-btn>
                </v-card-actions>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-lazy>
  </div>
</template>

<script>
/* eslint-disable no-alert, no-console, no-unused-vars */

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
      isLogged:false,
      cities: [
        "Bacau",
        "Braila",
        "Brasov",
        "Bucureşti",
        "Cluj-Napoca",
        "Constanta",
        "Craiova",
        "Deva",
        "Galati",
        "Hunedoara",
        "Iaşi",
        "Oradea",
        "Ploieşti",
        "Timișoara"
      ],
      hotels: [
        {
          name: "Glorious Arc Motel",
          img:
            "https://q-cf.bstatic.com/xdata/images/hotel/270x200/11744066.jpg",
          phone: "074223231",
          rating: 3.5
        },
        {
          name: "Serene Forest Motel",
          img:
            "https://content.r9cdn.net/rimg/himg/94/20/c9/sembo-510125-72ac8c06_b.jpg_resizeMode=FitInside_formatSettings=jpeg(quality-90)-957820.jpg",
          phone: "074214112312231",
          rating: 4
        },
        {
          name: "Gentle Trinket Hotel",
          img:
            "https://media-cdn.tripadvisor.com/media/photo-s/18/5d/48/0d/villa-santushti.jpg",
          phone: "07421412323231",
          rating: 5
        },
        {
          name: "Azure Keep Hotel",
          img:
            "http://www.pethotelscanada.com/wp-content/uploads/2017/08/amazing-hotel-sapa.jpg",
          phone: "07421423121231",
          rating: 3
        },
        {
          name: "Crown House Resort",
          img:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/165/165397143.jpg",
          phone: "074214232131231",
          rating: 5
        },
        {
          name: "Fairyland Resort",
          img:
            "http://static.asiawebdirect.com/m/phuket/hotels/kosamui-com/fairyland-club-resort/hotelBanner/home.jpg",
          phone: "074221312141231",
          rating: 3
        },
        {
          name: "Citadel Hotel",
          img:
            "https://pix10.agoda.net/hotelImages/186634/-1/12b76f2822bf0d3e066d0fc7464a0998.jpg",
          phone: "07421321341231",
          rating: 4.5
        },
        {
          name: "Stellar Hotel",
          img:
            "https://r-cf.bstatic.com/images/hotel/max1024x768/235/235505369.jpg",
          phone: "07421412311231",
          rating: 3
        },
        {
          name: "Recreation Hotel",
          img:
            "https://r-cf.bstatic.com/images/hotel/max1024x768/214/214765691.jpg",
          phone: "074214123121231",
          rating: 3.5
        },
        {
          name: "Snowy Pier Resort",
          img:
            "https://odis.homeaway.com/odis/listing/397e4884-a049-4b0e-9fad-09a6d65e5e05.f6.jpg",
          phone: "074212331141231",
          rating: 5
        },
        {
          name: "Twin Tide Motel",
          img:
            "https://pix10.agoda.net/hotelImages/117/1177511/1177511_16041910260041605164.jpg",
          phone: "0742112341231",
          rating: 4.5
        },
        {
          name: "Muse Resort",
          img: "https://www.muse-hotels.com/images/home-ourStory.jpg",
          phone: "0742141231",
          rating: 4
        },
        {
          name: "Spring Dream Motel",
          img:
            "https://pix6.agoda.net/hotelImages/5068840/-1/7836ebca77dca47925c31ba85e0d6276.jpg",
          phone: "07421432231231",
          rating: 5
        }
      ]
    };
  },

  methods: {},

  computed: {
    numberOfRowsInFavoriteHotels() {
      return Math.trunc(this.hotels.length);
    }
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
  color: white !important;
  text-align: center;
  font-size: 1rem !important;
  font-family: "Courgette", cursive;
}
</style>
