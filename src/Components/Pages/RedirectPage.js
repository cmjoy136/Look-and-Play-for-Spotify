import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { getParamValues } from '../../Utility/functions'

const RedirectPage = (props) =>{
    const history = useHistory()
    const {setExpireTime, location} = props
    useEffect(() =>{
        try{
            const access_token = getParamValues(location.hash)
            console.log(access_token)
            const expireTime = new Date().getTime() + access_token.expires_in * 1000
            localStorage.setItem('params', JSON.stringify(access_token))
            localStorage.setItem('expireTime', expireTime)
            setExpireTime(expireTime)
            history.push('/home')
        } catch(err) {
            history.push('/')
            console.log(err)
        }
    })
    return(null)
}

export default RedirectPage