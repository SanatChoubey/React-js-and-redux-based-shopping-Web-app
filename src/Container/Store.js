import React, { Component } from 'react';
import Header from '../Component/Header';

import {Link} from 'react-router-dom';
import {Button}from 'react-bootstrap';
import firebase from 'firebase';










    export default class  extends Component {

      componentDidMount(){

        firebase.database().ref('/store').on('value', (snapshot)=>{
        var men= snapshot.val();
       var a= Object.values(men)


      this.setState({store:a})

      });




      } constructor(props){
        super(props);

        this.state = {

      store:null,


        };
      }


      render(){
if(this.state.store){


return(  <div>
    <Header/>
<div className="store1">
{this.state.store.map((item)=>{

return(

<div>

<div className="store2">

<img className="img1"
src={item.img1} alt =""/>
<Button className="but" bsStyle="primary"> <Link className ="rob" to="/wear">Summit product</Link></Button>
</div>
<div className="store2">


<img className="img1"
src={item.img2} alt =""/>
<Button className="but"bsStyle="success"> <Link className ="rob" to="/pro">Dress for profession</Link></Button>
</div>
<div className="store2">


<img className="img1"
src={item.img3} alt =""/>
<Button className="but"bsStyle="danger"><Link className ="rob" to="/state">State Wise collection</Link></Button>
</div>
<div className="store2">


<img className="img1"
src={item.img4} alt =""/>
<Button className="but"bsStyle="success"> <Link className ="rob" to="/bulk">Bulk Order</Link></Button>
</div>
<div className="store2">


<img className="img1"
src={item.img5} alt =""/>
<Button className="but"bsStyle="danger"> <Link className ="rob" to="/Custom">Customise product</Link></Button>
</div>












</div>










)





})}
</div>



  </div>)


}



        return(<div>please wait....</div>)


      }
    }
