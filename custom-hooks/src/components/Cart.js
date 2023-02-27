import { useState } from "react";
import { Item } from "./Item";

function useCounter(initialStatus){
  const[value, setValue] = useState(initialStatus)

  const increment = () => setValue(count => count+1)
  const decrement = () => setValue(count => count-1)
  const reset = () => setValue(0)
  
  return{value,increment, decrement, reset}
}

export function Cart() {
  const quantity = useCounter(0);

  return (
    <div className="Cart">
      <h1>Meu Carrinho</h1>
      <Item
        label="My produto massa"
        quantity={quantity.value}
        onIncrement={quantity.increment}
        onDecrement={quantity.decrement}
        onReset={quantity.reset}
      />
    </div>
  );
}