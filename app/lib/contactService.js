'use client';

import { ref, onValue, set } from 'firebase/database';
import { getDatabase } from './firebase';

const db = getDatabase();
const contactRef = ref(db, 'contact');

export function subscribeContactInfo(callback) {
  return onValue(contactRef, (snapshot) => {
    const value = snapshot.val();
    callback(value || {});
  });
}

export function saveContactInfo(data) {
  return set(contactRef, data);
}
