const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');


class ShowShoes extends React.Component {
    render() {
        const { brand, _id, imageUrl, itemDetails, name, price, itemInStock, numItemInstock, sizeAvailable } = this.props.shoe;

        return (
            <DefaultLayout title={`${name} details`}>
                <body className='showPageBody'>
                    <div className='nameBrand'>
                        <h3> You are viewing {name} </h3>
                            <h4>Brand: {brand}</h4>
                    </div>
                    <div className='shoesWrapper'>

                        <img src={imageUrl} id="shoesShowImg"></img>
                        <br>
                        </br>
                        <h3 id="show-price">{'$' + price}</h3>
                        <br>
                        </br>
                        <div id="stockCheck">
                            {itemInStock == false ? "OUT OF STOCK! Check back soon..." : numItemInstock == 0 ? "OUT OF STOCK! Check back soon..." : "INSTOCK"}
                        </div>
                        <br>
                        </br>
                        <br>
                        </br>
                        <div id="inventory">Stock Available: {numItemInstock == 0 ? "OUT OF STOCK" : numItemInstock }
                            {numItemInstock == 0 ? <div><br></br><button id="sold-out">SOLD OUT</button><br></br></div>: 
                                
                                <div>
                                    <form action={`/shoes/${_id}/confirmation?_method=PUT`} method='POST'>
                                        <br>
                                        </br>
                                        <button className="buyButton">
                                            Buy Now
                                        </button>
                                    </form>
                                </div>
                            }
                        </div>
                    </div>
                        <br>
                        </br>

                        <div id="sizes">
                            Size(s) Available: {numItemInstock == 0 ? "None" : sizeAvailable}
                        </div>
                        <br>
                        </br>
                        <div id='details'>
                            Details: {itemDetails}
                        </div>

                    <br>
                    </br>
                    <nav id='footer-nav'>
                    <button>
                        <a href={`/shoes/${_id}/edit`}>Edit</a>
                    </button>

                    <form action={`/shoes/${_id}?_method=DELETE`} method="POST">
                        <input type="submit" value="Delete" className='deletebtn'/>
                    </form>

                   
                        <button>
                            <a href="/shoes">Back</a>
                        </button>
                    </nav>
                </body>
            </DefaultLayout>
        )
    }
}

module.exports = ShowShoes;