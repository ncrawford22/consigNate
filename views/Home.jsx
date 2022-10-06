const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout');

class Home extends React.Component {
    render() {
        return (
            <DefaultLayout title="consigNate"> 

                <body>
                    <h1 id="homeIndex">consigNate</h1>

                    <div className='gridbox-container'>
                    <div id='1' className='gridbox'><a href="shoes/"><img src="../images/aj1royaltoe.png" id='homeImg'></img></a></div>
                    <div id='2' className='gridbox'><a href="shoes/"><img src="../images/supremexnikedunk.png" id='homeImg'></img></a></div>
                    <div id='3' className='gridbox'><a href="shoes/"><img src="../images/foamrunnervermillion.png" id='homeImg'></img></a></div>
                    <div id='4' className='gridbox'><a href="shoes/"><img src="../images/yeezy350v2Zebra.png" id='homeImg'></img></a></div>
                    <div id='5' className='gridbox'><a href="apparel/"><img src="../images/essentialsFoGhoodies.png" id='homeImg'></img></a></div>
                    <div id='6' className='gridbox'><a href="apparel/"><img src="../images/levi-jeans.png" id='homeImg'></img></a></div>
                    <div id='7' className='gridbox'><a href="apparel/"><img src="../images/gucci-belt.png" id='homeImg'></img></a></div>
                    <div id='8' className='gridbox'><a href="apparel/"><img src="../images/nikeshorts.png" id='homeImg'></img></a></div>
                    </div>

                    <nav id="body">
                            <a href="apparel/new">Create a new apparel listing</a>
                            <br>
                            </br>
                            <br>
                            </br>
                            <a href="shoes/new">Create a new shoe listing</a>
                    </nav>
                </body>
            </DefaultLayout>
        )
    }
}

module.exports = Home;