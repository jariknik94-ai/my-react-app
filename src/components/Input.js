// Импорт React
import React from 'react';

// Подключаем стили инпута
import './Input.css';

// forwardRef нужен, чтобы App.js мог управлять input напрямую
const Input = React.forwardRef((props, ref) => {
  return (
    // input получает ref и все переданные props
    <input ref={ref} className="custom-input" {...props} />
  );
});

// Экспорт компонента
export default Input;