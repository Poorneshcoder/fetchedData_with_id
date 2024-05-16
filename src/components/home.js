
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState([]);

    const fetchedData = async () =>{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const jsonData = await response.json();
      // Check if the fetched data is an array
      if (Array.isArray(jsonData)) {
        setData(jsonData);
      } else {
        console.error('Fetched data is not an array:', jsonData);
      }
    }
  
    useEffect(()=>{
      fetchedData();
    },[])
    return(
      
        <div className="App">
          <table>
            <thead>
              <tr>
                <th>User id</th>
                <th>Id</th>
                <th>title</th>
                <th>body</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item,id)=>(
                <tr key={id}>
                <td>{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <td>
                    <Link to={`/${item.id}`}>
                         <button>view</button>
                    </Link>
                </td>
              </tr>
              ))}
              
            </tbody>
          </table>
     
    </div>
    
   

    )
}

export default Home;