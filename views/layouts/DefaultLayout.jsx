const React = require('react');

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel='stylesheet' href='../css/style.css'/>
                    <nav id="main-nav">
                    <button><a href='/home'>Home</a></button>&nbsp;&nbsp;<button><a href='/apparel'>Apparel</a></button>&nbsp;&nbsp;<button><a href='/shoes'>Shoes</a></button>
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