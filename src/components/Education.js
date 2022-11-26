export default function Education() {
    return (
        <div className="edu">
            <h1>↬ My Education !</h1>
            <div className="college flex-college">
                <img src="https://upload.wikimedia.org/wikipedia/en/9/95/CBSE_new_logo.svg"></img>

                <div>
                    <h2>Central Board of Secondary Education</h2>
                    <div className="qual">
                        <h3>Grade 12</h3>
                        <h3 className="qual-year">2022</h3>
                    </div>
                </div>
            </div>
            <div className="college flex-college">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/1200px-IIT_Madras_Logo.svg.png"></img>

                <div>
                    <h2>Indian Institute of Technology Madras</h2>
                    <div className="qual">
                        <h3>B.S. Data Science</h3>
                        <h3 className="qual-year">2022 - 2026</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

