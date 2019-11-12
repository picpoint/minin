const path = require('path');

console.log(path.basename(__filename)); // указывает базовое имя файла
console.log(path.basename(__dirname));  // указывает базовое имя директории
console.log(path.dirname(__filename));  // указывает полный путь до файла
console.log(path.extname(__filename));  // указывает расширение файла
console.log(path.parse(__filename));    // выводит объект парсинга к файлу
console.log(path.join(__dirname, 'test', 'about.html'));	// соединяет путь к файлу и выводит полный путь
console.log(path.join(__dirname, '../', 'second.html'));
console.log(path.resolve(__dirname));	// позволяет работать с относительными и обсалютными путями