const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')


class Confirmation extends React.Component {
    render(){
       const {name, _id} = this.props.shoes
        return(
            
            <DefaultLayout>
                <link rel='stylesheet' href='../../css/style.css'/>

                <div id= "shoesConfirmation">
                <img src="/images/ThankYou.gif" id="confirmationImg"></img>
                    <p className='thanksConfirmation'>
                        Thank you for buying the {name}!
                    </p>
                    <nav id="confirmationNav">
                        <a href={`/shoes/${_id}`}>Back to {name}?</a>                    
                        <br>
                        </br>
                        <a href={`/home`}>Continue Shopping?</a>
                    </nav>
                    
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Confirmation;