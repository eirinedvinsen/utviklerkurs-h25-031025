let slideIndex = 1; // starter på første bilde
showSlides(slideIndex);

// Når du trykker på pilene
function plusSlides(n) {
  showSlides(slideIndex += n);
};

// Dette viser riktig bilde
function showSlides(n) {
  let slides = document.getElementsByClassName("slides");

  // Hvis du går forbi siste bilde → hopp til første
  if (n > slides.length) {
    slideIndex = 1;
  };

  // Hvis du går før første bilde → hopp til siste
  if (n < 1) {
    slideIndex = slides.length;
  };

  // Skjul alle bilder
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  };

  // Vis bare det ene riktige bildet
  slides[slideIndex - 1].style.display = "block";
};