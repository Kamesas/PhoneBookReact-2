import React from 'react';

class ListContacts extends React.Component {	

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
      <div className="two column centered row">

		    <div className="column">

	    		<div className="ui large animated list">
					  <div className="item">
					    <img className="ui avatar image" src="https://semantic-ui.com/images/avatar/large/christian.jpg" />
					    <div className="content">
					      <a className="header">Александр Семак</a>
					      <div className="description">+380997708164</div>
					    </div>
					  </div>
					</div>
		    </div>

		    <div className="column">
		    	
		    	<div className="mini ui buttons right floated">						  
					  <button onClick={this.showMore} className="ui blue basic button">Развернуть</button>
					  <button onClick={this.editContact} className="ui green basic button">Редактировать</button>
					  <button onClick={this.delContact} className="ui red basic button">Удалить</button>
					</div>

		    </div>	

		  </div>
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
					  <button onClick={this.showMore} className="ui blue basic button">Развернуть</button>
					  <button onClick={this.saveEdit} className="ui green basic button">Сохранить</button>
					  <button onClick={this.delContact} className="ui red basic button">Удалить</button>
					</div>

		    </div>	

		  </div>
    );
  };

	showMore()	{
		alert("show");
	};

	delContact() {
		let btnDelContact = <h1>Развернуть</h1>;
		alert(btnDelContact);
	};	

  render() {
      if (this.state.editContact) {
	      return this.editPage ();
	    } else {
	      return this.startPage ();
	    }
  }

}

export default ListContacts;