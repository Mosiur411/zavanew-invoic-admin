import { useContext } from 'react'
import { AuthContext } from '../../utils/Context'

function AccessToken() {
    const {user} = useContext(AuthContext)
    console.log(user)
    return user.accessToken
}

export default AccessToken