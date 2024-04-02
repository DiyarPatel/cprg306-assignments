// Import necessary functions from firebase.js
import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

// Function to retrieve all items for a specific user from Firestore
export async function getItems(userId) {
    const items = [];
    // Query the items subcollection under the user's document
    const q = query(collection(db, `users/${userId}/items`));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        // For each document in the items subcollection, add an object to the items array
        items.push({ id: doc.id, data: doc.data() });
    });

    return items;
}

// Function to add a new item to a specific user's list of items in Firestore
export async function addItem(userId, item) {
    try {
        // Reference the items subcollection under the user's document
        const itemsCollection = collection(db, `users/${userId}/items`);
        // Add the item to the items subcollection
        const docRef = await addDoc(itemsCollection, item);
        return docRef.id; // Return the id of the newly created document
    } catch (error) {
        console.error("Error adding document: ", error);
        return null;
    }
}
