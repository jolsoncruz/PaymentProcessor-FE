import firebase from "./firebase";

const database = firebase.database();

// Function to add a card to the database
export const addCard = (cardData) => {
  return database.ref("cards").push(cardData);
};

// Function to get all cards from the database
export const getAllCards = () => {
  return database.ref("cards").once("value");
};

// Function to delete a card from the database
export const deleteCard = (cardId) => {
  return database.ref(`cards/${cardId}`).remove();
};
