// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BlogList from '../components/BlogList';
import BlogDetail from '../components/BlogDetails';
import AddPost from '../components/Addpost';
import PostProvider from './postContext';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PostProvider>
    {/* <NavigationContainer> */}
      <Stack.Navigator initialRouteName="BlogList">
        <Stack.Screen name="BlogList" component={BlogList} options={{ title: 'Blog Posts' }} />
        <Stack.Screen name="BlogDetail" component={BlogDetail} options={{ title: 'Post Details' }} />
        <Stack.Screen name="AddPost" component={AddPost} options={{ title: 'Add New Post' }} />
      </Stack.Navigator>

  </PostProvider>
  );
};

export default App