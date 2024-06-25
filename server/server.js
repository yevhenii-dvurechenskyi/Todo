const express = require('express');
const mongoose = require('mongoose');
const TodoItem = require('./todoItem');

const app = express();
const PORT = process.env.PORT || 3000;

// Підключення до бази даних MongoDB Atlas
mongoose.connect('mongodb+srv://Skif:SkifLord123@cluster0.34wdge0.mongodb.net/TodoServer?retryWrites=true&w=majority');
const db = mongoose.connection;

// Обробник помилок з'єднання з базою даних
db.on('error', console.error.bind(console, 'Помилка підключення до бази даних:'));
db.once('open', () => console.log('З\'єднання з базою даних встановлено'));



// Розбір тіла запиту
app.use(express.json());

// Middleware для додавання CORS-заголовків
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Дозволяємо доступ з будь-якого джерела
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Дозволяємо методи запитів
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Дозволяємо заголовки запитів
  next();
});


// Метод POST для надсилання масиву todoItem в базу даних
app.post('/api/TodoArray', async (req, res) => {
  try {
      const todoItems = req.body;
      await TodoItem.deleteMany({}); // Очищаємо колекцію перед додаванням нових елементів
      await TodoItem.insertMany(todoItems);
      res.status(201).send('Дані успішно додані до бази даних.');
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});

// Метод GET для отримання масиву todoItem з бази даних
app.get('/api/TodoArray', async (req, res) => {
  try {
      const todoItems = await TodoItem.find();
      res.json(todoItems);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});


// Прослуховування запитів на порту PORT
app.listen(PORT, () => console.log(`Сервер запущено на порті ${PORT}`));










