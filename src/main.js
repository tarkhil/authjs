import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { AuthGuard } from "vue-firebase-auth-plugins";
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
	AuthGuard.install(router, { auth: firebase.auth(), options: {postAuthPath: "/" }});
    },
  render: h => h(App)
}).$mount("#app");
