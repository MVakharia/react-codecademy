export function helloWorldComponent () {
    return <p>Hello World, this is a function component body.</p>
}

export function component0 () {
    function handleClick () {
        alert('Stop it. Stop clicking.');

    }

    return <div onClick={handleClick}>
        <button>Don't click me.</button>

    </div>
}

export function PurchaseButton () {
    return <button onClick={()=>{alert("Purchase Complete.")}}>Purchase</button>
}