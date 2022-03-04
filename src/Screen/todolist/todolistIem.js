import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import {styles} from './styles';

export class TodoListItems extends React.Component {
  renderItem = (text, i) => {
    const {onPressItem,onPressEdit} = this.props;
    
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{text}</Text>
        {/* <TouchableOpacity onPress={() => onPressEdit(i)} key={i}>
        <Text>EDIT</Text>
        </TouchableOpacity> */}
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









// import React, {Component} from 'react';
// import {View, Image, ScrollView,Text} from 'react-native';
// import {connect} from 'react-redux';
// import {styles} from './styles';
// import {Add, Remove, Update} from '../../../store/actions/todolist/actions';
// import firestore from '@react-native-firebase/firestore';
// import {TodolistInput} from './todolistInput';
// import {TodoListItems} from './todolistIem';
// import FormButton from '../../CustomComponent/FormButtom';
// import {logoutUser} from '../../../store/actions/session/actions';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// class TodoList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // getValue: '',
//     };
//   }

//   onAddTodo = async(text) => {
//     const uid  = await AsyncStorage.getItem('Session_uid');  
//     this.props.onAdd(uid, text)
//   }

//   onRemoveTodo = async(index) => {
//     const uid  = await AsyncStorage.getItem('Session_uid');  
//     this.props.onRemove(uid, index)
//   }
 
//   onUpdateTodo = index => this.props.onUpdate(this.props.user.uid, index);
//   onButtonPressLogout = async () => {
//     this.props.logout();
//     await AsyncStorage.clear();
   
//     console.log('logout');
//   };

  



//   componentDidMount() {
   
// }

//   render() {
//     const {todos} = this.props;

//     return (
//       <ScrollView>
//         <View style={styles.container}>
//           <TodolistInput
//             placeholder={'Type a to do, what you will learn?'}
//             onSubmitEditing={this.onAddTodo}
//           />

//           <TodoListItems
//             list={todos}
//             onPressItem={this.onRemoveTodo}
//             onPressEdit={this.onUpdateTodo}
//           />
//           <View style={{alignItems: 'center'}}>
//             <FormButton
//               title={'LOGOUT'}
//               backgroundColor={'#FF1493'}
//               onPress={this.onButtonPressLogout.bind(this)}
//             />
           
//           </View>
//         </View>
//       </ScrollView>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   todos: state.todolistReducer.todos,
//   user: state?.sessionReducer?.user,
// });

// const mapDispatchToProps = {
//   onAdd: Add,
//   onRemove: Remove,
//   onUpdate: Update,
//   logout: logoutUser,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);





