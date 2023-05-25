import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from "./styles";

function Menu() {

    const navigation = useNavigation<DrawerNavigationProp<any>>();

    return (
        <View style={styles.containerMenu}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Icon name="menu" style={styles.iconsMenu} />
            </TouchableOpacity>
            <View style={styles.logoMenuContent}>
                <Image style={styles.logoMenu} source={require('../../assets/images/LogoMenu.png')} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                <Icon name="bell" style={styles.iconsMenu} />
            </TouchableOpacity>
        </View>
    )
}

export default Menu;