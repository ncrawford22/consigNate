const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class NewApparel extends React.Component {
    render() {
        return (
            <DefaultLayout title="Create a new apparel listing">
                <body className='showPageBody'>
                        <h1>Create New Shoe </h1>
                    <form action="/apparel" method="POST">

                        <label htmlFor='imageUrl'>Image URL: </label>
                        <input type="text" id="imageUrl" name="imageUrl"/>
                        <br>
                        </br>
                        <label htmlFor='brand'>Brand: </label>
                        <input type="text" id="brand" name="brand"/>
                        <br>
                        </br>
                        <label htmlFor='name'>Name: </label>
                        <input type="text" id="name" name="name"/>
                        <br>
                        </br>
                        <label htmlFor="price">Price: $</label>
                        <input type="text" id="price" name="price"/>
                        <br>
                        </br>
                        <label htmlFor="itemInStock">Instock</label>
                        <input type="checkbox" id="itemInStock" name="itemInStock"/>
                        <br>
                        </br>
                        <label htmlFor="numItemInstock">Stock Amount: </label>
                        <input type="text" id="numItemInstock" name="numItemInstock"/>
                        <br>
                        </br>
                        <label htmlFor="sizeAvailable">Sizes Available: </label>
                        <input type="text" id="sizeAvailable" name="sizeAvailable"/>
                        <br>
                        </br>
                        <label htmlFor='itemDetails'>Details: </label>
                        <input type="textarea" id="itemDetails" name="itemDetails"/>
                        <br>
                        </br>
                        <br>
                        </br>
                        <input type="submit" value="Create Apparel"/>
                    </form>
                </body>
            </DefaultLayout>
        )
    }
}

module.exports = NewApparel;