import './App.css';
import reactLogo from './assets/react.svg';
import { useState } from 'react';

const App = (): JSX.Element => {
  const initialValue = 0;
  const countStep = 1;

  const [count, setCount] = useState(initialValue);

  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' rel='noreferrer' target='_blank'>
          <img alt='Vite logo' className='logo' src='/vite.svg' />
        </a>
        <a href='https://reactjs.org' rel='noreferrer' target='_blank'>
          <img alt='React logo' className='logo react' src={reactLogo} />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button
          type='button'
          onClick={(): void => {
            setCount(prevState => prevState + countStep);
          }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default App;
