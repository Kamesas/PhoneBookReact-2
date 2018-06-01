import React from 'react';
import AllContact from "./allContact.js"

class ListContacts extends React.Component {	

  render() {

      return (

    	<div className='one column centered row'>
	    	<AllContact name="Alex" num="23475023489756" email="semakaleksandr2014@gmail.com"/>
	    	<AllContact name="Sara" num="23452345333" email="sjsdafhaluisfaio@gmail.com"/>
	    	<AllContact name="Nikolas" num="6657856488568" email="ssda345346666gfgr2014@gmail.com"/>
    	</div>   

    );

  }

}

export default ListContacts;