const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');


class ShowShoes extends React.Component {
    render() {
        const { _id, name, price, itemInStock, numItemInstock, sizeAvailable } = this.props.shoe;

        return (
            <DefaultLayout title={`${name} details`} Group="shoes">
                <h1> Show Page </h1>
                {name}
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