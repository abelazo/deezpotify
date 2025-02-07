import { useRef, useState } from 'react';
import spotifyLogo from '../assets/spotify.svg'
import './Dashboard.css'


const spotifyInfo = {
    name: 'Spotify',
    imageUrl: spotifyLogo,
    imageSize: 50,
};

function Dashboard() {
    const inputFile = useRef<HTMLInputElement | null>(null);
    const [isFileSelected, setIsFileSelected] = useState(false);

    const onButtonClick = () => {
        if (inputFile.current) {
            inputFile.current.click();
        }
    };

    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            console.log('Selected file:', file);
            setIsFileSelected(true);
        } else {
            setIsFileSelected(false);
        }
    };

    const onSubmit = () => {
        console.log('Submit button clicked');
        console.log(inputFile.current?.files[0]);
    }

  return (
    <>
      <div>
        <a href="https://spotify.com" target="_blank">
          <img
              className="logo spotify"
              src={spotifyInfo.imageUrl}
              alt="Spotify logo"
              style={{
                width: spotifyInfo.imageSize,
                height: spotifyInfo.imageSize
              }}
          />
        </a>
      </div>
      <h1>List</h1>
        <input onChange={onFileChange} type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
        <button onClick={onButtonClick}>Open file upload window</button>
        <br/>
        <button onClick={onSubmit} disabled={!isFileSelected}>Submit</button>
    </>
  )
}

export default Dashboard
