var phrases = ['My', 'Your', 'Our']; // Menyimpan kalimat-kalimat yang akan digunakan
var index = 0; // Menyimpan urutan kalimat yang akan ditampilkan
var speed = 400; // Kecepatan typing animation dalam milidetik

function typeWriter(text, i, element) {
  if (i < text.length) {
    element.innerHTML += text.charAt(i);
    i++;
    setTimeout(function() {
      typeWriter(text, i, element);
    }, speed);
  } else {
    setTimeout(function() {
      element.innerHTML = '';
      index = (index + 1) % phrases.length;
      typeWriter(phrases[index], 0, element);
    }, speed);
  }
}

window.onload = function() {
  var element = document.getElementById('typing-text'); // Mengambil elemen HTML yang akan menampilkan teks
  typeWriter(phrases[index], 0, element); // Memulai typing animation dengan kalimat pertama pada index 0
};
