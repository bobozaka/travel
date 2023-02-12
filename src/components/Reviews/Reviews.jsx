import React from 'react';
import styles from './reviews.module.scss';
import Hawaii from '../../assets/Hawaii.png';

const Reviews = () => {
  return (
    <div className={styles.reviews__container}>
      <div className={styles.reviews__left}>
        <h2>Что пишут участники наших путешествий</h2>
        <p>
          87% участников приходят по личной рекомендации от друзей. А каждый 4-ый путешествует с
          нами больше двух раз!
        </p>
        <button>Читать отзывы</button>
      </div>
      <div className={styles.reviews__right}>
        <img src={Hawaii} alt="" />
        <sub>
          Отзыв <span>Елена Иванова</span>
        </sub>
        <div>
          <p>Пожалуй, это был самый лучший отпуск в моей жизни...</p>
          <svg
            width="31"
            height="16"
            viewBox="0 0 31 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9H30V7H0V9Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
