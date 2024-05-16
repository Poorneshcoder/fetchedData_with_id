import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Data = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className="App">
            {data && (
                <table>
                    <thead>
                        <tr>
                            <th>User id</th>
                            <th>Id</th>
                            <th>title</th>
                            <th>body</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data.userId}</td>
                            <td>{data.id}</td>
                            <td>{data.title}</td>
                            <td>{data.body}</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Data;
