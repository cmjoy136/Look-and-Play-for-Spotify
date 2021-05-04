import React from 'react'

const NavButton = (props) => {

    return (
        <button onClick={() => props.handleClick(props.page)}>{props.page}</button>
    )
}

export default NavButton