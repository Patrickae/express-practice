import React from 'react';
import axios from 'axios';
import FireBoard from './FireBoard';
import Wrapper from './styles.js';
const App = () => {
  const [fb, setFb] = React.useState([]);

  const getTemps = (event) => {
    axios.get('/api/probes/temps')
      .then((res) => {
        console.log(res.data)
        setFb(res.data)
      })
  }

  React.useEffect(() =>{
    getTemps()
  }, [])

  return (
    <Wrapper>
    <div className="App">
      <header className="App-header">
      <div className='container-fluid'>
        <FireBoard temps={fb}/>
        </div>
      </header>
    </div>
    </Wrapper>
  );
}

export default App;
