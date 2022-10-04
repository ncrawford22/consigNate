const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class EditShoes extends React.Component {
    render() {
        const { _id, name, price, itemInStock, numItemInstock, sizeAvailable } = this.props.shoe;

        return (
            <DefaultLayout title={`Edit ${name}`} Group="shoes">
                <h1>Edit Page</h1>
                <form action={`/shoes/${_id}?_method=PUT`} method="POST">
                    
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

                    <label htmlFor="sizeAvailable">Price: $</label>
                    <input type="text" id="sizeAvailable" name="sizeAvailable" defaultValue={sizeAvailable}/>

                    <input type="submit" value="Edit Shoe"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = EditShoes;