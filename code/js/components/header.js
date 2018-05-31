import React from 'react';
import Search from './search.js';

class Header extends React.Component {

  render() {
      return (      	
			<div>
			  	<h1 className="ui block center aligned header">Телефонная книга</h1>
			  	<hr />
			  	<Search />
			</div>
      ); 
  }

}

export default Header;