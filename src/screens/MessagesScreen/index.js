import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';

import StatusList from 'src/components/StatusList';

import styles from './styles';

export default class MessagesScreen extends Component {
    onPress = () => {
        const { navigation } = this.props;
        navigation.navigate('CameraScreen');
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusList />
                <Button
                    icon="add-a-photo"
                    mode="contained"
                    color='#3F1D75'
                    onPress={() => this.props.navigation.navigate('ChatScreen')}
                >
                    Add Experience!
                </Button>
            </View>
        );
    }
}

MessagesScreen.propTypes = {
    navigation: PropTypes.object
};
