import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import {styles} from './styles';

export class TodoListItems extends React.Component {
  renderItem = (text, i) => {
    const {onPressItem, onPressEdit} = this.props;

    return (
      <View key={"todo_item" + i} style={styles.item}>
        <Text style={styles.text}>{text}</Text>

        <TouchableOpacity onPress={() => onPressItem(i)} key={i}>
          <Image
            source={require('../../../assets/delete.png')}
            style={{tintColor: '#ffffff'}}
          />
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const {list} = this.props;

    return <View>{list.map(this.renderItem)}</View>;
  }
}
