const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');


class ShowApparel extends React.Component {
    render() {
        const { brand, itemDetails, _id, imageUrl, name, price, itemInStock, numItemInstock, sizeAvailable } = this.props.apparel;

        return (
            <DefaultLayout title={`${name} details`} Group="apparel">
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
                        
                        <form action={`/apparel/${_id}/confirmation?_method=PUT`} method='POST'>
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