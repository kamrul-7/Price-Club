import './App.css';
import NavBar from './components/Navbar/NavBar';
import AssignmentMarks from './components/AssignmentMarks/AssignmentMarks';
import Priceing from './components/Priceing/Priceing';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Priceing></Priceing>
      <AssignmentMarks></AssignmentMarks>
    </div>
  );
}

export default App;
