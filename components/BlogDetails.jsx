// BlogDetail.js
import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { PostContext } from '../app/postContext';

const BlogDetail = ({ route }) => {
  const { post } = route.params;
  const { addComment } = useContext(PostContext);
  const [comment, setComment] = useState('');

  const handleAddComment = () => {
    if (comment) {
      addComment(post.id, { id: Date.now(), text: comment });
      setComment('');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>{post.title}</Text>
      <Text style={{ marginVertical: 10 }}>{post.content}</Text>
      <FlatList
        data={post.comments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text style={{ marginVertical: 5 }}>{item.text}</Text>}
      />
      <TextInput
        placeholder="Add a comment"
 value={comment}
        onChangeText={setComment}
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginVertical: 10 }}
      />
      <Button title="Submit Comment" onPress={handleAddComment} />
    </View>
  );
};

export default BlogDetail;