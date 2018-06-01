import React from 'react';
import Header from "./header"
import ListContacts from "./listContacts"


class WebPage extends React.Component {

  render() {
      return (
      	
      	<div className="ui two column centered grid">
				  <div className="column">
				  
				  	<Header />

					  <div className="four column centered row">
					    <div className="column">

					    </div>
					    <div className="column">

					    </div>
					  </div>

				  	<ListContacts />

				  </div>		  
				</div>

      ); 
  }

}

export default WebPage;