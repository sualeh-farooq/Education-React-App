import logo from './logo.svg';
import './App.css';
import Drawer from './Components/drawer';
import { Dashboard } from './Pages/dash';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import Tutors from './Pages/tutors';
import Schools from './Pages/school';
import Students from './Pages/students';


export function Home() {
return <>
<Dashboard />
</>
}

export default function App() {
 return <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home />}></Route>
  <Route path='/home' element={<Home />}></Route>
  <Route path='/tutors' element={<Tutors />}></Route>
  <Route path='/schools' element={<Schools />}></Route>
  <Route path='/students' element={<Students />}></Route>
  <Route path='/sessions' element={"sessions"}></Route>
  <Route path='/calender' element={"calender"}></Route>
  <Route path='/invoices' element={"invoices"}></Route>
  <Route path='/schedule' element={"schedule"}></Route>
  <Route path='/*' element="Page Not Found"></Route>
</Routes>
</BrowserRouter>
</>
}