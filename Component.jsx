var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({

	_handleClick: function(){
		alert();
	},
	
	render: function(){
		//return React.createElement('h1', null, 'Hello World!');

		return (

			<html>
                <head>
                    <title>Universal App with React</title>
                    <link rel='stylesheet' href='/style.css' />
                </head>
                <body>
                    <div>
                        <h1>Hello World!</h1>
                        <p>This is a paragraph.</p>
                        <button onClick={this._handleClick}>Click Me</button>
                    </div>
                    <script src='/bundle.js' />
                </body>
            </html>
				
		);
	}
});