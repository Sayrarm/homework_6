const slider = document.createElement('section');
slider.className = 'container';
document.body.appendChild(slider);

const h1 = document.createElement('h1');
h1.className = 'h1';
h1.textContent = 'Галерея картинок';
slider.appendChild(h1);

const containerImgBtns = document.createElement('div');
containerImgBtns.className = 'containerImgBtns';
slider.appendChild(containerImgBtns);

const btnLeft = document.createElement('button');
btnLeft.className = 'btn-slider';
btnLeft.textContent = '❮';
containerImgBtns.appendChild(btnLeft);

const containerImg = document.createElement('div');
containerImg.className = 'container-img';
containerImgBtns.appendChild(containerImg);

const btnRight = document.createElement('button');
btnRight.className = 'btn-slider';
btnRight.textContent = '❯';
containerImgBtns.appendChild(btnRight);

let index = 0;
const imageUrls = [
    { url: 'images/harry1.jpg', width: '800px', height: '500px' },
    { url: 'images/harry2.jpg', width: '800px', height: '500px' },
    { url: 'images/harry3.jpg', width: '800px', height: '500px' },
    { url: 'images/harry4.jpg', width: '800px', height: '500px' },
    { url: 'images/harry6.webp', width: '800px', height: '500px' }
];

const img = document.createElement('img');
img.className = 'img';
img.style.borderRadius = '20px';
img.style.width = imageUrls[index].width;
img.style.height = imageUrls[index].height;
img.classList.add('active');
img.src = imageUrls[index].url;
containerImg.appendChild(img);


// Функция обновления картинки
function updateImage() {
    img.style.width = imageUrls[index].width;
    img.style.height = imageUrls[index].height;
    img.src = imageUrls[index].url;
}

btnLeft.addEventListener('click', function() {
    index--;
    if (index < 0) {
        index = imageUrls.length - 1; // переходим к последней
    }
    updateImage();
});

btnRight.addEventListener('click', function() {
    index++;
    if (index >= imageUrls.length) {
        index = 0; // переходим к первой
    }
    updateImage();
});

