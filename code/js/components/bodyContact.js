import React from 'react';
import ListContacts from "./listContacts"
import SettingsContacts from "./settingsContact.js"

class BodyContacts extends React.Component {

  render() {
      return (  

				<div className="ui one column centered grid">				 

					<ListContacts />
				  
				</div>

      ); 
  }

}

export default BodyContacts;