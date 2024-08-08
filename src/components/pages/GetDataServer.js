// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// function GetDataServer() {
//     const [sensorData, setSensorData] = useState([]);
//     const [errorMessage, setErrorMessage] = useState(null);

//     useEffect(() => {
//         fetchSensorData();
//     }, []);

//     const fetchSensorData = () => {
//         axios.get('http://www.ihubiitmandi.in/iot_dashboard/getSensorData.php')
//         .then(response => {
//             const data = response.data;

//             if (response.status !== 200) {
//                 console.log(data);
//                 throw new Error(data.message || 'Error fetching data');
//             }

//             setSensorData(data);
//         })
//         .catch(error => {
//             setErrorMessage(error.toString());
//             console.error('There was an error!', error);
//         });
//     };

//     return (
//         <div>
//             {errorMessage ? (
//                 <div>Error: {errorMessage}</div>
//             ) : (
//                 <ul>
//                     {sensorData.map(sensor => (
//                         <li key={sensor.id}>
//                             Temperature: {sensor.temperature}, Pressure: {sensor.pressure}, Humidity: {sensor.humidity}, Gas: {sensor.gas}, Reading Time: {sensor.reading_time}
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// }

// export default GetDataServer;

































import axios from 'axios';
import React, { useEffect, useState } from 'react';

function GetDataServer() {
    const [sensorData, setSensorData] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        // Function to fetch sensor data
        const fetchSensorData = () => {
            axios.get('http://www.ihubiitmandi.in/iot_dashboard/getSensorData.php')
                .then(response => {
                    if (response.status !== 200) {
                        throw new Error('Error fetching data');
                    }
                    setSensorData(response.data);
                })
                .catch(error => {
                    setErrorMessage(error.toString());
                    console.error('There was an error!', error);
                });
        };

        // Fetch data initially
        fetchSensorData();

        // Set up interval for auto-refresh
        const intervalId = setInterval(fetchSensorData, 25000); // 60000 ms = 1 minute

        // Clear interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures this runs once on mount

    return (
        <div>
            {errorMessage ? (
                <div>Error: {errorMessage}</div>
            ) : (
                <ul>
                    {sensorData.map(sensor => (
                        <li key={sensor.id}>
                            Temperature: {sensor.temperature}, Pressure: {sensor.pressure}, Humidity: {sensor.humidity}, Gas: {sensor.gas}, Reading Time: {sensor.reading_time}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default GetDataServer;
