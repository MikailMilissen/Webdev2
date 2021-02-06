import {useState} from 'react'

const Home = () => {
    
    // let name = 'mario'
    // // The 'e' as input will trigger different properties about event objects
    // const handleClick = (e) => {
    //     console.log('clicked',e)
    // }
    // // Functions like this will need to be called like an anonymous function (check syntax below)
    // const clickMeAgain = (parameter,e) => {
    //     console.log('hello'+ parameter+ e)
    // }
    
    const [blogs,setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author:'Mikail', id:1},
        {title: 'Feestweekend', body: 'lorem ipsum...', author:'Daina', id:2},
        {title: 'Web Dev Tips', body: 'lorem ipsum...', author:'Yannick', id:3}
    ])
   

    return ( 
        <div className='Home'>
            {blogs.map((blog) => 
                <div className='blog-preview' key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by { blog.author }</p>
                </div>
            )}
            
            
            
            {/* <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => clickMeAgain('Mario',e)}>Click me again</button>  */}
        </div>
     );
}
 
export default Home;homo gay