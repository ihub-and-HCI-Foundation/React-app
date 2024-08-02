// import React, { useState } from 'react';
// import { AsyncPaginate } from 'react-select-async-paginate';
// import { fetchCities } from '../../api/OpenWeatherService';

// const Search = ({ onSearchChange }) => {
//   const [searchValue, setSearchValue] = useState(null);

//   const loadOptions = async (inputValue) => {
//     const citiesList = await fetchCities(inputValue);

//     return {
//       options: citiesList.data.map((city) => {
//         return {
//           value: `${city.latitude} ${city.longitude}`,
//           label: `${city.name}, ${city.countryCode}`,
//         };
//       }),
//     };
//   };

//   const onChangeHandler = (enteredData) => {
//     setSearchValue(enteredData);
//     onSearchChange(enteredData);
//   };

//   return (
//     <AsyncPaginate
//       placeholder="Search for cities"
//       debounceTimeout={600}
//       value={searchValue}
//       onChange={onChangeHandler}
//       loadOptions={loadOptions}
//     />
//   );
// };

// export default Search;


import React, { useEffect, useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { fetchCities } from '../../api/OpenWeatherService';

const Search = ({ onSearchChange }) => {
  const [searchValue, setSearchValue] = useState(null);

  // Function to load options for the search
  const loadOptions = async (inputValue) => {
    try {
      const citiesList = await fetchCities(inputValue);

      // Ensure citiesList.data is an array
      if (Array.isArray(citiesList.data)) {
        return {
          options: citiesList.data.map((city) => ({
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          })),
        };
      } else {
        console.error('Invalid data format from fetchCities');
        return { options: [] };
      }
    } catch (error) {
      console.error('Error loading options:', error);
      return { options: [] };
    }
  };

  // Function to handle search change
  const onChangeHandler = (enteredData) => {
    setSearchValue(enteredData);
    onSearchChange(enteredData);
  };

  // Fetch and set default search value when component mounts
  useEffect(() => {
    const fetchDefaultSearch = async () => {
      try {
        const citiesList = await fetchCities('Manali');

        // Ensure citiesList.data is an array and contains the expected data
        if (Array.isArray(citiesList.data)) {
          const manaliCity = citiesList.data.find((city) => city.name === 'Manali');
          
          if (manaliCity) {
            setSearchValue({
              value: `${manaliCity.latitude} ${manaliCity.longitude}`,
              label: `Manali, ${manaliCity.countryCode}`,
            });
            onSearchChange({
              value: `${manaliCity.latitude} ${manaliCity.longitude}`,
              label: `Manali, ${manaliCity.countryCode}`,
            });
          }
        } else {
          console.error('Invalid data format from fetchCities');
        }
      } catch (error) {
        console.error('Error fetching default search:', error);
      }
    };

    fetchDefaultSearch();
  }, [onSearchChange]);

  return (
    <AsyncPaginate
      placeholder="Search for cities"
      debounceTimeout={600}
      value={searchValue}
      onChange={onChangeHandler}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
