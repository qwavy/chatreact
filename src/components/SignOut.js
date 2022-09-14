import {auth} from '../firebase';
import {signOut} from 'firebase/auth';
const SignOut = () => {
    const logout = () => {
        signOut(auth)
    }
    return(
    
        <div>
            <button onClick={logout}>SignOut</button>
        </div>
    )
}

export default SignOut