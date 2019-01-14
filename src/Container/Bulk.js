import React, { Component } from 'react';
import {Jumbotron ,Button} from 'react-bootstrap'
import firebase from 'firebase';
import Header from '../Component/Header'


    export default class Bulk extends Component {
      constructor(props){
        super(props);

        this.state = {
mob:null,
bulk:null,


        };
      }

      render(){
        return(
          <div>
          <Header/>
            <Jumbotron className="ass">
        <h3>Bulk Order </h3>




     <h5>
     mobile no :
     </h5>
<input onChange={(e)=>{this.setState({mob:e.target.value})}}type = 'text'/>
<h5>
Order Detail:
</h5>
<textarea className="tetx" onChange={(e)=>{this.setState({bulk:e.target.value})}} /><br/>
<Button onClick={()=>{

if(this.state.mob&&this.state.bulk){

  var user = firebase.auth().currentUser;
  var uid= user.uid;
const  username=user.displayName
  firebase.database().ref('Bulk/'+uid).set({

  mob:this.state.mob,
  feed:this.state.bulk,
  name:username,





  });
 alert('Thankyou your for order we will contact you with 24 hours ')








}else{


alert('please fill all fields')

}


}}>Place order</Button>


<p>You can contact us from <b>contact us</b> section </p>

            </Jumbotron>
          </div>
        );
      }
    }
