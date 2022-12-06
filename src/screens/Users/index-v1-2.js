import { View, Text, FlatList } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const USER_URL = 'https://jsonplaceholder.typicode.com/users';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(data => data.json())
    //   .then(jsonData => {
    //     // console.log(jsonData);
    //     setUsers(jsonData);
    //   });
    // axios.get(USER_URL).then(data => {
    //   setUsers(data);
    // });
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const getUsers = useCallback(async ()=>{
  // try {
  //       setIsLoading(true);
  //       const data = await axios.get(USER_URL);
  //       setIsLoading(false);
  //       setUsers(data);
  //     } catch (err) {
  //       console.log(error);
  //     }
  // }, [])

  async function getUsers() {
    try {
      setIsLoading(true);
      console.log('fetching ...');
      // axios.defaults.baseURL = 'https://baseurl.com/'
      axios.interceptors.request.use(config => {
        config.headers.authToken = 'token';
        return config;
      });
      // axios.interceptors.response
      axios.interceptors.response.use(response => {
        if (response.status !== 'ok') {
          alert('error');
        }
        return response;
      });
      const data = await axios.get('users');
      console.log(data);
      setIsLoading(false);
      setUsers(data);
    } catch (err) {
      console.log(error);
      setError(err);
    }
  }

  return (
    <FlatList
      data={users}
      renderItem={({ item }) => (
        <View>
          <Text>{item.name}</Text>
          <Text>{item.username}</Text>
        </View>
      )}
    />
  );
};

export default Users;
