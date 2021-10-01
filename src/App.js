import './App.css';
import { useSelector } from 'react-redux';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;

  p{
    background-color: red;
    margin: 20px;
    
  }
`;

function App() {

  const fruits = useSelector((state) => state.fruits);

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          {fruits.map((fruit) =>
            <p key={fruit}>{fruit}</p>
          )}
        </Container>
      </header>
    </div>
  );
}

export default App;
