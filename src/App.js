
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Ho from './home'
import { Comments } from './comments';
import { Posts } from './posts';
import { Contact } from './contact';
import './App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Ho/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/posts' element={<Posts/>}></Route>
        <Route path='/posts/comments' element={<Comments/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
