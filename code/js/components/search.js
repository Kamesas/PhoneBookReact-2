import React from 'react';

class Search extends React.Component {

  render() {
      return (      	
			
		  	<div className="ui search right floated">
			  <div className="ui icon input">
			    <input className="prompt" type="text" placeholder="Введите имя..." />
			    <i className="search icon"></i>
			  </div>
			  <div className="results"></div>
			</div>		
		
      ); 
  }

}

export default Search;