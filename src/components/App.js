import React, {useState, useEffect} from 'react';

function App() {
    const url = 'https://dog.ceo/api/breeds/image/random';
    const [dogImg, setDogImg] = useState(null);

    useEffect(() => {
        fetch(url)
        .then((r) => r.json())
        .then((data) => setDogImg(data.message) )
    }, [])

    if (!dogImg) return <p>Loading...</p>

  return (
    <div>
        <img src={dogImg} alt='A Random Dog'/>
    </div>
  )
}

export default App;

