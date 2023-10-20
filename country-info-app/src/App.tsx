import routes from './routes';
import './App.css';

// We have a basic routing setup to handle our component paths as the app grows.

function App() {
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
