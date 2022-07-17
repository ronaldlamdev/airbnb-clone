import './App.css';
import Navbar from './components/navbar';
import ImageGrid from './components/photogrid';
import Thumbnails from './components/thumbnails';

function App() {

  return (
    <div className="App">
      <Navbar />
      <main>
        <ImageGrid />
        <Thumbnails />
      </main>
    </div>
  )
}

export default App
