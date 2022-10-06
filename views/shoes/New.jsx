const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class NewShoes extends React.Component {
    render() {
        return (
            <DefaultLayout title="Create a new shoe listing">
                <body className='showPageBody'>
                    <form action="/shoes" method="POST">
                        <br>
                        </br>
                        <br>
                        </br>
                        <label htmlFor='imageUrl'>Image URL: </label>
                        <input type="text" id="imageUrl" name="imageUrl"/>
                        <br>
                        </br>
                        <br>
                        </br>
                        <label htmlFor='brand'>Brand: </label>
                        <input type="text" id="brand" name="brand"/>
                        <br>
                        </br>
                        <br>
                        </br>
                        <label htmlFor='name'>Name: </label>
                        <input type="text" id="name" name="name"/>
                        <br>
                        </br>
                        <br>
                        </br>
                        <label htmlFor="price">Price: $</label>
                        <input type="text" id="price" name="price"/>
                        <br>
                        </br>
                        <br>
                        </br>
                        <label htmlFor="itemInStock">Instock</label>
                        <input type="checkbox" id="itemInStock" name="itemInStock"/>
                        <br>
                        </br>
                        <br>
                        </br>
                        <label htmlFor="numItemInstock">Stock Amount: </label>
                        <input type="text" id="numItemInstock" name="numItemInstock"/>
                        <br>
                        </br>
                        <br>
                        </br>
                        <label htmlFor="sizeAvailable">Sizes Available: </label>
                        <input type="text" id="sizeAvailable" name="sizeAvailable"/>
                        <br>
                        </br>
                        <br>
                        </br>
                        <label htmlFor='itemDetails'>Details: </label>
                        <input type="textarea" id="itemDetails" name="itemDetails"/>
                        <br>
                        </br>
                        <br>
                        </br>
                        <input type="submit" value="Create Shoe"/>
                    </form>
                </body>
            </DefaultLayout>
        )
    }
}

module.exports = NewShoes;