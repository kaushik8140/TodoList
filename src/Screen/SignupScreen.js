import React, {useContext, useState} from 'react';
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
// import { Signup } from '../../store/actions';
import {signupUser} from '../../store/actions/session/actions';

export default function SignupScreen({navigation}) {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conformpassword, setConformPassword] = useState('');
  const [errorusername, setErrorUsername] = useState('');
  const [erroremail, setErrorEmail] = useState('');
  const [errorpassword, setErrorPassword] = useState('');
  const [errorconformpassword, setErrorconformpassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmitPress = () => {
    if (!username) {
      setErrorUsername('Please Enter UserName');
      return false;
    }

    if (!email) {
      setErrorEmail('Please Enter Email');
      setErrorUsername(false);
      return false;
    }

    if (!password) {
      setErrorPassword('Please Enter Password');
      setErrorEmail(false);
      setErrorUsername(false);
      return false;
    }

    if (!conformpassword) {
      setErrorconformpassword('Please Enter ConformPassword');
      setErrorPassword(false);
      setErrorEmail(false);
      setErrorUsername(false);
      return false;
    }

    setErrorEmail(false);
    setErrorPassword(false);
    setErrorconformpassword(false);
    setErrorUsername(false);

    dispatch(signupUser(email, password));
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
            placeholderText={'Username'}
            placeholdertextcolor="#003f5c"
            onchange={username => setUserName(username)}
          />
          {errorusername != '' ? (
            <Text style={styles.errorTextStyle}>{errorusername}</Text>
          ) : null}
        </View>

        <View style={styles.inputView}>
          <FormInput
            style={styles.TextInput}
            placeholderText={'Email address'}
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

        <View style={styles.inputView}>
          <FormInput
            style={styles.TextInput}
            placeholderText={'Conform Password'}
            placeholdertextcolor="#003f5c"
            onchange={conformpassword => setConformPassword(conformpassword)}
          />
          {errorconformpassword != '' ? (
            <Text style={styles.errorTextStyle}>{errorconformpassword}</Text>
          ) : null}
        </View>

        {/* <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity> */}

        <FormButton
          title={'REGISTER'}
          backgroundColor={'#FF1493'}
          onPress={() => {
            handleSubmitPress();
            // register(email,password);
          }}
        />

        <Text
          style={styles.registerTextStyle}
          onPress={() => navigation.navigate('LoginScreen')}>
          Already Registered? Click here to login
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: '90%',
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
