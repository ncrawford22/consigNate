const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

class Confirmation extends React.Component {
    render(){
       const {name, _id} = this.props.shoes
        return(
            <DefaultLayout>
                <div>
                <img src="/images/ThankYou.gif"></img>
                    <p>
                        Thank you for buying the {name}!
                    </p>
                    <a href={`/home`}>Continue Shopping?</a>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Confirmation;