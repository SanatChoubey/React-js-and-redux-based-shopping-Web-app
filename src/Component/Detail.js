import React, { Component } from 'react';
import {connect}from 'react-redux';
import {Link} from 'react-router-dom'
import Header from './Header'

import {Carousel}from 'react-bootstrap';
import {Button}from 'react-bootstrap';

  class Detail extends Component {



check(){

if(this.state.selected){

return(

  <Link to="/checkout">
  <Button
   bsStyle="success" className="buttons">
   Proceed to checkout
   </Button>
   </Link>



)


}else {

return(<div className="rob">Please select size then proceed to checkout</div>)



}




}







    constructor(props){
      super(props);

      this.state = {

selected:null



      };
    }




      render(){


if (this.props.detail){


const x=this.props.detail.map((item)=>{


return(

<div className="detail">

<div><Header/></div>
<Carousel>
<Carousel.Item>
<div >
<img  className="img" alt="900x500" src= {item.img}/>
</div>
</Carousel.Item>
<Carousel.Item>
<div >
<img  className="img"  alt="900x500" src={item.img1} />
</div>

</Carousel.Item>
<Carousel.Item>
<div>
<img  className="img"  alt="900x500" src={item.img2} />
</div>

</Carousel.Item>
</Carousel>




























<h2 className="rob">{item.name}</h2>



<div className="par">
<h3 className="rob">Description:</h3><br/>
<i className="rob" >{item.desc}</i>


</div>





<div className="rob">Size:

<Button

 bsStyle="success" className="buttons1"
 value={item.size4}
 onClick={

   (e)=>
   {




     item.sizes=e.target.value;
    this.setState({selected:e.target.value})


 }}

 >
 {item.size4}</Button>
<Button

 bsStyle="success" className="buttons1"
 value={item.size3}
 onClick={

   (e)=>
   {




   item.sizes=e.target.value;
   this.setState({selected:e.target.value})

 }}

 >
 {item.size3}</Button>
<Button

 bsStyle="success" className="buttons1"
 value={item.size2}
 onClick={

   (e)=>
   {




     item.sizes=e.target.value;
    this.setState({selected:e.target.value})

 }}

 >
 {item.size2}</Button>
<Button

 bsStyle="success" className="buttons1"
 value={item.size1}
 onClick={

   (e)=>
   {




     item.sizes=e.target.value;
this.setState({selected:e.target.value})

 }}

 >
 {item.size1}</Button>
</div>


<b className="rob">Selected size:{this.state.selected}</b>









{this.check()}











</div>





)




})


return (

<div>
{
  x
}
</div>




)







}


else{












































return(
<div>


Loading.......

</div>




)}}}

function mapStateToProps(state) {

  return({detail:state.item})
}


  export default connect(mapStateToProps)(Detail)
