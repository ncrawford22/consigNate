const React = require('react');

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                </head>
                <body>
                    <nav>
                        <a href={`/${this.props.Group}`}>{this.props.Group}</a>
                    </nav>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout;