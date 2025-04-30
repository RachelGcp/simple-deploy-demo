import { useState } from 'react';

function App() {
  const [text, setText] = useState('Hello world!');
  const [color, setColor] = useState('black');

  const handleClick = () => {
    setText('I made chane now! 🎉');
    setColor(color === 'black' ? 'pink' : 'blue');
  };

  return (
    <div style={{ padding: '3rem', textAlign: 'center' }}>
      <h1 style={{ color }}>{text}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
