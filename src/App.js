// Импортируем React и хук useRef для работы со ссылкой на DOM-элемент
import React, { useRef } from 'react';

// Импортируем компонент Button (наша кастомная кнопка)
import Button from './components/Button';

// Импортируем компонент Input (кастомное поле ввода)
import Input from './components/Input';

// Импортируем библиотеку dayjs для работы с датой и временем
import dayjs from 'dayjs';

// Импортируем axios для выполнения HTTP-запросов к API
import axios from 'axios';

// Главный компонент приложения
function App() {

  // useRef создаёт ссылку на input, чтобы можно было управлять DOM напрямую
  const inputRef = useRef(null);

  // Функция очистки поля ввода
  const handleClear = () => {
    // Проверяем, существует ли input в DOM
    if (inputRef.current) {
      // Очищаем значение input
      inputRef.current.value = '';
    }
  };

  // Получаем текущее время с помощью dayjs и форматируем его
  const now = dayjs().format("YYYY-MM-DD HH:mm:ss");

  // Выполняем GET-запрос к тестовому API (jsonplaceholder)
  axios.get("https://jsonplaceholder.typicode.com/posts/1")
    // Если запрос успешный — выводим данные в консоль
    .then(res => console.log("Данные с API:", res.data))
    // Если произошла ошибка — выводим ошибку в консоль
    .catch(err => console.error("Ошибка запроса:", err));

  // JSX-разметка, которая отображается на странице
  return (
    // Контейнер всего приложения
    <div className="app-container">

      {/* Отображаем текущее время */}
      <p>Текущее время: {now}</p>

      {/* Поле ввода с привязкой ref для управления */}
      <Input ref={inputRef} placeholder="Введите текст..." />

      {/* Кнопка, которая вызывает функцию очистки */}
      <Button onClick={handleClear} />

    </div>
  );
}

// Экспортируем компонент, чтобы он использовался в других файлах
export default App;