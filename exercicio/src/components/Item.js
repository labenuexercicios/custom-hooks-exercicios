

export const Item = ({label, value, onIncrement, onDecrement, onReset}) =>{
    return(
        <>
            <label>{label}</label>
            <p>{value}</p>
            <button onClick={()=> onIncrement()}>Incrementar</button>
            <button onClick={()=> onDecrement()}>Decrementar</button>
            <button onClick={()=> onReset()}>reset</button>




        </>
    )

}