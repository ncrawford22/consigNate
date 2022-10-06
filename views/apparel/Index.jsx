const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class IndexApparel extends React.Component {
    render() {
        const { apparels } = this.props;
        return (
            <DefaultLayout title="All Apparel">
                <body>
                    <h1>Apparel</h1>
                    <div id="apparel-index">
                        {apparels.map((apparel) => {
                            return (
                                    <div key={apparel._id} className="apparelListing">
                                        <h2>{apparel.brand}</h2>
                                        <h3>{apparel.name}</h3>
                                        <br>
                                        </br>
                                        <a href={`/apparel/${apparel._id}`}>
                                            <img src={apparel.imageUrl} id="apparelImg"></img>
                                        </a>
                                        <h4 id="apparelH4">{'Price: $' + apparel.price} </h4>  
                                    </div>
                            )
                        })}
                    </div>

                    <nav>
                            <a href="apparel/new">Create a new apparel listing</a>
                    </nav>
                </body>
            </DefaultLayout>
        )
    }
}

module.exports = IndexApparel;