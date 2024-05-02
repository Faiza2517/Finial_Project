import logo from './logo.svg';
import './App.css';
 import { MyRouter } from './Layout/MyRouter';
//import {Elements} from '@stripe/react-stripe-js'
//import { loadStripe } from '@stripe/stripe-js';
//import { CardFrom } from './CardFrom';
import { CartProvider } from "./component/Cartcontaxt";
function App() {
 // const stripePromise = loadStripe('pk_test_51HxmROCmTw5RHoXG8HKf8jNdtYJsQw5E1AlY22M325hFy8YkcGxBhuvlz0jF3oWyu3sVXpjOVcVJotmjXekYo9jA00EPrtjitS');
  return (
    <div className="App">
      <CartProvider>
      <MyRouter/>
      {/* <Elements stripe={stripePromise}>
      <CardFrom />
      </Elements> */}
       </CartProvider>
    </div>
  );
}

export default App;
