import {writable} from 'svelte/store';
import {onAuthStateChanged, type User} from 'firebase/auth';
import {auth} from '$lib/utils/firebase';

export const user = writable<User | null>(auth.currentUser);
console.log('auth', auth.currentUser)

onAuthStateChanged(auth, (currentUser) => {
    user.set(currentUser);
});
