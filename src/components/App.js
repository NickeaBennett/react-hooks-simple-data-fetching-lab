// create your App component here
import React, {useEffect} from 'react'

function App() {
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => data)
    })
  return (
    <div>App</div>
  )
}

export default App;