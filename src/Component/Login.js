import React, { Component } from 'react';
import firebase from 'firebase';

import {Button}from 'react-bootstrap';
var config = {
    apiKey: "AIzaSyBxarKAhI_JhFblInxivbY6DXIJ9jtvdSQ",
    authDomain: "summit-86b3b.firebaseapp.com",
    databaseURL: "https://summit-86b3b.firebaseio.com",
    projectId: "summit-86b3b",
    storageBucket: "",
    messagingSenderId: "264910917132"
  };
  firebase.initializeApp(config);
export default class Login extends Component {
  signin(){

var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.

  // The signed-in user info.
  var user = result.user;
    if(user){
console.log(user.displayname)
}

  // ...
}).catch(function(error) {
  // Handle Errors here.

  // ...
});


  }


facebook(){

var provider = new firebase.auth.FacebookAuthProvider();

provider.addScope('user_birthday');
firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});

}



  render(){
    return(
      <div className ="color">
    <h1 className="font"> Log In with Us </h1><br/>
    <br/>


      <Button bsStyle="danger" onClick={this.signin.bind(this)}>G+ login with Google</Button><br/>
      <Button bsStyle="primary"  onClick={this.facebook.bind(this)}  > Login with facebook</Button>


      </div>
    );
  }
}
