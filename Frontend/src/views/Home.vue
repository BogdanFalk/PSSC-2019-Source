<template>
  <v-container  fluid style="height: 100%;z-index:2;">
   
    <v-row fluid align="center"  justify="center" no-gutters>
    
      <v-col align-self="center"  width=100% class="center-col-home" cols="auto">

      <v-img 
        v-bind:src="require('../assets/title.png')"
        max-height="244px"    
        max-width="900px"
        
      ></v-img>
      </v-col>
     
    </v-row>
    <v-row fluid align="center" justify="center" class="ma-1">
      <v-col cols="auto" class="ma-2">
        <v-btn elevation=10 large rounded class="btn-hotels" ><h2 class="btn-text-hotels"> Find hotels nearby!</h2></v-btn>
      </v-col>

    
    </v-row>
     <v-row fluid align="center" justify="center">
      <v-col id="autoCompleteCity" cols="auto" class="ma-5">
        <h2 class="home-subtext-search">.. Or search for a city</h2>
        <v-select spellcheck="false" dark dense :items="cities" outlined rounded :menu-props="{ auto: true, overflowY: true }" background-color="#384857B3"></v-select>
        <center><v-btn large rounded elevation=6 ><h2 class="btn-text-search"> Search!</h2></v-btn></center>
      </v-col>
      
      
      
    </v-row>
  
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      positive: true,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" }
      ],
       alignments: [
      'start',
      'center',
      'end',
    ],
    searchInput:null,
    cities:[
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
      "Timișoara",
    ]

    };
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Satisfy&display=swap');
@import url('https://fonts.googleapis.com/css?family=Courgette&display=swap');


.title-text{
  font-family: 'Satisfy', cursive;
}

.center-col-home{
  margin-top: 170px!important;
}

.home-subtext-search{
  font-family: 'Satisfy', cursive;
  color:#384857;
    text-align: center;
    font-size: 2rem;
}

.v-btn {
    text-transform: none!important;
    
 
}

.btn-hotels
{
  height: 50px!important;
}

.btn-text-hotels{
  font-size: 1.79rem;
 font-family: 'Courgette', cursive;
   color:#384857;
}

.btn-text-search{
  font-size: 1.2rem;
 font-family: 'Courgette', cursive;
   color:#384857;
}

.v-list{
  margin-left: 10px;
  background-color:#384857!important;
  font-family: 'Courgette', cursive;


}

#autoCompleteCity .v-select__selection
{
    font-family: 'Courgette', cursive!important;
    cursor: pointer!important;
}

.theme--light.v-card
{
   background: transparent!important;
}

.v-list-item{
  border-radius: 32px!important;
}

.v-list-item__title{
  color:white!important;
  text-align: center;
    font-size: 1rem!important;
      font-family: 'Courgette', cursive;

}



</style>
