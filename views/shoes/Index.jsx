const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class IndexShoes extends React.Component {
    render() {
        const { shoes } = this.props;
        return (
            <DefaultLayout title="All Shoes">
                <body>
                    <h1>Shoes</h1>
                    <div id="shoes-index">
                        {shoes.map((shoe) => {
                            return (
                                <div key={shoe.id} className="shoeListing">
                                    <h2>{shoe.brand}</h2>
                                    <h3>{shoe.name}</h3>
                                    <br>
                                    </br>
                                        <a href={`/shoes/${shoe._id}`}>
                                        <img src={shoe.imageUrl} id="shoeImg"></img>
                                    </a>
                                        <h4 id="shoesH4">{'Price: $' + shoe.price} </h4>  
                                    </div>
                            )
                        })}
                    </div>

                    <nav>
                            <a href="shoes/new">Create a new shoe listing</a>
                    </nav>
                </body>
            </DefaultLayout>
        )
    }
}

module.exports = IndexShoes;