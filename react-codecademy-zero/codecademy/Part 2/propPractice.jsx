export const num = 0;

export function Wrapper(props) {
    console.log(props.children);

    return <div className="wrapper">{props.children}</div>;
}

export function SubHeading() {
    return <h2>This is a subheading.</h2>;
}

//Below are three ways of giving default values to props.

// eslint-disable-next-line react-refresh/only-export-components
export function defaultExample (props) {
    return <h1>{props.text}</h1>;
}

defaultExample.defaultProps = {
    text: 'This is default text'
}

// eslint-disable-next-line react-refresh/only-export-components
export function defaultExampleZero ({text="This is default text."}) {
    return <h1>{text}</h1>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function defaultExampleOne(props) {
    const {text = "This is default text"} = props;

    return <h1>{text}</h1>;
}






