const slider = document.createElement('section');
slider.className = 'container';
document.body.appendChild(slider);

const h1 = document.createElement('h1');
h1.className = 'h1';
h1.textContent = 'Галерея картинок';
slider.appendChild(h1);

const containerImgWithBtns = document.createElement('div');
containerImgWithBtns.className = 'containerImgWithBtns';
slider.appendChild(containerImgWithBtns);

const btnLeft = document.createElement('button');
btnLeft.className = 'btn-slider-left';
btnLeft.textContent = '❮';
containerImgWithBtns.appendChild(btnLeft);

const containerImgs = document.createElement('div');
containerImgs.className = 'container-imgs';
containerImgWithBtns.appendChild(containerImgs);

const imageUrls = [
    { url: 'images/harry1.jpg' },
    { url: 'images/harry2.jpg' },
    { url: 'images/harry3.jpg' },
    { url: 'images/harry4.jpg' },
    { url: 'images/harry6.webp' }
];
// Создаем контейнеры для каждого слайда
imageUrls.forEach((imageData, index) => {
    const containerImg = document.createElement('div');
    containerImg.className = 'container-img';

    const img = document.createElement('img');
    img.className = 'img';
    img.src = imageData.url;

    if (index === 0) {
        img.classList.add('active');
    }

    containerImg.appendChild(img);
    containerImgs.appendChild(containerImg);
});

const btnRight = document.createElement('button');
btnRight.className = 'btn-slider-right';
btnRight.textContent = '❯';
containerImgWithBtns.appendChild(btnRight);


let currentIndex = 0;


// Функция смены слайдов
function goToSlide(index) {
    if (index < 0) {
        index = imageUrls.length - 1;
    } else if (index >= imageUrls.length) {
        index = 0;
    }

    currentIndex = index; // Запоминаем текущий слайд
    containerImgs.style.transform = `translateX(${-index * 100}%)`;
}

// Добавляем обработчик клика для кнопки «Назад»
btnLeft.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
});

// Добавляем обработчик клика для кнопки «Вперёд»
btnRight.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
});

goToSlide(0);
