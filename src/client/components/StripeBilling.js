import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout'


class Payments extends Component {    
      render() {    
          return (
              <StripeCheckout
                name="Payment"
                description="Description"
                amount={500000}
                token={token => console.log(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
              >
              <button className="btn">
                    Book charter
              </button>
              </StripeCheckout>
          )
      }
}


export default Payments