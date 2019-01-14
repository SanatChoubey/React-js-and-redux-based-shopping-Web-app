import React, { Component } from 'react';
import {Carousel}from 'react-bootstrap';

import '../App.css';
import firebase from 'firebase';

export default class Slider extends Component {

componentDidMount(){

  firebase.database().ref('/Slider').on('value', (snapshot)=>{
  var men= snapshot.val();
 var a= Object.values(men)


this.setState({slider:a})

});




}

constructor(props){
  super(props);

  this.state = {

slider:null,


  };
}
render(){
if(this.state.slider){
  return(<div>{this.state.slider.map((item)=>{

  return(  <Carousel>
  <Carousel.Item>
  <div >
  <img key={item.img} className="img" alt="900x500" src= {item.img}/>
  </div>
  <Carousel.Caption>
    <h3 key={item.img3}>{item.text}</h3>

  </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <div >
  <img  key={item.img2}className="img"  alt="900x500" src={item.img2} />
    </div>
  <Carousel.Caption>
    <h3 key={item.img2}>{item.text2}</h3>

  </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <div>
  <img key={item.img3} className="img"  alt="900x500" src={item.img3} />
    </div>
  <Carousel.Caption>
    <h3 key={item.img}>{item.text3}</h3>

  </Carousel.Caption>
  </Carousel.Item>
  </Carousel>)







  })}</div>)
}

return(

<div></div>





);




}




}
