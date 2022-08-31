const arrowBtn = document.querySelector('.arrow');
const arrowIcon = document.querySelector('.fas');
const img = document.querySelector('.item1');

//1. nasłuchiwanie na click'a na przycisk 
//2. dodawanie klasy 'hide'
//3. obracać strzałkę

const showImg = () => {
    img.classList.toggle('hide');
    //jeżeli zawiera klasę hide to strzałka do góry
    if(img.classList.contains('hide')) {
        arrowIcon.style.transform = 'rotate(180deg)';
    } else {
        arrowIcon.style.transform = 'rotate(0deg)';
    }

}

arrowBtn.addEventListener('click', showImg);