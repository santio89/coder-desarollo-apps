import React, { useEffect, useState } from 'react'
import { FlatList, TextInput, Text, View, StyleSheet, Button } from 'react-native'
import 'react-native-get-random-values'; /* for uuid */
import { v4 as uuidv4 } from 'uuid'; 
import ListItem from './ListItem';

export default function ToDoList() {
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [input, setInput] = useState("")
    const [items, setItems] = useState([])

    const addItem = (item)=>{
        setItems((oldItems)=>[...oldItems, item])
    }

    const deleteItem = (id)=>{
        setItems((oldItems)=>oldItems.filter(item=>item.id!=id))
    }

    useEffect(()=>{
        input != '' ? setBtnDisabled(false) : setBtnDisabled(true)
    }, [input])

    return (
        <>
            <View style={styles.inputContainer}>
            <TextInput value={input} onChangeText={input => setInput(input)} onSubmitEditing={() => { addItem({ id: uuidv4(), text: input }); setInput('') }} placeholder='NUEVA TAREA' placeholderTextColor="#808080" style={styles.input} />
                <Button title='AGREGAR' color='slateblue' disabled={btnDisabled} onPress={()=>{addItem({id: uuidv4(), text: input}); setInput('')}}/>
            </View>

            <FlatList style={styles.listItemContainer}
                data={items}
                renderItem={({item}) => (

                  
                    <ListItem item={item} deleteItem={deleteItem} />

                )}
                keyExtractor={item => item.id}
            />
        </>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 20,
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
        width: '100%',
        padding: 10,
    }
})