import React from 'react'
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

class AccessAccount extends React.Component {

    constructor(){
        const admin = require('firebase-admin');
    if (!admin.apps.length) {
        admin.initializeApp();
    }
    

    const db = admin.firestore();

    //Add data
    const docRef = db.collection('users').doc('alovelace');
    var data = {
        first: 'Ada',
        last: "Lovelace",
        born: 1815
    };
    const add = async function (data) {

        await docRef.set({
            first: data.first,
            last: data.last,
            born: data.born,
        });
    }

    const read = async function () {
        const snapshot = await db.collection('users').get();
        snapshot.forEach((doc) => {
            console.log(doc.id, '=>', doc.data());
        });
    }
    }
    

  


    render(){
        return (
            <div>
    
            </div>
        )
    }
    
}

export default AccessAccount
