import React from "react";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import CurrencyFormat from "react-currency-format";
import {Link} from "react-router-dom"

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):<strong>{value}</strong>
              {console.warn(value)}
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        thousandSeperator={true}
        displayType={"text"}
        prefix={"$"}
      />
      <Link to="/checkout">
        <button>Proceed to checkout</button>
      </Link>
      
    </div>
  );
}

export default Subtotal;
