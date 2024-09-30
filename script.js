// Исходный текст
const originalText = 'Привет, мир!';
const textElement = document.getElementById('text');
const messageElement = document.getElementById('message');
let interval;
let currentIndex = 0;
let xOffset = 0;

// Функция для инициализации текста
function initializeText() {
    textElement.innerHTML = originalText
        .split('')
        .map(letter => `<span>${letter}</span>`)
        .join('');
}

// Функция для перемещения текста и удаления букв
function moveAndEraseText() {
    const letters = textElement.querySelectorAll('span');

    // Если все буквы удалены
    if (currentIndex >= letters.length) {
        clearInterval(interval);
        textElement.classList.add('hidden');
        messageElement.textContent = 'Все буквы удалены!';
        return;
    }

    // Перемещение текста
    xOffset += 5;
    textElement.style.transform = `translateX(${xOffset}px)`;

    // Удаление буквы через 1 секунду
    setTimeout(() => {
        letters[currentIndex].style.visibility = 'hidden';
        currentIndex++;
    }, 1000);
}

// Старт игры
function startGame() {
    initializeText();
    interval = setInterval(moveAndEraseText, 1000);
}

// Запуск игры при загрузке страницы
window.onload = startGame;

// 3) JavaScript:
// Функция initializeText() разбивает исходный текст на отдельные буквы и отображает их в виде <span> элементов.
// Функция moveAndEraseText() перемещает текст на 5 пикселей вправо каждый раз, когда она вызывается, и скрывает текущую букву после каждой секунды.
// Когда все буквы скрыты, выводится сообщение "Все буквы удалены!".
// Запуск игры осуществляется с помощью setInterval, который управляет циклом удаления и перемещения текста.