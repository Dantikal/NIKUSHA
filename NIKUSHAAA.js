// Массив с текстами
const loveMessages = [
    'Ты моя вселенная, Ника!',
    'Твоя любовь — это магия, которая освещает мой мир.',
    'Моё сердце бьётся для тебя, Ника!',
    'Я живу ради твоего улыбки.',
    'Ты — моя любовь, и я всегда буду рядом!',
    'Ника, ты — мой свет в этом мире!',
    'С каждым взглядом влюбляюсь в тебя снова!',
    'Ты — причина моего счастья, Ника!',
    'Любовь к тебе переполняет моё сердце!'
];

// Функция для создания текста
function createLoveText() {
    const message = loveMessages[Math.floor(Math.random() * loveMessages.length)];
    const text = document.createElement('div');
    text.classList.add('love-text');
    text.innerHTML = message;

    // Устанавливаем случайные позиции для текста
    text.style.top = Math.random() * 70 + '%';
    text.style.left = Math.random() * 70 + '%';
    text.style.animationDelay = Math.random() * 3 + 's';

    // Добавляем текст в body
    document.body.appendChild(text);

    // Удаляем текст после его анимации
    setTimeout(() => {
        text.remove();
    }, 5000);
}

// Интервал для добавления новых текстов (бесконечно)
setInterval(createLoveText, 3000); // Каждый 3 секунды будет добавляться новый текст

// Функция для создания сердечек
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.width = Math.random() * 20 + 10 + 'px'; // Уменьшили размер сердечек
    heart.style.height = heart.style.width;
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.animationDuration = Math.random() * 1.7 + 1.7 + 's'; // Уменьшили время падения для увеличения скорости
    document.querySelector('.hearts-container').appendChild(heart);

    // Удаляем сердечко после его падения
    setTimeout(() => {
        heart.remove();
    }, 2500); // Уменьшили время удаления сердечка
}

// Интервал для создания сердечек (каждые 50 миллисекунд)
setInterval(createHeart, 50); // Падающие сердечки каждые 50 миллисекунд (увеличили количество)