const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');


class ShowShoes extends React.Component {
    render() {
        const { brand, _id, itemDetails, name, price, itemInStock, numItemInstock, sizeAvailable } = this.props.shoe;

        return (
            <DefaultLayout title={`${name} details`} Group="shoes">
                <h1> Show Page </h1>
                {brand}
                <br>
                </br>
                {name}
                <br>
                </br>
                <br>
                </br>
                <img src={imageUrl}></img>
                <br>
                </br>
                ${price}
                <br>
                </br>
                {itemInStock ? "INSTOCK" : "OUT OF STOCK"}
                <br>
                </br>
                Stock Available: {numItemInstock}
                <br>
                </br>
                Size(s) Available: {sizeAvailable}
                <br>
                </br>
                Details: {itemDetails}

                <form action={`/shoes/${_id}/purchase?_method=PUT`} method='POST'>
                        <button>
                            Buy Now
                        </button>
                </form>

                <button>
                    <a href={`/shoes/${_id}/edit`}>Edit</a>
                </button>

                <form action={`/shoes/${_id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete"/>
                </form>

                <nav>
                    <a href="/shoes">Back</a>
                </nav>
            </DefaultLayout>
        )
    }
}

module.exports = ShowShoes;