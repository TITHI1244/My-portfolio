import React from 'react'
import ToggleThemeButton from './ToggleThemeButton'

export default function Nav() {
    return (
        <nav className="navbar">
            <ul>
                <li>Navbar</li>
                <li><ToggleThemeButton /></li>
            </ul>
        </nav>
    )
}
