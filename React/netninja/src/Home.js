import {useState, useEffect} from 'react'
import BlogList from './Bloglist'

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

    const [name,setName] = useState('mario')
    
    const [blogs,setBlogs] = useState(null)
    const [isPending,setIsPending] = useState(true)

    

    useEffect(() => {
        console.log('use effect ran')
        console.log(blogs)
        console.log(name)
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            })
            .then((data) => {
                console.log(data);
                setBlogs(data)
                setIsPending(false)
            });
        },1000)
       

    },[])
    return ( 
        <div className='Home'>
        {isPending && <div>Loading...</div>}  
        {blogs && <BlogList blogs={blogs} title='All blogs'  />}

        {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Mikail' )} title='Mikail blogs'/>
        <button onClick={() => setName('luigi')}>Change Name</button> */}

        </div>
    )}
            
            
            
    {/* <button onClick={handleClick}>Click me</button>
    <button onClick={(e) => clickMeAgain('Mario',e)}>Click me again</button>  */}
export default Home;