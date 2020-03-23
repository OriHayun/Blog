import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../contex/blogContext';
import { EvilIcons } from '@expo/vector-icons'

const showScreen = ({ navigation }) => {
    const id = navigation.getParam('id');

    const { state } = useContext(Context)
    const blogPost = state.find((blogpost) => blogpost.id === id)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{blogPost.title}</Text>
            <Text style={styles.content}>{blogPost.content}</Text>
        </View>
    );
}

showScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight:
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Edit', { id: navigation.getParam('id') })
                }
            >
                <EvilIcons name="pencil" style={styles.edit} />
            </TouchableOpacity>
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        paddingBottom: 15,
        marginTop: 20,
    },
    content: {
        fontSize: 26,
        paddingLeft: 10,
        padding: 50,
        alignSelf: 'flex-end'

    },
    edit: {
        fontSize: 30,
        marginLeft: 10
    }
});


export default showScreen;

