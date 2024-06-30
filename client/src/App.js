import socketIo from 'socket.io-client';
const socket=socketIo.connect('http://localhost:4000');


function App() {
  return (
    <div className="App">
     <h1 className='text-3xl'> Hello</h1>
    </div>
  );
}

export default App;
