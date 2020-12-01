import './App.css';
import Chat from './Components/Chat';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext, useState } from 'react';
import Login from './Components/Login';

export const UserContext = createContext();
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="App">
        {loggedInUser.email ?
          <div className="app-body">
            <Router>
              <Sidebar />
              <Switch>
                <Route path="/login" >
                  <Login />
                </Route>
                <Route exact path="/">
                  <Chat />
                </Route>
                <Route path="/rooms/:roomID">
                  <Chat />
                </Route>
              </Switch>
            </Router>
          </div>
          :
          <Login />
        }

      </div>
    </UserContext.Provider>
  );
}

export default App;
