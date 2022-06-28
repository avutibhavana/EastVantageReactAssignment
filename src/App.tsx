import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'
  
function App() {

    const [posts, setPosts] = useState<any[]>([]);
    const [count,setCount]=useState(0)
  
    useEffect(() => {
        const loadPost = async () => { 
            const response = await axios.get(
            "https://randomuser.me/api");
            const Info=response.data.results
            console.log(Info)            
            setPosts(Info);
            localStorage.setItem("AllData", JSON.stringify(response));          
        }        
        loadPost();
    }, [count]);


    const resetFunc=()=>{
      setCount(count+1)
    } 

    return (
        <>
            <div className="App">         
                
                    {posts.map((item) =>
                                           
                        <div className='total'>   
                        {/* <div><img className="image" src="https://tse1.mm.bing.net/th?id=OIP.pEdHkxmnEZGF_fYifpsW1gHaML&pid=Api&P=0&w=115&h=189"></img></div>                                 */}
                        <div className='fullname'><h4>Name:</h4><p>{item.name.title}{item.name.first}{item.name.last}</p></div>
                        <div className='email'><h4>Email:</h4><p>{item.email}</p></div>
                        <div><button onClick={resetFunc}>Refresh</button></div>                       
                        </div>
                      
                        
                      )}
                
            </div>
        </>
    );
}
  
export default App;


