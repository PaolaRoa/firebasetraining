import firebase from 'firebase/app';

export const signOut = async() => {
    try {
        await firebase.auth().signOut();
    } catch (error) {
        throw new Error('Error en el cieree de sesión');
    }
}