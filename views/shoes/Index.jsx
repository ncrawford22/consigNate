const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class IndexShoes extends React.Component {
    render() {
        const { shoes } = this.props;
        return (
            <DefaultLayout title="All Shoes" Group="shoes">
                <body>
                    <h1>Index Page</h1>
                    <ul id="shoes-index">
                        {shoes.map((shoe, _id) => {
                            return (
                                <li key={_id}>
                                    The <a href={`/shoes/${shoe._id}`}>{shoe.name}</a>  
                                </li>
                            )
                        })}
                    </ul>

                    <nav>
                            <a href="shoes/new">Create a new shoe listing</a>
                    </nav>
                </body>
            </DefaultLayout>
        )
    }
}

module.exports = IndexShoes;