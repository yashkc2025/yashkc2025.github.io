export default function ProjectItem(props){
    return(
        <div className="pro-item">
            <div className="pro-image-cont">
                <img src={props.logo} className="pro-image"></img>
            </div>
            <div className="pro-text">
                <h1>{props.name}</h1>
                <h3>{props.desc}</h3>
                <button><a href={props.link}>Learn More ⤳</a></button>
            </div>
        </div>
        
    )
}