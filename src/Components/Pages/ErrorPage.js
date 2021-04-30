import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'

const ErrorPage = () => {
    return(
        <div>
            <Navigation/>
            Page Not Found. Return to <Link to='/home'>Home</Link>
        </div>
    )
}

export default ErrorPage