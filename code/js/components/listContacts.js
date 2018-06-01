import React from 'react';

class ListContacts extends React.Component {

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
  }

}

export default ListContacts;