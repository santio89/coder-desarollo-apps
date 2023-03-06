import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native'
import Constants from '../styles/Constants'

export default function ListItem({ storeData, items, setItems, item, modalVisible, setModalVisible }) {
    const [itemComplete, setItemComplete] = useState(item.completed);


    useEffect(() => {
        item.completed = itemComplete
        setItems(items)
        storeData(items)
    }, [itemComplete])

    return (
        <View style={[styles.listItemContainer, modalVisible.active && modalVisible.id === item.id && styles.listItemGray]}>
            <TouchableOpacity style={itemComplete ? styles.listItemComplete : styles.listItem} onPress={() => setItemComplete(itemComplete => !itemComplete)}>

                <Text style={styles.listItemText}> <Text style={itemComplete ? styles.listItemIndicatorComplete : styles.listItemIndicator}>●&nbsp;</Text> <Text style={itemComplete ? styles.lineThrough : ''}>{item.text}</Text></Text>
                <TouchableOpacity onPress={() => setModalVisible({active: true, id: item.id})}>
                    <Text style={styles.listItemDelete}>X</Text>
                </TouchableOpacity>


            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    listItemContainer: {
        flex: 1
    },
    listItem: {
        color: Constants.colorWhite,
        fontSize: 40,
        marginBottom: 10,
        backgroundColor: Constants.colorPrimary,
        borderRadius: 4,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: Constants.colorPrimaryDark,
        borderStyle: 'solid',
        borderWidth: 2
    },
    listItemGray: {
        filter: 'grayscale(1)'
    },  
    listItemComplete: {
        color: Constants.colorWhite,
        fontSize: 40,
        marginBottom: 10,
        backgroundColor: Constants.colorPrimary,
        borderRadius: 4,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: Constants.colorPrimaryDark,
        borderStyle: 'dotted',
        borderWidth: 2
    },
    listItemIndicator: {
        color: Constants.colorDark,
        fontWeight: 'bold',
        fontFamily: Constants.fontPrimaryBold,
        fontSize: Constants.fontMd,
        scale: .8,
    },
    listItemIndicatorComplete: {
        color: Constants.colorWhite,
        fontWeight: 'bold',
        fontFamily: Constants.fontPrimaryBold,
        fontSize: Constants.fontMd,
    },
    listItemText: {
        flex: 1,
        fontSize: Constants.fontMd,
        color: Constants.colorWhite,
        wordBreak: 'break-word',
        fontFamily: Constants.fontPrimary
    },
    listItemDelete: {
        fontWeight: 'bold',
        color: Constants.colorRed,
        fontSize: Constants.fontMd,
        padding: 8,
        scale: 1.4,
        fontFamily: Constants.fontPrimaryBold
    },
    lineThrough: {
        textDecorationLine: 'line-through',
    },
})