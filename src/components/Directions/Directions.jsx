import React from 'react';
import styles from './directions.module.scss';
import Hawaii from '../../assets/imgHawaii.png';

const Directions = () => {
  return (
    <div className={styles.directions__container}>
      <div className={styles.directions__left}>
        <img src={Hawaii} alt="" />
        <sub>
          10-24 <span>апреля</span>
        </sub>
        <div>
          <p>Большое ущелье на острове Гавайи</p>
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
      <div className={styles.directions__right}>
        <h2>Посмотрите все направления туров</h2>
        <p>
          Берега океанов и дикие пляжи с редкими породами деревьев. Местная архитектура и
          первозданный вид дикой природы
        </p>
        <button>Смотреть все</button>
      </div>
    </div>
  );
};

export default Directions;
