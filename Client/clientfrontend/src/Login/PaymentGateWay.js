import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PaymentGateWay() {
    return (
        <PayPalScriptProvider options={{ "client-id": "test" }}>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: "20000",
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        console.log(details)
                        const name = details.payer.name.given_name;
                        
                    },()=>{
                        
                    });
                }}
            />
        </PayPalScriptProvider>
    );
}