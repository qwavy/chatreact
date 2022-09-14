import GoogleButton from 'react-google-button'
import {auth} from '../firebase'
import { signInWithRedirect, GoogleAuthProvider } from 'firebase/auth'
const SignIn = () => {
    const login = () => {
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth, provider);
    }

    return(
        <GoogleButton onClick={login}/>
    )
}
export default SignIn