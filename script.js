// Lightbox
function openLightbox(img) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = img.src;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

// Форма
function openContactFromForm(event) {
  event.preventDefault();
  const name = document.getElementById('name').value || "Клиент";
  const phone = document.getElementById('phone').value;
  const method = document.getElementById('method').value;

  if (!phone) {
    alert("Пожалуйста, укажите номер телефона");
    return false;
  }

  if (method === "telegram") {
    window.open(`https://t.me/Viktor_Krasnokutskiy?text=Здравствуйте, меня зовут ${name}. Хочу рассчитать звукоизоляцию. Мой телефон: ${phone}`);
  } else {
    window.open(`https://wa.me/998946613346?text=Здравствуйте, меня зовут ${name}. Хочу рассчитать звукоизоляцию. Мой телефон: ${phone}`);
  }
  return false;
}