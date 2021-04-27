import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'

const ErrorPage = () => {
    return(
        <div>
            <Navigation/>
            Page Not Found. Return to <Link to='/homepage'>Home</Link>
        </div>
    )
}

export default ErrorPage