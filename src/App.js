import logo from './logo.svg';
import './App.css';
import Drawer from './Components/drawer';
import { Dashboard } from './Pages/dash';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import Tutors from './Pages/tutors';
import Schools from './Pages/school';
import Students from './Pages/students';
import { createContext, useContext } from 'react';
import Sessions from './Pages/sessions';
import NotFound from './Pages/notFound';
export const userContext = createContext()
export function Home() {
return <>
<userContext.Provider value={'Sualeh Farooq'} >
<Dashboard />
</userContext.Provider>
</>
}

export default function App() {
 return <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home />}></Route>
  <Route path='/home' element={<Home />}></Route>
  <Route path='/admin//tutors' element={<Tutors />}></Route>
  <Route path='/admin/schools' element={<Schools />}></Route>
  <Route path='/admin/students' element={<Students />}></Route>
  <Route path='/admin/sessions' element={<Sessions />}></Route>
  <Route path='/*' element={<NotFound />}></Route>
</Routes>
</BrowserRouter>
</>
}