import { useState } from 'react'
import spotifyLogo from '../assets/spotify.svg'
import './Login.css'


const spotify = {
    name: 'Spotify',
    imageUrl: spotifyLogo,
    imageSize: 500,
};

function Login() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://spotify.com" target="_blank">
          <img
              className="logo spotify"
              src={spotify.imageUrl}
              alt="Spotify logo"
              style={{
                width: spotify.imageSize,
                height: spotify.imageSize
              }}
          />
        </a>
      </div>
      <h1>Login</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Login into Spotify
      </p>
    </>
  )
}

export default Login
