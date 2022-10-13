export default function Mobile() {
    return (
        <nav role="navigation" className="mobile-nav-bar">
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>

                {/* <div className="mobile-nav-base"> */}
                    <ul id="menu">
                        <a href="#about"><li>About  ↩</li></a>
                        <a href="#"><li>Projects ↩</li></a>
                        <a href="#"><li>Resume ↩</li></a>
                        <a href="#contact"><li>↪ Say Hi !</li></a>
                    </ul>
                </div>
            {/* </div> */}
        </nav>
    )
}