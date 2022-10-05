const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class IndexShoes extends React.Component {
    render() {
        const { shoes } = this.props;
        return (
            <DefaultLayout title="All Shoes"> <a href='/home'>Home</a>&nbsp;&nbsp;<a href='/apparel'>Apparel</a>
                <body>
                    <h1>Shoes</h1>
                    <ul id="shoes-index">
                        {shoes.map((shoe, _id) => {
                            return (
                                <li key={_id}>
                                    <a href={`/shoes/${shoe._id}`}>{shoe.brand}:&nbsp;&nbsp;{shoe.name}
                                        <img src={shoe.imageUrl}></img>
                                    </a>
                                    &nbsp;&nbsp;${shoe.price}   
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