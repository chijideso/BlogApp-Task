// BlogList.js
import React, { useContext } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import { PostContext } from '../app/postContext';

const BlogList = ({ navigation }) => {
  const { posts } = useContext(PostContext);

  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('BlogDetail', { post: item })}>
            <Text style={{ fontSize: 20, margin: 10 }}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Add New Post" onPress={() => navigation.navigate('AddPost')} />
    </View>
  );
};

export default BlogList;