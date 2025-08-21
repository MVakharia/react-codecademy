let baby = false;

let age = 32;

//This utterly deranged list contains one of my favourite foods.
//Anyway, if the expression to the left of the '&&' evaluates to 'true',
// the JSX to the right of the '&&' will be rendered.
// If the expression evaluates to false, the JSX won't render.
const tasty = (
    <ul>
        <li>Applesauce</li>
        {!baby && <li>Pizza</li>}
        { age > 15 && <li>Brussels Sprouts</li> }
        { age > 20 && <li>Oysters</li> }
        { age > 25 && <li>Grappa</li> }
    </ul>
);

const judgmental = Math.random() < 0.5;

const foodCriminal = false;

const favouriteFoods = (
    <div>
        <h1>Definitely Not My Favourite Foods (And Some Food Crimes)</h1>

        <ul>
            { foodCriminal && <li>Sushi Burrito</li> }
            <li>Rhubarb Pie</li>
            { !judgmental && <li>Nacho Cheez Straight Out THe Jar</li> }
            <li>Broiled Grapefruit</li>
        </ul>
    </div>
)