import React, {useState, useEffect, useReducer} from 'react';

import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import FormButton from '../CustomComponent/FormButtom';
import FormInput from '../CustomComponent/FormInput';
import {useDispatch} from 'react-redux';
// import {Login} from '../../store/actions';
import { loginUser } from "../../store/actions/session/actions"

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erroremail, setErrorEmail] = useState('');
  const [errorpassword, setErrorPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmitPress = () => {
    if (!email) {
      setErrorEmail('please enter Email');

      return false;
    }

    if (!password) {
      setErrorPassword('please enter Password');
      setErrorEmail(false);
      return false;
    }
    setErrorEmail(false);
    setErrorPassword(false);
    dispatch(loginUser(email, password));
    // navigation.navigate('HomeScreen');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../assets/facebook.png')}
        />

        <View style={styles.inputView}>
          <FormInput
            style={styles.TextInput}
            placeholderText={'Email'}
            placeholdertextcolor="#003f5c"
            onchange={email => setEmail(email)}
          />
          {erroremail != '' ? (
            <Text style={styles.errorTextStyle}>{erroremail}</Text>
          ) : null}
        </View>

        <View style={styles.inputView}>
          <FormInput
            style={styles.TextInput}
            placeholderText={'Password'}
            placeholdertextcolor="#003f5c"
            onchange={password => setPassword(password)}
          />
          {errorpassword != '' ? (
            <Text style={styles.errorTextStyle}>{errorpassword}</Text>
          ) : null}
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <FormButton
          title={'LOGIN'}
          backgroundColor={'#FF1493'}
          onPress={() => {
            handleSubmitPress();
          }}
        />

        <Text
          style={styles.registerTextStyle}
          onPress={() => navigation.navigate('SignupScreen')}>
          New Here ? Register
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginBottom: 40,
    marginTop: 10,
  },

  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,

    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#FF1493',
  },
  registerTextStyle: {
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});






// import React, { useState } from 'react'
// import { Image, Text, TextInput, TouchableOpacity, View,StyleSheet} from 'react-native'

// // import { firebase } from '../../firebase/config'

// export default function LoginScreen({navigation}) {
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')

//     const onFooterLinkPress = () => {
//         navigation.navigate('Registration')
//     }

//     const onLoginPress = () => {
//         // firebase
//         //     .auth()
//         //     .signInWithEmailAndPassword(email, password)
//         //     .then((response) => {
//         //         const uid = response.user.uid
//         //         const usersRef = firebase.firestore().collection('users')
//         //         usersRef
//         //             .doc(uid)
//         //             .get()
//         //             .then(firestoreDocument => {
//         //                 if (!firestoreDocument.exists) {
//         //                     alert("User does not exist anymore.")
//         //                     return;
//         //                 }
//         //                 const user = firestoreDocument.data()
//         //                 navigation.navigate('Home', {user: user})
//         //             })
//         //             .catch(error => {
//         //                 alert(error)
//         //             });
//         //     })
//         //     .catch(error => {
//         //         alert(error)
//         //     })
//     }

//     return (
//         <View style={styles.container}>
           
              
//                 <Image
//                     style={styles.logo}
//                     source={require("../../assets/login.png")}
//                 />
//                 <TextInput
//                     style={styles.input}
//                     placeholder='E-mail'
//                     placeholderTextColor="#aaaaaa"
//                     onChangeText={(text) => setEmail(text)}
//                     value={email}
//                     underlineColorAndroid="transparent"
//                     autoCapitalize="none"
//                 />
//                 <TextInput
//                     style={styles.input}
//                     placeholderTextColor="#aaaaaa"
//                     secureTextEntry
//                     placeholder='Password'
//                     onChangeText={(text) => setPassword(text)}
//                     value={password}
//                     underlineColorAndroid="transparent"
//                     autoCapitalize="none"
//                 />
//                 <TouchableOpacity
//                     style={styles.button}
//                     onPress={() => onLoginPress()}>
//                     <Text style={styles.buttonTitle}>Log in</Text>
//                 </TouchableOpacity>
//                 <View style={styles.footerView}>
//                     <Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
//                 </View>
           
//         </View>
//     )
// }




// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center'
// },
// title: {

// },
// logo: {
//     flex: 1,
//     height: 120,
//     width: 90,
//     alignSelf: "center",
//     margin: 30
// },
// input: {
//     height: 48,
//     borderRadius: 5,
//     overflow: 'hidden',
//     backgroundColor: 'white',
//     marginTop: 10,
//     marginBottom: 10,
//     marginLeft: 30,
//     marginRight: 30,
//     paddingLeft: 16
// },
// button: {
//     backgroundColor: '#788eec',
//     marginLeft: 30,
//     marginRight: 30,
//     marginTop: 20,
//     height: 48,
//     borderRadius: 5,
//     alignItems: "center",
//     justifyContent: 'center'
// },
// buttonTitle: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: "bold"
// },
// footerView: {
//     flex: 1,
//     alignItems: "center",
//     marginTop: 20
// },
// footerText: {
//     fontSize: 16,
//     color: '#2e2e2d'
// },
// footerLink: {
//     color: "#788eec",
//     fontWeight: "bold",
//     fontSize: 16
// }
//   });
  