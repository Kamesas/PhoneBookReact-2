import React from 'react';

class SettingsContacts extends React.Component {

	showMore()	{
		alert("show");
	};

	editContact() {
		alert("edit contact");
	};

	delContact() {
		alert("edit contact");
	};

  render() {
      return (

		    		<div className="mini ui buttons right floated">						  
						  <button onClick={this.showMore} className="ui blue basic button">Развернуть</button>
						  <button onClick={this.editContact} className="ui green basic button">Редактировать</button>
						  <button onClick={this.delContact} className="ui red basic button">Удалить</button>
						</div>
										 
      ); 
  }

}

export default SettingsContacts;