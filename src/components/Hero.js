import Toolkit from './Toolkit';
import tools from './data/tools';

export default function Hero() {
    const tool = tools.map(item => <Toolkit {...item} />)
    return (
        <div>
            <div className='hero-box'>
                <span className='hero-text-d'>$</span>&emsp;
                {/* <h1 className='hero-text-alt'>«⌤»</h1> */}
                <h1 className='hero-text-alt'>नमस्ते, मेरा नाम यश है !</h1>
                <h1 className='hero-text-h1'>Hi, I am Yash</h1>
                <h1 className='hero-sub doubleUnderline'>⤷ I'm a developer && designer who loves building digital products.</h1>
            </div>
            <div id="lang" className='tool-drop'>
                <div className='tool-combo'>
                    {tool}
                </div>
            </div>
        </div>
    )
}