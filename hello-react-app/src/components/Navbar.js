import logo from "../images/ironhack-logo-xs.png"
import menuTop from "../images/menu-top-xs.png"

function Navbar() {
    return (
        <nav id="navbar">
            <img id="logo" src={logo} alt="ironhack logo"></img>
            <img id="menutop" src={menuTop} alt="ironhack logo"></img>
        </nav>
    )
}

export default Navbar