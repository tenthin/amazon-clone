import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from "./StateProvider";

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
  return (
    <div className="subtotal">
        {/* price */}

        <CurrencyFormat
            renderText={(value) = (
                <>
                    <p>
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift
                    </small>
                </>
            )}
            decimalState={2}
            value={0}
            displayType={'text'}
            thousandsSeparator={true}
            prefix={"$"}
        />
        <button>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal;