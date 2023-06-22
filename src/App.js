import './App.css';
import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import Todo from './todo';
const firebaseConfig = {
  apiKey: "AIzaSyDhfo9mk_QFpVnP6Fjabn_RDwWyKbN7jbI",
  authDomain: "sign-project-b2a38.firebaseapp.com",
  projectId: "sign-project-b2a38",
  storageBucket: "sign-project-b2a38.appspot.com",
  messagingSenderId: "472875921125",
  appId: "1:472875921125:web:62398f1134dd2e6982ee0c",
  measurementId: "G-JWMFZ5HN99"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(person => {
      if (person) {
        setUser(person);
      } else {
        setUser(null);
      }
    });
  }, []);

  const signWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      {user ? (
        <div className='box'>
          <h1>Welcome, {user.displayName.toUpperCase()}</h1>
          {user.photoURL && <img src={user.photoURL} alt="User" />}
          {console.log(user.photoURL)}
          <p>Email: {user.email}</p>
          <button onClick={() => auth.signOut()}>Sign Out</button> <br/><br/><br/>
          <Todo></Todo>
        </div>
      ) : (
        <button onClick={signWithGoogle}>Sign In with Google</button>
      )}
    </div>
  );
}

export default App;
