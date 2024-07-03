import axios from 'axios';
import React, { useEffect, useState } from 'react';

function GetDataServer() {
    const [sensorData, setSensorData] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        fetchSensorData();
    }, []);

    const fetchSensorData = () => {
        axios.get('http://www.ihubiitmandi.in/iot_dashboard/getSensorData.php')
        .then(response => {
            const data = response.data;

            if (response.status !== 200) {
                console.log(data);
                throw new Error(data.message || 'Error fetching data');
            }

            setSensorData(data);
        })
        .catch(error => {
            setErrorMessage(error.toString());
            console.error('There was an error!', error);
        });
    };

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


































// import React, { Component } from 'react';

// class GetDataServer extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             sensorData: [],
//             errorMessage: null
//         };
//     }

//     componentDidMount() {
//         this.fetchSensorData();
//     }

//     fetchSensorData = () => {
//         // GET request using fetch with error handling
//         fetch('https://www.ihubiitmandi.in/iot_dashboard/getSensorData.php')
//             .then(async response => {
//                 const data = await response.json();
                
//                 // check for error response
//                 if (response.ok) {
//                     console.log(data);
//                     // get error message from body or default to response statusText
//                     const error = (data && data.message) || response.statusText;
//                     throw new Error(error);
//                 }

//                 this.setState({ sensorData: data });
//             })
//             .catch(error => {
//                 this.setState({ errorMessage: error.toString() });
//                 console.error('There was an error!', error);
//             });
//     }

//     render() {
//         const { sensorData, errorMessage } = this.state;

//         return (
//             <div>
//                 {errorMessage ? (
//                     <div>Error: {errorMessage}</div>
//                 ) : (
//                     <ul>
//                         {sensorData.map(sensor => (
//                             <li key={sensor.id}>
//                                 Temperature: {sensor.temperature}, Pressure: {sensor.pressure}, Humidity: {sensor.humidity}, Gas: {sensor.gas}, Reading Time: {sensor.reading_time}
//                             </li>
//                         ))}
//                     </ul>
//                 )}
//             </div>
//         );
//     }
// }

// export default GetDataServer;


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// function GetDataServer() {
//     const [sensorData, setSensorData] = useState([]);
//     const [errorMessage, setErrorMessage] = useState(null);

//     useEffect(() => {
//         fetchSensorData();
//     }, []);


//     axios({
//         url:'http://www.ihubiitmandi.in/iot_dashboard/getSensorData.php',
//         method:"GET",
//         mode: 'no-cors',
//         headers:{
//             "Content-Type": "application/json",
           
//             "Access-Control-Request-Headers": 'Content-Type, Authorization'

//         }
//     })
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err =>{
//         console.log(err);
//     })


//     const fetchSensorData = () => {
//         axios.get('http://www.ihubiitmandi.in/iot_dashboard/getSensorData.php')
//             .then(response => {
//                 const data = response.data;

//                 if (!response.status === 200) {
//                     console.log(data);
//                     throw new Error(data.message || 'Error fetching data');
//                 }

//                 setSensorData(data);
//             })
//             .catch(error => {
//                 setErrorMessage(error.toString());
//                 console.error('There was an error!', error);
//             });
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
