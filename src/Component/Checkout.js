import React, { Component } from 'react';
import {connect} from 'react-redux'
import firebase from 'firebase'
import Login from './Login'
import {Button,Jumbotron}from 'react-bootstrap';
import Header from './Header'
import jsPDF from 'jspdf';





















     class Checkout extends Component {
constructor(props){
  super(props);

  this.state = {

name:null,
size:null,
price:null,
mobileno:null,
address:null,
state:null,
img:null,
id:null,
quantity:null,
raz:null

  };
  this.openCheckout = this.openCheckout.bind(this);

}











openCheckout() {
console.log(this.state)
if(this.state.price&&this.state.quantity&&this.state.size){
  let options = {
    "key": "rzp_live_dPcbSK6lQTOba0",
    "key_id": "QpYnZVhWzB93VRinFdzFQNF8",
      "key_secret": 'Se9FP2AK79Vu2IBx8M6BSnbF',
    "amount": (this.state.price)*(this.state.quantity)*100, // 2000 paise = INR 20, amount in paisa
    "name": this.state.name,
    "description": this.state.size,
    "image": this.state.img,
    "handler":
    (response)=>{

    this.setState({raz:response.razorpay_payment_id})
    var user = firebase.auth().currentUser;
    const uid= user.uid;
    const username=user.displayName;
    const d = new Date();
    const day = d.getDate().toString()
    const month =((d.getMonth())+1).toString();
    const year = d.getFullYear().toString()
    const date=day+month+year;
    firebase.database().ref('order/' +date+"/"+uid+"/"+response.razorpay_payment_id).set({


     name:this.state.name,
     size:this.state.size,
     mobileno:this.state.mobileno,
     address:this.state.address,
     state:this.state.state,
     img:this.state.img,
     quantity:this.state.quantity,
     billingname: username,





    });

firebase.database().ref('order1/'+uid+"/"+response.razorpay_payment_id).set({


  name:this.state.name,
  size:this.state.size,
  mobileno:this.state.mobileno,
  address:this.state.address,
  state:this.state.state,
  img:this.state.img,
  quantity:this.state.quantity,
  date:date,





})



    const totas=((this.state.price)*(this.state.quantity)*100).toString()
    var doc = new jsPDF()
    doc.line(0, 50, 300, 50) // horizontal line

    doc.text('Tax Invoice', 100, 40,)
    doc.line(0,70,300,70)
    doc.line(100,50,100,500)
    doc.text('product', 30,60)
    doc.text(this.state.name,30,80)

    doc.line(150,50,150,500)
    doc.text('Quantity',110,60)
    doc.text('Price',180,60)
    doc.text(this.state.quantity,110,80)
    doc.text(totas,180,80)
    doc.line(0,280,300,280)


    doc.text('total',80,290)
    doc.text(totas,180,290)

    doc.text("name:"+user.displayName,10,20)
    doc.text('billing address:',10,25)
    doc.text('paymentid'+this.state.raz,140,20)
    doc.text('date:'+date,160,25)
    doc.text(this.state.address,10,30)
    doc.save('invoicesummit.pdf')

   },
    "prefill": {
      "name": "",
      "email": ""
    },
    "notes": {
      "address": ""
    },
    "theme": {
      "color": "orange"
    }
  };


var rzp  =new window.Razorpay(options); rzp.open();
}
else{
  alert('please fill address, phone no and state,and quantity to proceed,and select size')
}

}



       usercheck(){
var user = firebase.auth().currentUser;
       if(user){

 return(

<div>
{this.props.check.map((item)=>{

return (

<div>
<Header/>
  <div className="details">

   <h2 className="rob"> product: <b>{item.name}</b></h2>
   <div><img className="imh"src={item.img} alt='900'/></div>
   <h3 className="rob">size:{item.sizes}</h3>
   <h3 className="rob"> price in INR:<b>{item.price}</b>rs</h3>


<div>


<span className ="rob">Quantity :</span>
<div><input type="number" onChange={(e)=>{this.setState({quantity:e.target.value})}} /></div><br/>
<span className ="rob">mobile no :</span>
<div><input  onChange={(e)=>{this.setState({name:item.name,size:item.sizes,mobileno:e.target.value,price:item.price,img:item.img,id:item.id,})}} type='text'/> <br/></div>
<span className ="rob">full address:</span>
<div><textarea onChange={(e)=>{this.setState({address:e.target.value})}} className="add" /><br/></div>
<span className ="rob">State :</span>
<div><input  onChange={(e)=>{this.setState({state:e.target.value})}}type='text'/></div>


</div>



   <Button




onClick={this.openCheckout}




      bsStyle="success" className="buttons">pay for item</Button>

  </div>

</div>

)


})}





</div>













 )



       }
       else {

return (<div>
<Header/>

<Login/>
  </div>)


       }




       }





      render(){
if(this.props.check){

if(this.state.raz){
return(<div>
<Header/>
<Jumbotron>


<h2>  <i>Thank you for shopping with us</i></h2>
<img className ="imh"src="https://images.pexels.com/photos/1282169/pexels-photo-1282169.jpeg?cs=srgb&dl=carrying-casual-celebration-1282169.jpg&fm=jpg" alt =""/>
  </Jumbotron>

   </div>)


}
return(

<div>{this.usercheck()}</div>

)

}




        return(
          <div>

loading....














          </div>
        );
      }
    }


function mapStateToProps(state) {
  return ({check:state.item})
}
export default connect(mapStateToProps)(Checkout)
