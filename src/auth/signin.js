import firebase from 'firebase/app';

//wrapper firebase function to avoid problems when changing vendor
export const signIn = async (email, password) =>
    {   try {
        const result = await firebase.auth().signInWithEmailAndPassword(email, password);
        //
        return{};
        
    } catch (error) {
        throw new Error('Error en el inicio de sesión');
    }
        
    }
