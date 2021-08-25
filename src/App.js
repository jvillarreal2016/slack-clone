import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
        <h2>hello world</h2>

        <Header />
        <div className="app__body">
          <Sidebar />
          {/* React-Router -> Chat screen */}
        </div>
    </div>
  );
}

export default App;
