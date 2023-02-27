import React, { useState } from 'react'
import { Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'

export default function ListItem({ item, deleteItem }) {
    const [itemComplete, setItemComplete] = useState(false)

    return (

        <TouchableOpacity style={itemComplete?styles.listItemComplete:styles.listItem} onPress={() => setItemComplete(itemComplete => !itemComplete)}>

            <Text style={styles.listItemText}> <Text style={itemComplete ? styles.listItemIndicatorComplete : styles.listItemIndicator}>●&nbsp;</Text> <Text style={itemComplete ? styles.lineThrough : ''}>{item.text}</Text></Text>
            <TouchableOpacity onPress={() => Alert.alert('ELIMINAR', '¿Eliminar tarea?', [
                { text: 'Cancelar' },
                { text: 'Eliminar', onPress: () => deleteItem(item.id) },
            ])}><Text style={styles.listItemDelete}>X</Text></TouchableOpacity>

        </TouchableOpacity>

    )
}


const styles = StyleSheet.create({
    listItem: {
        color: 'white',
        fontSize: 40,
        marginBottom: 10,
        backgroundColor: 'slateblue',
        borderRadius: 4,
        padding: 8,
        paddingLeft: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'darkslateblue',
        borderStyle: 'solid',
        borderWidth: 2
    },
    listItemComplete: {
        color: 'white',
        fontSize: 40,
        marginBottom: 10,
        backgroundColor: 'slateblue',
        borderRadius: 4,
        padding: 8,
        paddingLeft: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'darkslateblue',
        borderStyle: 'dotted',
        borderWidth: 2
    },
    listItemIndicator: {
        color: '#1a1a1a',
        fontWeight: 'bold',
        fontSize: 20,
    },
    listItemIndicatorComplete: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    listItemText: {
        flex: 1,
        fontSize: 20,
        color: 'white'
    },
    listItemDelete: {
        fontWeight: 'bold',
        color: 'darkred',
        fontSize: 20,
    },
    lineThrough: {
        textDecorationLine: 'line-through',
    }
})