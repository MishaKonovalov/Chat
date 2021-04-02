import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

export const Context = createContext(null)

const firebaseConfig = {
    apiKey: 'AIzaSyDO0lX2EC_5ppmBrIXaf-FCYv49t0MpUdY',
    authDomain: 'chat-9f27a.firebaseapp.com',
    projectId: 'chat-9f27a',
    storageBucket: 'chat-9f27a.appspot.com',
    messagingSenderId: '476434959025',
    appId: '1:476434959025:web:d72fed1ec9078fa91b7090',
    measurementId: 'G-TWGYSW77ME',
}

firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
    <Context.Provider
        value={{
            firebase,
            auth,
            firestore,
        }}
    >
        <App />
    </Context.Provider>,
    document.getElementById('root')
)
