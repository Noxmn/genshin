
// script.js
const themes = {
  raiden: { name: 'Raiden Shogun', bg: 'theme-raiden', img: 'https://www.pngall.com/wp-content/uploads/6/Raiden-Shogun-PNG-Image.png', words:['Raiden','Electro','Shogun'] },
  furina: { name: 'Furina', bg: 'theme-furina', img: 'https://i.pinimg.com/originals/4b/2a/7f/4b2a7f3b7b8ae1c0b9a1f8e5d9c6f3d2.png', words:['Furina','Hydro','Regina'] },
  nahida: { name: 'Nahida', bg: 'theme-nahida', img: 'https://cdn.discordapp.com/attachments/86334567890123456/91345678901234567/nahida_render.png', words:['Nahida','Dendro','Sage'] },
};

const heroTitle = document.getElementById('heroTitle');
const heroImg = document.getElementById('heroImg');
const labelWords = document.getElementById('labelWords');

function setTheme(key){
  const t = themes[key];
  // body class swap for bg
  document.body.classList.remove('theme-raiden','theme-furina','theme-nahida');
  document.body.classList.add(t.bg);
  // change title
  heroTitle.textContent = t.name.toUpperCase();
  // fade image
  heroImg.style.opacity = 0;
  setTimeout(()=>{
    heroImg.src = t.img;
    heroImg.onload = ()=>{ heroImg.style.opacity = 1; };
  }, 250);
  // label words
  labelWords.innerHTML = t.words.map(w=>`<span>${w.toLowerCase()}</span>`).join(' ');
}

document.querySelectorAll('.char-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const c = btn.getAttribute('data-char');
    setTheme(c);
  });
});

// initial setup
setTheme('raiden');
