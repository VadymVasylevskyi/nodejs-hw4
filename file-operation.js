const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const fileName = process.env.FILENAME;

const content = 'Hello World!S';

fs.writeFile(fileName, content, (err) => {
    if (err) {
        console.error('Ошибка при создании файла:', err);
        return;
    }

    console.log(`Файл ${fileName} успешно создан и в него записан текст.`);

    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error('Ошибка при чтении файла:', err);
            return;
        }

        console.log(`Содержимое файла ${fileName}:`);
        console.log(data);
    });
});
