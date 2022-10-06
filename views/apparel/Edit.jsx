const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class EditApparel extends React.Component {
    render() {
        const { brand, _id, itemDetails, imageUrl, name, price, itemInStock, numItemInstock, sizeAvailable } = this.props.apparel;

        return (
            <DefaultLayout title={`Edit ${name}`}>
                <body className='showPageBody'>
                    <h1>Edit Page</h1>
                    <form action={`/apparel/${_id}?_method=PUT`} method="POST">

                        <label htmlFor='imageUrl'>Image URL: </label>
                        <input type="text" id="imageUrl" name="imageUrl" defaultValue={imageUrl}/>
                        <br>
                        </br>
                        <label htmlFor='brand'>Brand: </label>
                        <input type="text" id="brand" name="brand" defaultValue={brand}/>
                        <br>
                        </br>
                        <label htmlFor='name'>Name: </label>
                        <input type="text" id="name" name="name" defaultValue={name}/>
                        <br>
                        </br>
                        <label htmlFor="price">Price: $</label>
                        <input type="text" id="price" name="price" defaultValue={price}/>
                        <br>
                        </br>
                        <label htmlFor="itemInStock">Instock</label>
                        <input type="checkbox" id="itemInStock" name="itemInStock" defaultChecked={itemInStock}/>
                        <br>
                        </br>
                        <label htmlFor="numItemInstock">Stock Amount: </label>
                        <input type="text" id="numItemInstock" name="numItemInstock" defaultValue={numItemInstock}/>
                        <br>
                        </br>
                        <label htmlFor="sizeAvailable">Size(s) Available: </label>
                        <input type="text" id="sizeAvailable" name="sizeAvailable" defaultValue={sizeAvailable}/>
                        <br>
                        </br>
                        <label htmlFor='itemDetails'>Details: </label>
                        <input type="textarea" id="itemDetails" name="itemDetails" defaultValue={itemDetails}/>
                        <br>
                        </br>
                        <br>
                        </br>
                        <input type="submit" value="Edit Apparel"/>
                    </form>
                </body>
            </DefaultLayout>
        )
    }
}

module.exports = EditApparel;