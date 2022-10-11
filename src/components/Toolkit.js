export default function Toolkit(props){
    return(
        <div className="tool">
            <img src={props.logo} className={props.name}/>
            <h3>{props.name}</h3>
        </div>
    )
}