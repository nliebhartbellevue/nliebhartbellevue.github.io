var slideIndex = 1;

// Next/Prev controls
const plusSlides = n => {
  showSlides((slideIndex += n));
};

// Thumbnail image controls
const currentSlide = n => {
  showSlides((slideIndex = n));
};

// showSlides function
const showSlides = n => {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("demo");
  const captionText = document.getElementById("caption");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += "active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
};

showSlides(slideIndex);
