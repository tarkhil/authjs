import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseAppConfig from "./firebaseauth";

Vue.config.productionTip = false;

new Vue({
  router,
    store,
    created() {
	firebase.initializeApp(firebaseAppConfig);
	firebase.auth().onAuthStateChanged((user) => {
	    if(user) {
		this.$router.push('/')
	    } else {
		this.$router.push('/login')
	    }
	});
    },
  render: h => h(App)
}).$mount("#app");
