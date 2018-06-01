import React from 'react';

class ListContacts extends React.Component {

  render() {
      return (

		    		<div className="ui large animated list">
						  <div className="item">
						    <img className="ui avatar image" src="https://semantic-ui.com/images/avatar/large/christian.jpg" />
						    <div className="content">
						      <a className="header">Александр Семак</a>
						      <div className="description">+380997708164</div>
						    </div>
						  </div>
						</div>
										   
      ); 
  }

}

export default ListContacts;