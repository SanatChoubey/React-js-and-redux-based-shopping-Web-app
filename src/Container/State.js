import React, { Component } from 'react';
import Header from '../Component/Header'
import {Button}from 'react-bootstrap';
import firebase from 'firebase';

import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getitem}from '../Action/getitem'

   class State extends Component {
bob(){
if(this.state.men){

return <div>{this.state.men

  .map((item)=>{return <div>
    <div className="box2">

                <div
                className="divs" >



            <Link to ="/detail">  <h2  onClick={()=>{this.props.getitem(item)}}   ><b>  {item.name}</b></h2></Link>
          <div className="desc">
        <img className="imh"src={item.img} alt=""/>
           </div>
            <h4 >Price:{item.price}rs</h4>
            <p>Size:

            <Button

             bsStyle="success" className="buttons1"
             value={item.size4}
             onClick={

               (e)=>
               {


    this.setState({selected:e.target.value})
                 console.log(item,e.target.value)
                 item.sizes=e.target.value;
                 console.log(item)

             }}

             >
             {item.size4}</Button>
            <Button

             bsStyle="success" className="buttons1"
             value={item.size3}
             onClick={

               (e)=>
               {


    this.setState({selected:e.target.value})
                 console.log(item,e.target.value)
               item.sizes=e.target.value;
               console.log(item)

             }}

             >
             {item.size3}</Button>
            <Button

             bsStyle="success" className="buttons1"
             value={item.size2}
             onClick={

               (e)=>
               {


    this.setState({selected:e.target.value})

                 item.sizes=e.target.value;
                 console.log(item)

             }}

             >
             {item.size2}</Button>
            <Button

             bsStyle="success" className="buttons1"
             value={item.size1}
             onClick={

               (e)=>
               {



    this.setState({selected:e.target.value})
                 item.sizes=e.target.value;


             }}

             >
             {item.size1}</Button>
    </p>

    <p>Selected size:{this.state.selected}</p>

    <Button
    onClick={()=>{this.props.getitem(item)}}
     bsStyle="success" className="buttons">
     <Link to ="/checkout">Proceed to checkout</Link>
     </Button>



                </div><br/>



    </div>







    </div>})}</div>


}





}

     componentDidMount(){



          firebase.database().ref('/state').on('value', (snapshot)=>{
          var men= snapshot.val();
         var a= Object.values(men)

         this.setState({men:a})
         console.log(this.state.men)

       });




     }
   constructor(props){
     super(props);

     this.state = {
       men:null,

     };

   }


low(){


var sortlow=this.state.men.sort((a,b)=>{
  return(a.price-b.price)
})

  this.setState({men:sortlow})

}




high(){
  var sortlow=this.state.men.sort((a,b)=>{
    return(b.price-a.price)
  })

    this.setState({men:sortlow})
}















      render(){
return(

  <div>
  <Header/>
          <div className="box">



<div className="box1">



  <Button bsStyle="success" className="buttons" onClick={this.low.bind(this)}>Price Low to High</Button>
  <Button bsStyle="danger"  className="buttons" onClick={this.high.bind(this)}>Price High to Low</Button>







</div>
<div className="box2">
{this.bob()}







</div>

          </div>
          </div>
        );
      }
    }
    function mapDispatchToProps(dispatch){

     return bindActionCreators({getitem},dispatch)



    }

  export default connect(null,mapDispatchToProps)(State);
