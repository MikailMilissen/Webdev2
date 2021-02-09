import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import './App.css';
import Users from './Users'
import Blogs from './Blogs'


// for userContext hook we need to choose the head component of the tree hierarchy
import {UserContext} from './context/UserContext'


// UserContext will collapse the Provider part
// next step is to use it below as UserContext.Provider
// If we want to use it in another component, we then need to firstly import it into that component (import ... from ...)
// then we need to import it from react (import {UseContext} from 'react')
// then we need to assign a variable to the Usercontext to use it 

const user = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  }
]


const App = () => (
  <Switch>
    <UserContext.Provider value={user}>
    <Route exact path="/" component={Home} />
    <Route path='/users' component={Users} />
    <Blogs path= '/blogs' component={Blogs}/>

    </UserContext.Provider>
  </Switch>
);

export default App;
