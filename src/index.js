import React from "react";
import ReactDOM from "react-dom";

function Card(props){

	console.log(props);

	return (<div>
	<h2>{props.name}</h2>
		<img
			src= {props.imageURL}
			alt="avatar_img"
		/>
		<p>{props.phoneNumber}</p>
		<p>{props.email}</p>
	</div>);
};

ReactDOM.render(
	<div>
		<h1>My Contacts</h1>
		<Card name="Beyonce" imageURL="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" phoneNumber="+123 456 789" email="b@beyonce.com"/>
		<Card name="Arnold" imageURL="https://all4desktop.com/data_images/original/4239254-arnold-schwarzenegger.jpg" phoneNumber="+999 999 9999" email="a@arnold.com"/>
	</div>,
	document.getElementById("root")
);
