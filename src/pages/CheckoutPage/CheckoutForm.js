import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";

const CheckoutForm = ({price}) => {
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("")
  const stripe = useStripe();
  const elements = useElements();

  const {user} = useContext(AuthContext)

  //paymentIntent
  useEffect(() => {
    fetch('https://safar-server-nasar06.vercel.app/payment/paymentIntent', {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ price })
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data?.client_secret))
      .catch((err) => console.log(err))
  }, [price])

console.log('clientSecret',clientSecret)

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }

    const {paymentIntent, error:confirmError} = stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: card,
      billing_details: {
        name: user?.displayName,
        email: user?.email
      },
    },

    if(confirmError){
      setCardError(confirmError.massage)
      return
    }
  })
  .then(function(result) {
    // Handle result.error or result.paymentIntent
    toast.success('Successfully Ordered')
      if(result.status){
        fetch(`https://safar-server-nasar06.vercel.app/orders/update-order?email=${user?.email}`, {
        method: "PUT",
        headers:{
          "content-type": "application/json"
        }
      })
      .then(res => res.json())
      .then(result => {
        if (result.acknowledged) {
          toast.success('Successfully Ordered')
        }
      })
      .catch(err => console.error(err))
      }
  });

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "18px",
                color: "#424770",
                "::placeholder": {
                  color: "#1B3858#",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <p className="text-red-500 mt-4">{cardError}</p>
        <button
          className="px-4 py-4 bg-blue-400 text-black w-full mt-3 rounded shadow font-bold hover:bg-purple- 900"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          PAY
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
