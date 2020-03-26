import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../contex/blogContext';
import BlogPostForm from '../components/blogPostForm';
const createScreen = ({ navigation }) => {

    const { addBlog } = useContext(Context);

    return (
        <BlogPostForm onSubmit={(title, content) =>
            addBlog(title, content, () => navigation.pop())
        }
        />
    );
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


export default createScreen;

