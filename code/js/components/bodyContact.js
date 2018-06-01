import React from 'react';
import ListContacts from "./listContacts"
import SettingsContacts from "./settingsContact.js"

class BodyContacts extends React.Component {

  render() {
      return (  

				<div className="ui one column centered grid">				 

				  <div className="two column centered row">

				    <div className="column">
			    		<ListContacts />
				    </div>

				    <div className="column">
				    	<SettingsContacts />
				    </div>	

				  </div>

				</div>

      ); 
  }

}

export default BodyContacts;