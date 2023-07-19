import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import { posts } from './data';
import { useEffect } from 'react';
const { io } = require("socket.io-client");

function App() {

  const [username, setUsername] = useState('');
  const [user, setUser] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect( () => {
    //connected to our socket server nd initialize it in state variable
    setSocket(io("http://localhost:5000"));
  }, []);

  useEffect( () => {
    //tell server to add new user
    socket?.emit("newUser", user);
  }, [socket, user])

  return (

    <div className="container">
    {
      user ? (
        <>
          <Navbar socket={socket}/>
          {
            posts.map( (post) => {
              return (
                <Card key={post.id} post={post} socket={socket} user={user}/>
              )
            })
          }
          <span className='username'>{user}</span>
        </>
      ) : (
        <div className='login'>
          <input type='text' placeholder='username' onChange={ (e) => setUsername(e.target.value)}/>
          <button onClick={ () => setUser(username)}>Login</button>
        </div>
      )
    }
    </div>
  );

}

export default App;
