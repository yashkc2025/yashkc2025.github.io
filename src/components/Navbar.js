export default function Navbar() {
    return (
        <div className="navbar-drop">
            <div className="navbar">
                <div>
                    {/* <a href="#">Home</a> */}
                    <a className="about" href="#about">About</a>
                    <a href="#projects">Projects</a>
                </div>
                <div className="hiding">
                    <h1>yashkc2025</h1>
                    <h3>⤎/»</h3>
                </div>
                <div>
                    <a href="https://github.com/yashkc2025/yashkc2025.github.io/raw/main/assets/Yash%20Kumar.pdf">Resume</a>
                    <a className="about" href="#contact">Say Hi  !</a>
                </div>
            </div>
        </div>
    )
}