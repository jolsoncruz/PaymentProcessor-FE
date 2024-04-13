import { useEffect, useState } from "react";
import Card from "./Card";
import CardForm from "./CardForm";
import { addCard, getAllCards, deleteCard } from "../dbFunctions";

function Home() {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});

  useEffect(() => {
    loadCards();
  }, []);

  const loadCards = async () => {
    const snapshot = await getAllCards();
    const cardList = [];
    snapshot.forEach((childSnapshot) => {
      cardList.push({
        id: childSnapshot.key,
        ...childSnapshot.val(),
      });
    });
    setCards(cardList);
  };

  const handleFormSubmit = async (formData) => {
    await addCard(formData);
    loadCards();
  };

  const handleCardClick = (index) => {
    setSelectedCard(cards[index]);
  };

  const handleDelete = async (cardId) => {
    await deleteCard(cardId);
    loadCards();
  };

  return (
    <div className="mx-64">
      <div className="p-20 bg-slate-100 text-4xl font-medium text-center">
        Payment Detail Register
      </div>
      <div className="flex">
        <div className="w-1/2 m-5">
          <CardForm
            onFormSubmit={handleFormSubmit}
            selectedCard={selectedCard}
          />
        </div>
        <div className="w-1/2 m-5 space-y-4">
          {cards.map((card) => (
            <Card
              key={card.id}
              cardData={card}
              onClick={() => handleCardClick(card.id)}
              onDelete={() => handleDelete(card.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
