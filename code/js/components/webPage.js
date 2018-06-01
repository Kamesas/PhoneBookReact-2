import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";

import Header from "./header"
import BodyContacts from "./bodyContact"

class WebPage extends React.Component {

  render() {
      return (
      	
      	<div className="ui two column centered grid">
				  <div className="column">

				  	<Header />					 

				  	<BodyContacts />				  	

				  </div>		  
				</div>

      ); 
  }

}

export default WebPage;