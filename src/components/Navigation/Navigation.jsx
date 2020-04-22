import React from 'react'

export default function Navigation() {
    const rightNavbar = {
        display: "flex",
        justifyContent: "right",
    }

    return (
        <div>
            <nav>
                <a href="http://">King Soopers</a>
                <a style= {rightNavbar} href="/#">My Account</a>
            </nav>
        </div>
    )
}
