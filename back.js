document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Предотвращаем стандартное поведение формы

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // URL для запроса на сервер (замените на ваш реальный URL)
        const url = 'https://your-backend-url.com/submit';

        // Опции запроса
        const options = {
            method: 'POST', // Метод запроса (может быть GET, POST и т.д.)
            headers: {
                'Content-Type': 'application/json' // Установка заголовка Content-Type
            },
            body: JSON.stringify({ username, password }) // Преобразование данных в формат JSON
        };

        // Отправка запроса на сервер
        fetch(url, options)
            .then(response => {
                // Обработка ответа от сервера
                if (response.ok) {
                    return response.json(); // Если ответ успешный, возвращаем JSON
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                // Обработка полученных данных от сервера
                console.log(data); // Делаем что-то с полученными данными
            })
            .catch(error => {
                // Обработка ошибок
                console.error('There has been a problem with your fetch operation:', error);
            });
    });
});