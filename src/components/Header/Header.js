import React from "react"
import Account from "../Account/Account"
import "./Header.css"
import Logo from "../Logo/Logo"
import Navigation from "../Navigation/Navigation"
import Settings from "../Settings/Settings"

const Header = () => {
    return (
        <header>
            <div className="menu">
                <div className="leftpart">
                    <Logo />
                    <Navigation />
                </div>
                <div className="rightpart">
                    <Account name="Sergey Karyakin" />
                    <Settings />
                </div>
            </div>
        </header>
    )
}

export default Header
