import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import SaveIcon from  '@material-ui/icons/Save';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button  startIcon= {<SaveIcon />}variant="contained" color="secondary" onClick={() => alert('clicked')} size="large" >
          Hello World
        </Button>
       
      </header>
    </div>
  );
}

export default App;
