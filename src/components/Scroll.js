import React from 'react';

const Scroll=(props)=>{
	return( //jsx style to give css inside js
	<div style={{overflow: 'scroll',border: '5px solid black',height:'500px'}}>
		{props.children};
	</div>
	);
};

export default Scroll;