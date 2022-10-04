const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class NewShoes extends React.Component {
    render() {
        return (
            <DefaultLayout title="Create a new shoe listing" Group="shoes">
                <form action="/shoes" method="POST">
                    
                    <label htmlFor='brand'>Brand: </label>
                    <input type="text" id="brand" name="brand"/>

                    <label htmlFor='name'>Name: </label>
                    <input type="text" id="name" name="name"/>

                    <label htmlFor="price">Price: $</label>
                    <input type="text" id="price" name="price"/>

                    <label htmlFor="itemInStock">Instock</label>
                    <input type="checkbox" id="itemInStock" name="itemInStock"/>

                    <label htmlFor="numItemInstock">Stock Amount: </label>
                    <input type="text" id="numItemInstock" name="numItemInstock"/>

                    <label htmlFor="sizeAvailable">Sizes Available: </label>
                    <input type="text" id="sizeAvailable" name="sizeAvailable"/>

                    <label htmlFor='itemDetails'>Details: </label>
                    <input type="textarea" id="itemDetails" name="itemDetails"/>

                    <input type="submit" value="Create Shoe"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = NewShoes;