import React from 'react';

class ListContacts extends React.Component {

  render() {
      return (     	

      	<div className="ui animated list">

				  <div className="item">
				    <img className="ui avatar image" src="https://semantic-ui.com/images/avatar/small/helen.jpg" />
				    <div className="content">
				      <a className="header">Veronika Ossi</a>
				      <div className="description">Еще не было просмотрено</div>
				    </div>
				  </div>

				  <div className="item">
				    <img className="ui avatar image" src="https://semantic-ui.com/images/avatar/small/christian.jpg" />
				    <div className="content">
				      <a className="header">Veronika Ossi</a>
				      <div className="description">Еще не было просмотрено</div>
				    </div>
				  </div>

				</div>				

      ); 
  }

}

export default ListContacts;