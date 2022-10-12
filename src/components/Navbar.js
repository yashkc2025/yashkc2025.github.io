export default function Navbar() {
    return (
        <div className="navbar-drop">
            <div className="navbar">
                <div>
                    {/* <a href="#">Home</a> */}
                    <a className="about" thref="#lang">About</a>
                    <a href="#">Projects</a>
                </div>
                <div className="hiding">
                    <h1>yashkc2025</h1>
                    <h3>⤎/»</h3>
                </div>
                <div>
                    <a href="#">Resume</a>
                    <a className="about" href="#contact">Say Hi  !</a>
                </div>
            </div>
        </div>
    )
}