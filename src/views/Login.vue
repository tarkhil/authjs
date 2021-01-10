<template>
<div>
    <h2>Login page here</h2>
    <div id="firebaseui-auth-container"></div>
</div>
</template>

<script>
import firebase from "firebase/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
export default {
    data: function() {
	return { 
	    ui: new firebaseui.auth.AuthUI(firebase.auth()),
	}
    },
    mounted() {
	console.log("Redirected to login");
	const uiConfig = {
	    signInSuccessUrl: "/",
	    signInOptions: [
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		firebase.auth.EmailAuthProvider.PROVIDER_ID
	    ]
	};
	this.ui.start('#firebaseui-auth-container', uiConfig);
    },
    unmounted() {
	console.log("Moving from login");
	if ( this.ui !== null ) {
	    this.ui.delete();
	} else {
	    console.error("this.ui should not be null");
	}
    }
}
</script>
