import React from "react";
import { StyleSheet, View } from "react-native";

function PesquisaProduto(): React.JSX.Element {
    return (
        <View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex    : 1
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginTop: 10
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
        borderRadius: 5
    },
    itemDetails: {
        marginLeft: 10,
        flex: 1
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 14,
        color: '#666'
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5
    },
    menuList: {
        flexGrow: 1
    },
});

export default PesquisaProduto;