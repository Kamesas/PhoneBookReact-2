import React from 'react';

class AddContact extends React.Component {

	addContact() {
		alert('Добавить контакт');
	};

  render() {
      return (			
		  	<button onClick={this.addContact} className="ui basic right floated button green">
		  		<i className="icon user"></i> Добавить контакт 
		  	</button>
      ); 
  }

}

export default AddContact;