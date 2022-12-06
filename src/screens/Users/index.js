import { View, Text, FlatList } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import useAxios from 'axios-hooks';

const USER_URL = 'https://jsonplaceholder.typicode.com/users';

const Users = () => {
  const [{ data: users, error, loading }] = useAxios({
    url: USER_URL,
    // method: 'post',
    // data: {}
  });

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
