import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../contex/blogContext';
import { EvilIcons, Feather } from '@expo/vector-icons'

const indexScreen = ({ navigation }) => {
    const { state, getBlogPost, deleteBlog } = useContext(Context);

    useEffect(() => {
        getBlogPost();

        const listener = navigation.addListener('didFocus', () => {
            getBlogPost();
        });

        return ()=>{
            listener.remove();
        }
    }, [])


    return (
        <View>
            {/* <Button title="Add post" onPress={() => navigation.navigate('Create')} /> */}
            <FlatList
                data={state}
                keyExtractor={blog => blog.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                            <View style={Styles.row}>
                                <Text style={Styles.title}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => deleteBlog(item.id)}>
                                    <EvilIcons style={Styles.icon} name="trash" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}

indexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerLeft:
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" style={Styles.plus} />
            </TouchableOpacity>
    };
};

const Styles = StyleSheet.create({
    row: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'grey',
        marginTop: 10,
    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 30
    },
    plus: {
        fontSize: 30,
        marginLeft: 10
    }
});

export default indexScreen;