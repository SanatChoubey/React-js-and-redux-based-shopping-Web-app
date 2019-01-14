import React, { Component } from 'react';
import Header from './Header'
import firebase from 'firebase';
import {Jumbotron ,Button} from 'react-bootstrap'
    export default class Blog extends Component {

componentDidMount(){


  firebase.database().ref('blog/').on('value', (snapshot)=>{
  var men= snapshot.val();
  var a= Object.values(men)

this.setState({Blog:a})


  });



}
constructor(props){
  super(props);

  this.state = {
    Blog:null
  };
}

      render(){
if(this.state.Blog){



  return(<div>

<Header/>
<div className="bloghead"><h2>BLOG BY summit</h2></div>

    {
this.state.Blog.map((item)=>{
return(<div>

<Jumbotron className="maa">

<h2><i>{item.title}</i></h2>
<p>{item.feed}</p>




</Jumbotron>







  </div>)






})






  }</div>)
}




        return(
          <div>
Loading please wait .....
          </div>
        );
      }
    }
