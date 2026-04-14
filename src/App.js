import dayjs from "dayjs";
import axios from "axios";

function App() {
  // Получаем текущее время
  const now = dayjs().format("YYYY-MM-DD HH:mm:ss");

  // Делаем тестовый запрос к API
  axios.get("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => {
      console.log("Данные с API:", response.data);
    })
    .catch(error => {
      console.error("Ошибка:", error);
    });

  return (
    <div style={{ padding: "20px" }}>
      <h1>React работает 🚀</h1>
      <p>Текущее время: {now}</p>
      <p>Открой консоль (F12), чтобы увидеть данные с API</p>
    </div>
  );
}

export default App;