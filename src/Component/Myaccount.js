import React, { Component } from 'react';
import Header from './Header'
import {Jumbotron ,Button} from 'react-bootstrap'

import firebase from 'firebase';

    export default class Myaccount extends Component {

     componentDidMount(){
var user = firebase.auth().currentUser;
if(user){


const uid= user.uid;
       firebase.database().ref('order1/'+uid).on('value', (snapshot)=>{
       var men= snapshot.val();
      var a= Object.values(men)

      this.setState({order:a})


    });}




     }
constructor(props){
  super(props);

  this.state = {

order:null,
email:null,
feed:null,

  };
}



      render(){
        var user = firebase.auth().currentUser;

  if (user&&this.state.order) {

 return <div >

<Header/>


<div className="detail" ><b className="rob">hey,welcome</b>
        <h6 className="rob">{user.displayName}</h6></div>


<h4><b>Order</b></h4>


<div>

{this.state.order.map((item)=>{

return(<div>


  <Jumbotron className="jumbo">
    <div><b> Product:{item.name}</b></div>

  <h5>size:<b>{item.size}</b></h5>
  <h5>order placed on:<b>{item.date}</b></h5>
<p>Your order will be deliver within 7 days or you can contact us from Contact us section .</p>
  </Jumbotron>









  </div>)





})}

<Jumbotron>
   <h4> Feedback !!!</h4>
<h6>email:</h6>
<input onChange={(e)=>{this.setState({email:e.target.value})}} type="email"/><br/>
<h6>Feedback</h6>
<div className="set"><textarea  onChange={(e)=>{this.setState({feed:e.target.value})}}/><br/></div>


<Button classname="areass"onClick={

()=>{
if(this.state.email&&this.state.feed){
  var user = firebase.auth().currentUser;
const uid= user.uid;
  firebase.database().ref('feedback/'+uid).set({

email:this.state.email,
feed:this.state.feed,






  });
   alert('Thankyou your feedback is valuable for us ')




}
else{


 alert('Please fill Mandatatory field ')

}



}



}>Send your feedback</Button>

</Jumbotron>


</div>




 </div>
}



        return(
          <div>
          <Header/>
          <Jumbotron className="jumbo">
           <p>Login to See account section ...</p>
          </Jumbotron>;

          </div>
        );
      }
    }
