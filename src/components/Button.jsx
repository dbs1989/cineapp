import "./Button.css"
export function Button(props) {
    //const {text} = props;
    return (
        //<button className="btn">{text}</button>
        <button className={`btn ${props.tipo}`}>{props.text}</button>
    )
}