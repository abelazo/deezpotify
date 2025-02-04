import spotifyLogo from '../assets/spotify.svg'
import './Dashboard.css'


const spotify = {
    name: 'Spotify',
    imageUrl: spotifyLogo,
    imageSize: 50,
};

function Dashboard() {
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
      <p className="read-the-docs">
        Logged into Spotify
      </p>
    </>
  )
}

export default Dashboard
