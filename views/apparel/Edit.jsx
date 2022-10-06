const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class EditApparel extends React.Component {
    render() {
        const { brand, _id, itemDetails, imageUrl, name, price, itemInStock, numItemInstock, sizeAvailable } = this.props.apparel;

        return (
            <DefaultLayout title={`Edit ${name}`} Group="apparel">
                <h1>Edit Page</h1>
                <form action={`/apparel/${_id}?_method=PUT`} method="POST">

                    <label htmlFor='imageUrl'>Image URL: </label>
                    <input type="text" id="imageUrl" name="imageUrl" defaultValue={imageUrl}/>
                    
                    <label htmlFor='brand'>Brand: </label>
                    <input type="text" id="brand" name="brand" defaultValue={brand}/>

                    <label htmlFor='name'>Name: </label>
                    <input type="text" id="name" name="name" defaultValue={name}/>

                    <label htmlFor="price">Price: $</label>
                    <input type="text" id="price" name="price" defaultValue={price}/>

                    <label htmlFor="itemInStock">Instock</label>
                    <input type="checkbox" id="itemInStock" name="itemInStock" defaultChecked={itemInStock}/>

                    <label htmlFor="numItemInstock">Stock Amount: </label>
                    <input type="text" id="numItemInstock" name="numItemInstock" defaultValue={numItemInstock}/>

                    <label htmlFor="sizeAvailable">Size(s) Available: </label>
                    <input type="text" id="sizeAvailable" name="sizeAvailable" defaultValue={sizeAvailable}/>

                    <label htmlFor='itemDetails'>Details: </label>
                    <input type="textarea" id="itemDetails" name="itemDetails" defaultValue={itemDetails}/>

                    <input type="submit" value="Edit Apparel"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = EditApparel;