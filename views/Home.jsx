const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout');

class Home extends React.Component {
    render() {
        return (
            <DefaultLayout title="All"> <a href='/home'>Home</a>&nbsp;&nbsp;<a href='/apparel'>Apparel</a>&nbsp;&nbsp;<a href='/shoes'>Shoes</a>
                <body>
                    <h1>consigNate</h1>
                    
                    <nav>
                            <a href="shoes/new">Create a new shoe listing</a>
                    </nav>

                    <nav>
                            <a href="apparel/new">Create a new apparel listing</a>
                    </nav>

                </body>
            </DefaultLayout>
        )
    }
}

module.exports = Home;