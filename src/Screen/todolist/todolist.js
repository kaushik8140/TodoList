import React, {Component} from 'react';
import {View, Image, ScrollView, Text} from 'react-native';
import {connect} from 'react-redux';
import {styles} from './styles';
import {Add, Remove} from '../../../store/actions/todolist/actions';
import firestore from '@react-native-firebase/firestore';
import {TodolistInput} from './todolistInput';
import {TodoListItems} from './todolistIem';
import FormButton from '../../CustomComponent/FormButtom';
import {logoutUser} from '../../../store/actions/session/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getValue: '',
      newarray:[],
    };
  }

  onAddTodo = async text => {
    const uid = await AsyncStorage.getItem('Session_uid');
    this.props.onAdd(uid, text, this.props.todos);
  };

  onRemoveTodo = async index => {
    const uid = await AsyncStorage.getItem('Session_uid');
    this.props.onRemove(uid, index, this.props.todos);
  };

  onButtonPressLogout = async () => {
    await AsyncStorage.clear();
    this.props.logout();
    console.log('logout');
  };

  componentDidMount() {
    AsyncStorage.getItem('Session_uid').then(value => {
      this.setState({getValue: value});

      // GET DATA FROM FIREBASE SERVER

      firestore()
        .collection('users')
        .doc(this.state.getValue)
        .get()
        .then(data => {
          this.setState({newarray:data.data()})
          console.log('Total users:>>>>>>>>>>>>>>>> ', data.data());
          // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",this.state.newarray)
        });
    });
   
  }

  render() {
    const {todos} = this.props;

    return (
      <ScrollView>
        <View style={styles.container}>
          <TodolistInput
            placeholder={'Type a to do, what you will learn?'}
            onSubmitEditing={this.onAddTodo}
          />

          <TodoListItems list={todos} onPressItem={this.onRemoveTodo} />
          <View style={{alignItems: 'center'}}>
            <FormButton
              title={'LOGOUT'}
              backgroundColor={'#FF1493'}
              onPress={this.onButtonPressLogout}
            />
            <Text>{this.state.getValue}</Text>
            {/* <Text>{this.state.newarray}</Text> */}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todolistReducer.todos,
  user: state?.sessionReducer?.user,
});

const mapDispatchToProps = {
  onAdd: Add,
  onRemove: Remove,
  logout: logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
