export default function Toolkit(props){
    return(
        <div className="tool">
            <img src={props.logo}/>
            <h3 className={props.name.toLowerCase()}>{props.name}</h3>
        </div>
    )
}