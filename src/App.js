import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'

import SignIn from './components/SignIn'
import Chat from './components/Chat'
function App() {
  const [user] = useAuthState(auth)
  console.log(user)

  return (
    <div>
        {/* <Chat/>
        <SignIn/> */}
        {user ?  <Chat/> : <SignIn/>}
    </div>
  );
}

export default App;
