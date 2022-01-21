import logo from "../logo.svg"
const Logo = ()=>{
    return (
        <>
        <div className="logo">
            <h1 className="logoText">EdBot<span>.</span></h1>
            <div className="myimg">
                <img src={logo} alt="logo" />
            </div>
            <p className="logoText desc">
                 ...not your normal bot.
            </p>
            <p className="center">Fahad Zaheer, Sheroz Khan, Malik Zeeshan Ahmad</p>
        </div>
        </>
    )
}
export default Logo;