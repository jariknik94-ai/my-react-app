// Импорт React для создания компонента
import React from 'react';

// Подключаем стили кнопки
import './Button.css';

// Компонент кнопки, принимает проп onClick
const Button = ({ onClick }) => {
  return (
    // Кнопка с обработчиком клика
    <button className="custom-button" onClick={onClick}>
      Очистить
    </button>
  );
};

// Экспорт компонента для использования в других файлах
export default Button;