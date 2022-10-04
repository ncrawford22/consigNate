const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class IndexApparel extends React.Component {
    render() {
        const { apparels } = this.props;
        return (
            <DefaultLayout title="All Apparel" Group="apparel">
                <body>
                    <h1>Index Page</h1>
                    <ul id="apparel-index">
                        {apparels.map((apparel, _id) => {
                            return (
                                <li key={_id}>
                                    <a href={`/apparel/${apparel._id}`}>{apparel.brand}:&nbsp;&nbsp;{apparel.name}</a>  
                                </li>
                            )
                        })}
                    </ul>

                    <nav>
                            <a href="apparel/new">Create a new apparel listing</a>
                    </nav>
                </body>
            </DefaultLayout>
        )
    }
}

module.exports = IndexApparel;