import React from 'react';
import ListContacts from "./listContacts"

class WebPage extends React.Component {

  render() {
      return (
      	
      	<div className="ui two column centered grid">
				  <div className="column">

				  	<h1 className="ui block center aligned header">Phone Book</h1>
				  	<hr />

				  	<ListContacts />

				  </div>		  
				</div>

      ); 
  }

}

export default WebPage;