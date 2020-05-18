import React from 'react';
import { View, StyleSheet} from 'react-native';

import Colors from '../constants/colors';

const Card = props => {
    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: "80%",
        maxWidth: 450,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        shadowOpacity: 0.16,
        backgroundColor: Colors.white,
        padding: 10,
        borderRadius: 10,
      },
});

export default Card;