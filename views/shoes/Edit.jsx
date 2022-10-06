const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class EditShoes extends React.Component {
    render() {
        const { brand, _id, itemDetails, imageUrl, name, price, itemInStock, numItemInstock, sizeAvailable } = this.props.shoe;

        const style = {
            backgroundColor: "black",
            width: "fit-content",
            color: 'white',
            textShadow: '1px 1.5px blue',
            boxShadow: '0 0 10px 8px black',
            position: 'relative',
            left: '40%',
            top: '100px',

        }

        const h1Style = {
            position: 'relative',
            left: '37%',
            textShadow: '1.5px 2.5px grey',
        }

        const editBtn = {
            position: 'relative',
            left: '35%',
            boxShadow: '0 0 5px 4px grey',

        }

        const backGrnd = {
            backgroundImage: "url(/images/logo.gif)",
            backgroundRepeat: 'repeat',
            backGroundSize: 'cover',
            overflowY: 'scroll',
            overflowX: 'hidden',
        }

        return (
            <body style={backGrnd}>

                <DefaultLayout title={`Edit ${name}`}>
                            <h1 style={h1Style}>Edit {name}</h1>
                            <form action={`/shoes/${_id}?_method=PUT`} method="POST">
                                <fieldset style={style}>
                                    <label htmlFor='imageUrl' className='shoeEditForm'>Image URL: </label>
                                    <input type="text" id="imageUrl" name="imageUrl" defaultValue={imageUrl}/>
                                    <br>
                                    </br>
                                    <br>
                                    </br>
                                    <label htmlFor='brand'>Brand: </label>
                                    <input type="text" id="brand" name="brand" defaultValue={brand}/>
                                    <br>
                                    </br>
                                    <br>
                                    </br>
                                    <label htmlFor='name'>Name: </label>
                                    <input type="text" id="name" name="name" defaultValue={name}/>
                                    <br>
                                    </br>
                                    <br>
                                    </br>
                                    <label htmlFor="price">Price: $</label>
                                    <input type="text" id="price" name="price" defaultValue={price}/>
                                    <br>
                                    </br>
                                    <br>
                                    </br>
                                    <label htmlFor="itemInStock">Instock</label>
                                    <input type="checkbox" id="itemInStock" name="itemInStock" defaultChecked={itemInStock}/>
                                    <br>
                                    </br>
                                    <br>
                                    </br>
                                    <label htmlFor="numItemInstock">Stock Amount: </label>
                                    <input type="text" id="numItemInstock" name="numItemInstock" defaultValue={numItemInstock}/>
                                    <br>
                                    </br>
                                    <br>
                                    </br>
                                    <label htmlFor="sizeAvailable">Price: $</label>
                                    <input type="text" id="sizeAvailable" name="sizeAvailable" defaultValue={sizeAvailable}/>
                                    <br>
                                    </br>
                                    <br>
                                    </br>
                                    <label htmlFor='itemDetails'>Details: </label>
                                    <input type="textarea" id="itemDetails" name="itemDetails" defaultValue={itemDetails}/>
                                    <br>
                                    </br>
                                    <br>
                                    </br>
                                    <input type="submit" value="Edit Shoe" style={editBtn}/>
                                </fieldset>
                            </form>
                </DefaultLayout>
            </body>
        )
    }
}

module.exports = EditShoes;