import React, {useState} from "react";

const options = ['Bell Pepper', 'Sausage', 'Pepperoni', 'Pineapple'];

export function PersonalPizza () {

    const [selected, setSelected] = useState([]);

    const toggleTopping = ({target}) => {

        const clickedTopping = target.value;

        setSelected((prev) => {
            //Check if clicked topping is already selected

            if(prev.includes(clickedTopping)) {
                //filter the clicked topping out of state

                return prev.filter(t => t !== clickedTopping);
            }

            else {
                //add the clicked topping to our state

                return [clickedTopping, ...prev];
            }
        })
    }
}