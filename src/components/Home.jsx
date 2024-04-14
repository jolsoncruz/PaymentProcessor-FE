import { useEffect, useState } from "react";
import Card from "./Card";
import CardForm from "./CardForm";
import { wait } from "@testing-library/user-event/dist/utils";

function Home() {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});

  useEffect(() => {
    loadCards();
  }, []);

  const loadCards = () => {
    fetch("http://localhost:8080/card")
      .then((response) => response.json())
      .then((data) => {
        setCards(data.result);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleFormSubmit = async (formData) => {
    try {
      await fetch("http://localhost:8080/card", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      window.location.reload();
    } catch (error) {
      console.error("Error adding card:", error);
    }
  };

  const handleCardClick = (index) => {
    setSelectedCard(cards[index]);
  };

  const deleteCard = async (index) => {
    try {
      await fetch(
        `http://localhost:8080/card/delete?cardNumber=${cards[index].cardNumber}`,
        {
          method: "DELETE",
        }
      );
      loadCards();
    } catch (error) {
      console.error("Error deleting card:", error);
    }
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
          {cards.map((card, index) => (
            <Card
              key={card.cardNumber}
              cardData={card}
              onClick={() => handleCardClick(index)}
              onDelete={() => deleteCard(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
