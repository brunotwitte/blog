import app from 'firebase/app';
import 'firebase/database';
import   'firebase/auth';


  let firebaseConfig = {
            apiKey: "AIzaSyCfcVzsR5uO5a7e_wbkUx047UBbjnFSlh4",
            authDomain: "reactapp-a06da.firebaseapp.com",
            databaseURL: "https://reactapp-a06da.firebaseio.com",
            projectId: "reactapp-a06da",
            storageBucket: "reactapp-a06da.appspot.com",
            messagingSenderId: "750326396763",
            appId: "1:750326396763:web:f2f792f1d86a6669498c7e",
            measurementId: "G-8ENDYFP6NP"
  };
  
class  Firebase{

    constructor(){

        app.initializeApp(firebaseConfig);

    }

    login(email , password){
    return app.auth().signInWithEmailAndPassword(email.password)
    }
    
    async  register (nome, email, password){

         await app.auth().createUserWithEmailAndPAssword(email , password)

         const uid = app.auth().currentUser.uid;

         return app.database().ref('usuarios').child(uid).set({

            nome:nome
         })



     }

     isInitialized(){


        return new Promise(resolve =>{
        app.auth().onAuthStateChanged(resolve);

        })

     }

} 


export default  new Firebase();
