
import Navbar from './Navbar';
import Home from './Home'

function App() {
  const title = 'Welcome to the new blog'
  const likes = 50
  // You cannot output an object or booleans wit hreact
  // const person = { // 
  //   name:'Mikail',
  //   age:30
  // }

  const link = 'http://www.google.com'

  return(
    <div className='App'>
      <Navbar />
      <div className='content'>
       <Home />
      </div>
    </div>
  );
}

export default App;



// <h1>{title}</h1>
// <p>Liked {likes} times</p>
// <p>{10}</p>
// <a href={link}>Google</a>