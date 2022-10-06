const React = require('react');

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel='stylesheet' href='../css/style.css'/>
                    <nav id="main">
                    <a href='/home'>Home</a>&nbsp;&nbsp;<a href='/apparel'>Apparel</a>&nbsp;&nbsp;<a href='/shoes'>Shoes</a>
                 </nav>
                 
                </head>
                <body>
                  {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout;