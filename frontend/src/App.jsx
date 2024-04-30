import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import { Toaster } from "react-hot-toast";


import UserTable from './Table/UserTable';

const App = () => {
  return (
    <>
      <UserTable ></UserTable>
      <Toaster></Toaster>

    </>
  )
}

export default App
