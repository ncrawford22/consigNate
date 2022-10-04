const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');


class ShowApparel extends React.Component {
    render() {
        const { brand, _id, name, price, itemInStock, numItemInstock, sizeAvailable } = this.props.apparel;

        return (
            <DefaultLayout title={`${name} details`} Group="apparel">
                <h1> Show Page </h1>
                {brand}
                <br>
                </br>
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
                    <a href={`/apparel/${_id}/edit`}>Edit</a>
                </button>

                <form action={`/apparel/${_id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete"/>
                </form>

                <nav>
                    <a href="/apparel">Back</a>
                </nav>
            </DefaultLayout>
        )
    }
}

module.exports = ShowApparel;