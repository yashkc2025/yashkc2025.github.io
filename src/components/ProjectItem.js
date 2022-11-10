export default function ProjectItem(props) {

    let try1 = <faltu></faltu>
    let try2 = <faltu></faltu>

    if (props.trylink !== "") {
        try1 = <button><a href={props.trylink}>Try</a></button>
    }

    if (props.downlink !== "") {
        try2 = <button><a href={props.downlink}>Download</a></button>
    }

    const lang = props.tools.map(item => <img className="card-lang-img" src={item}></img>)

    return (
        <div className="pro-item">
            <div className="pro-image-cont">
                <img src={props.logo} className="pro-image"></img>
            </div>
            <div className="pro-text">
                <h1>{props.name}</h1>
                <h3>{props.desc}</h3>
                <div>
                    <h4>Technology</h4>
                    {lang}
                </div>
                <button><a href={props.link}>Learn More</a></button>
                {try1}
                {try2}
            </div>
        </div>
    )
}