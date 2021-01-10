import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseAppConfig from "./firebaseauth";
firebase.initializeApp(firebaseAppConfig);
import router from "./router";
import { AuthGuard } from "vue-firebase-auth-plugins";
Vue.use(AuthGuard, { auth: firebase.auth(), router: router, postAuthPath:"/" });

Vue.config.productionTip = false;

new Vue({
  router,
    store,
    created() {
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
