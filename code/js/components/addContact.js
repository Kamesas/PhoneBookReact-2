import React from 'react';

class AddContact extends React.Component {

	constructor(props) {
    super(props);
	    this.state = {editContact: false, };
	    this.editContact = this.editContact.bind(this); // Привязка необходима, чтобы сделать this доступным в коллбэке
	    this.saveEdit = this.saveEdit.bind(this); // Привязка необходима, чтобы сделать this доступным в коллбэке
	    this.startPage = this.startPage.bind(this); // Привязка необходима, чтобы сделать this доступным в коллбэке
  };

  editContact() {	
		this.setState ({editContact: true});
	};

	saveEdit() {
    this.setState ({editContact: false})
  };

  startPage() {
    return (
      <button onClick={this.editContact} className="ui basic right floated button green">
	  		<i className="icon user"></i> Добавить контакт 
	  	</button>
    );
  };

  editPage() {
    return (
      <div className="two column centered row">

		    <div className="column">

	    		<div className="ui large list">
					  <div className="item">
					    <img className="ui avatar image" src="https://semantic-ui.com/images/avatar/large/christian.jpg" />
					    <div className="content">
					      <a className="header">					      	
					      	<div className="ui small input">
									  <input type="text" placeholder="Введите имя" />									 
									</div>
					      </a>
					      <div className="description">
					      	<div className="ui small input">									  
									  <input type="text" placeholder="Введите номер" />									  
									</div>
					      </div>
					    </div>
					  </div>
					</div>
		    </div>

		    <div className="column">
		    	
		    	<div className="mini ui buttons right floated">					  
					  <button onClick={this.saveEdit} className="ui green basic button">Сохранить</button>				  
					</div>

		    </div>	

		  </div>
    );
  };

  render() {
      if (this.state.editContact) {
	      return this.editPage ();
	    } else {
	      return this.startPage ();
	    }
  }

}

export default AddContact;