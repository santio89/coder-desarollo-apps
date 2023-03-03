import React, { useEffect, useState } from 'react'
import { FlatList, TextInput, View, StyleSheet, Button } from 'react-native'
import 'react-native-get-random-values'; /* for uuid */
import { v4 as uuidv4 } from 'uuid';
import ListItem from './ListItem';
import { storageSetItem, storageGetItem } from './AsyncStorage';

export default function ToDoList() {
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [input, setInput] = useState("")
    const [items, setItems] = useState([])

    const storeData = async (items) => {
        try {
            await storageSetItem("toDoList", JSON.stringify(items));
        } catch (error) {
            console.log("error saving data to storage")
        }
    };

    const retrieveData = async () => {
        try {
            const value = await storageGetItem('toDoList');
            if (value !== null) {
                setItems(JSON.parse(value))
            }
        } catch (error) {
            console.log("error retrieving data from storage")
        }
    };


    const addItem = (item) => {
        if(item.text === ""){return} 
        setItems((oldItems) => [...oldItems, item])
    }

    const deleteItem = (id) => {
        setItems((oldItems) => oldItems.filter(item => item.id != id))
    }


    useEffect(() => {
        retrieveData();
    }, [])

    useEffect(() => {
        input != '' ? setBtnDisabled(false) : setBtnDisabled(true)
    }, [input])

    useEffect(() => {
        storeData(items)
    }, [items])


    return (
        <>
            <View style={styles.inputContainer}>
                <TextInput value={input} onChangeText={input => setInput(input)} onSubmitEditing={() => { addItem({ id: uuidv4(), text: input }); setInput('') }} placeholder='NUEVA TAREA' placeholderTextColor="#808080" style={styles.input} />
                <Button title='AGREGAR' color='slateblue' disabled={btnDisabled} onPress={() => { addItem({ id: uuidv4(), text: input }); setInput('') }} />
            </View>

            <FlatList style={styles.listItemContainer}
                data={items}
                renderItem={({ item }) => (


                    <ListItem item={item} deleteItem={deleteItem} />

                )}
                keyExtractor={item => item.id}
            />
        </>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '90%',
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 40,
        maxWidth: 800,
    },
    input: {
        borderBottomColor: 'slateblue',
        borderBottomWidth: 2,
        color: 'white',
        flex: 1,
        marginRight: 10,
        fontSize: 20,
        padding: 4,
    },
    listItemContainer: {
        width: '90%',
        padding: 10,
        maxWidth: 800,
    }
})