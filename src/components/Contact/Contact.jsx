import React, { useState } from "react";
import axios from "axios";
import "./Contact.scss";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Here is your toast.");

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = "7920732551:AAGXbUBaAtVE1jilceX9E92ftKsXYC6dsYU";
    const chatId = "-4573124775";
    const message = `Имя: ${formData.name}\nEmail: ${formData.email}`;

    try {
      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chatId,
        text: message,
      });
    } catch (error) {
      console.error("Ошибка отправки сообщения в Telegram:", error);
    }
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="contact__wrapper">
          <div className="contact__content">
            <h1>Помочь проекту</h1>
            <p>
              Равным образом, экономическая повестка сегодняшнего дня не даёт
              нам иного выбора, кроме определения прогресса профессионального
              сообщества. Как принято считать, элементы политического процесса
              рассмотрены исключительно в разрезе маркетинговых и финансовых
              предпосылок.
            </p>
          </div>
          <form className="contact__form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Имя"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <button onClick={notify} type="submit" className="contact__btn">
              Отправить
            </button>
            <Toaster />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
