const canvasGallery = document.getElementById('galleryCanvas');
const context = galleryCanvas.getContext('2d');

const images = [
    'https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697',
    'https://thumbs.dreamstime.com/b/cat-19723292.jpg',
    'https://www.kisiselbilgi.com/wp-content/uploads/2021/10/en-guzel-erkek-kedi-ismi-1024x576.jpg',
    'https://img.goodfon.ru/original/1920x1200/f/b7/kot-kotenok-ryzhii.jpg'
];

let currentIndex = 0;

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
    });
}

async function displayImage(index) {
    const img = await loadImage(images[index]);
    context.clearRect(0, 0, galleryCanvas.width, galleryCanvas.height);
    context.drawImage(img, 0, 0, galleryCanvas.width, galleryCanvas.height);

    prevButton.disabled = index === 0;
    nextButton.disabled = index === images.length -1;
}

prevButton.addEventListener('click', () => {
    if(currentIndex > 0) {
        currentIndex--;
        displayImage(currentIndex);
    }
});

nextButton.addEventListener('click',()=> {
    if(currentIndex < images.length -1) {
        currentIndex++;
        displayImage(currentIndex);
    }
});

displayImage(currentIndex);