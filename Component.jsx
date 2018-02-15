var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({

	_handleClick: function(){
		alert();
	},
	
	render: function(){
		//return React.createElement('h1', null, 'Hello World!');

		return (
			<div>
				<h1>Hello World!</h1>
				<p>This is a paragraph</p>
				<button onClick = {this._handleClick}>Click Me</button>
			</div>
		)
	}
});