import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>My Vinyl</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/records'>Records</Link></li>
                <li><Link to='/record/123'>Record</Link></li>
                <li><Link to='/users'>Users</Link></li>
                <li><Link to='/user/jimmyd'>User</Link></li>
                <li><Link to='/register'>Register</Link></li>
            </ul>
        </nav>
    </header>
)

export default Header