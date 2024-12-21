// AddPost.js
import React, { useContext, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { PostContext } from '../app/postContext';

const AddPost = ({ navigation }) => {
  const { addPost } = useContext(PostContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddPost = () => {
    if (title && content) {
      addPost({ id: Date.now(), title, content, comments: [] });
      navigation.goBack();
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Post Title"
        value={title}
        onChangeText={setTitle}
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginVertical: 10 }}
      />
      <TextInput
        placeholder="Post Content"
        value={content}
        onChangeText={setContent}
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginVertical: 10 }}
        multiline
      />
      <Button title="Add Post" onPress={handleAddPost} />
    </View>
  );
};

export default AddPost;