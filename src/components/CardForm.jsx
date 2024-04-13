import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

function CardForm({ onFormSubmit, selectedCard }) {
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    cvc: "",
    expiry: "",
  });

  useEffect(() => {
    if (selectedCard) {
      setFormData(selectedCard);
    }
  }, [selectedCard]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    console.log("ENTERED");
    e.preventDefault();
    try {
      onFormSubmit(formData);
    } catch (error) {
      console.error("Error adding card to database: ", error);
    }
    setFormData({
      name: "",
      cardNumber: "",
      cvc: "",
      expiry: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="sm:col-span-3 space-y-4">
        <div>
          <label
            htmlFor="name"
            className="uppercase text-sm font-medium leading-6 text-gray-900"
          >
            Name on Card
          </label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            id="name"
            value={formData.name}
            required={true}
            className="mt-1 block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="cardNumber"
            className="uppercase text-sm font-medium leading-6 text-gray-900"
          >
            Card Number
          </label>
          <input
            type="text"
            name="cardNumber"
            placeholder="1234 5678 9101 1121"
            id="cardNumber"
            value={formData.cardNumber}
            required={true}
            className="mt-1 block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:pr-1 sm:w-1/2">
            <label
              htmlFor="cvc"
              className="uppercase text-sm font-medium leading-6 text-gray-900"
            >
              Security Code
            </label>
            <input
              type="text"
              name="cvc"
              placeholder="123"
              id="cvc"
              value={formData.cvc}
              required={true}
              className="mt-1 block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:pl-1 sm:w-1/2">
            <label
              htmlFor="expiry"
              className="uppercase text-sm font-medium leading-6 text-gray-900"
            >
              Valid Through
            </label>
            <input
              type="text"
              name="expiry"
              placeholder="01/28"
              id="expiry"
              value={formData.expiry}
              required={true}
              className="mt-1 block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="rounded-md bg-green-600 py-2 w-full text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default CardForm;
