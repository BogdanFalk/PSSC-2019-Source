import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VueParallaxJs from 'vue-parallax-js'
 
Vue.use(VueParallaxJs);
Vue.use(Vuetify);


export default new Vuetify({
    icons: {
        iconfont: 'fa', // default - only for display purposes
      },
      theme: {
        themes: {
          light: {
            primary: '#384857',
        
          },
        },
      },
});
