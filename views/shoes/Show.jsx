const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');


class ShowShoes extends React.Component {
    render() {
        const { brand, _id, imageUrl, itemDetails, name, price, itemInStock, numItemInstock, sizeAvailable } = this.props.shoe;

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
                <div id="stockCheck">
                    {itemInStock == false ? "OUT OF STOCK! Check back soon..." : numItemInstock == 0 ? "OUT OF STOCK! Check back soon..." : "INSTOCK"}
                </div>
                <br>
                </br>
                Stock Available: {numItemInstock == 0 ? "OUT OF STOCK" : numItemInstock}
                    {numItemInstock == 0 ? <button id="oos">SOLD OUT</button> : 
                        
                        <form action={`/shoes/${_id}/confirmation?_method=PUT`} method='POST'>
                            <button className="buyButton">
                                Buy Now
                            </button>
                        </form>
                    }
                <br>
                </br>
                Size(s) Available: {sizeAvailable}
                <br>
                </br>
                Details: {itemDetails}

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