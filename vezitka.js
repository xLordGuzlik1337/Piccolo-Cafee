// Функция генерации снежинок
function createSnowflakes() {
    const snowContainer = document.getElementById('snow-container');

    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = '❄';

        // Случайные параметры для снежинок
        const size = Math.random() * 20 + 10; // Размер снежинки
        const posX = Math.random() * 100; // Положение по оси X
        const duration = Math.random() * 10 + 5; // Продолжительность анимации
        const delay = Math.random() * 5; // Задержка перед началом

        // Установка стилей снежинки
        snowflake.style.left = `${posX}vw`;
        snowflake.style.fontSize = `${size}px`;
        snowflake.style.animationDuration = `${duration}s, ${duration / 2}s`;
        snowflake.style.animationDelay = `${delay}s`;

        snowContainer.appendChild(snowflake);
    }
}

// Запуск генерации снежинок
createSnowflakes();
