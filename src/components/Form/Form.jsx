import React from 'react';
import styles from './form.module.scss';

const Form = () => {
  return (
    <div className={styles.form__container}>
      <div className={styles.form__forma}>
        <div>
          <h3>Оставьте заявку на бесплатную консультацию</h3>
          <p>Мы перезвоним вам в ближайшее время</p>
        </div>
        <form action="">
          <input type="name" placeholder="Ваше имя" />
          <input type="tell" placeholder="+7 (___)___-__-__" />
          <button>Отправить заявку</button>
          <span>
            Нажимая кнопку, вы даете согласие на <a href=""> обработку персональных данных</a>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Form;
