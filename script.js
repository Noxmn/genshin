
// script.js
const themes = {
  raiden: { name: 'Raiden Shogun', bg: 'theme-raiden', img: 'Raiden-Shogun-PNG-HD-Image.png', words:['Raiden','Electro','Shogun'] },
  furina: { name: 'Furina', bg: 'theme-furina', img: 'image (1).png', words:['Furina','Hydro','Regina'] },
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
