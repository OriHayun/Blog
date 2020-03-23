import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native'

const blogPostForm = ({ onSubmit, initialValues, navigation, navScreen }) => {

    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);


    return (
        <View>
            <Text style={styles.lable}>Enter Title</Text>
            <TextInput
                style={styles.Input}
                value={title}
                onChangeText={text => setTitle(text)}
            />

            <Text style={styles.lable}>Enter conent</Text>
            <TextInput
                style={styles.Input}
                value={content}
                onChangeText={text => setContent(text)}
            />
            <Button
                title="Save Blog Post"
                onPress={() => {
                    onSubmit(title, content, () => navigation.pop())
                }}
            />
        </View>
    );
}

blogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    Input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    lable: {
        fontSize: 20,
        marginBottom: 5,
        marginRight: 5
    }
});

export default blogPostForm;
