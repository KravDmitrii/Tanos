document.querySelector('.slider').addEventListener('input', function() {
    var value = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.background = 'linear-gradient(to right, #BE69D5 0%, #BE69D5 ' + value + '%, #BAF1FF ' + value + '%, #BAF1FF 100%)';
});
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

document.addEventListener("DOMContentLoaded", function() {
    var menuBtn = document.getElementById("menuBtn");
    var menuContent = document.getElementById("menuContent");
    var menuIcon = menuBtn.querySelector(".header_nav_list__btn_svg");

    menuBtn.addEventListener("click", function() {
        menuContent.classList.toggle("open");
        menuIcon.classList.toggle("visible");
    });
});

// Открытие popup
document.getElementById("openPopup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "block";
});

// Закрытие popup
document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});

// Отправка формы
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение отправки формы
    var email = document.getElementById("email").value;
    // Отправляем запрос на сервер (здесь может быть ваша логика отправки письма)
    // В данном примере просто выводим сообщение
    alert("Привет");
    // Закрываем popup после отправки формы
    document.getElementById("popup").style.display = "none";
});