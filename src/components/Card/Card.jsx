import React, { useState } from 'react';
import './Card.scss';

const cards = [
  {
    image: './img1.png',
    title: 'Fig. 1 (plant)',
    text: 'Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.',
  },
  {
    image: './img2.png',
    title: 'Fig. 2 (flower)',
    text: 'Прежде всего, синтетическое тестирование влечет за собой процесс внедрения и модернизации условий.',
  },
  {
    image: './img3.png',
    title: 'Fig. 3 (leaf)',
    text: 'Лишь непосредственные участники прогресса неоднозначны и будут в равной степени предоставлены сами себе для работы.',
  },
  {
    image: './img4.png',
    title: 'Fig. 4 (wood)',
    text: 'Базовый вектор развития не даёт нам иного выбора, кроме определения новых предложений.',
  },
  {
    image: './img4.png',
    title: 'Fig. 4 (wood)',
    text: 'Базовый вектор развития не даёт нам иного выбора, кроме определения новых предложений.',
  },
  {
    image: './img1.png',
    title: 'Fig. 1 (plant)',
    text: 'Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.',
  },
  {
    image: './img2.png',
    title: 'Fig. 2 (flower)',
    text: 'Прежде всего, синтетическое тестирование влечет за собой процесс внедрения и модернизации условий.',
  },
  {
    image: './img3.png',
    title: 'Fig. 3 (leaf)',
    text: 'Лишь непосредственные участники прогресса неоднозначны и будут в равной степени предоставлены сами себе для работы.',
  },
  {
    image: './img1.png',
    title: 'Fig. 1 (plant)',
    text: 'Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.',
  },
  {
    image: './img4.png',
    title: 'Fig. 4 (wood)',
    text: 'Базовый вектор развития не даёт нам иного выбора, кроме определения новых предложений.',
  },
  {
    image: './img2.png',
    title: 'Fig. 2 (flower)',
    text: 'Прежде всего, синтетическое тестирование влечет за собой процесс внедрения и модернизации условий.',
  },
  {
    image: './img3.png',
    title: 'Fig. 3 (leaf)',
    text: 'Лишь непосредственные участники прогресса неоднозначны и будут в равной степени предоставлены сами себе для работы.',
  },
];

const Card = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCards = cards.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(cards.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="card">
      <div className="container">
        <div className="card__wrapper">
          <div className="card__boxs">
            {currentCards.map((card, index) => (
              <div className="card__box" key={index}>
                <img src={card.image} alt={card.title} className="card__image" />
                <div className="card__content">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                <button className="card__btn">Подробнее</button>
                </div>
              </div>
            ))}
          </div>
          <div className="card__pagination">
            <button
              className="card__pagination-btn"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              <img src="/arrow-left.svg" alt="" />
            </button>
            <span className="card__pagination-info">
              {currentPage} / {totalPages}
            </span>
            <button
              className="card__pagination-btn"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <img src="/arrow-right.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
