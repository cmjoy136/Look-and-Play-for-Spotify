import React, { Component, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { getParamValues } from '../../Utility/functions'

const RedirectPage = (props) =>{
    const history = useHistory()
    useEffect(() =>{
        try{
            history.push('/homepage')
        } catch(err) {
            history.push('/')
            console.log(err)
        }
    })
    return(null)
}

export default RedirectPage