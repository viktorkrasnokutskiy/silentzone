// Форма
function openContactFromForm(event) {
  event.preventDefault();

  const name = document.getElementById('name').value || 'Клиент';
  const phone = document.getElementById('phone').value;
  const method = document.getElementById('method').value;

  if (!phone) {
    alert('Пожалуйста, укажите номер телефона');
    return false;
  }

  const message =
    `Здравствуйте, меня зовут ${name}.\n` +
    `Хочу рассчитать звукоизоляцию.\n` +
    `Мой телефон: ${phone}`;

  const encodedMessage = encodeURIComponent(message);

  let url = '';

  if (method === 'telegram') {
    url = `https://t.me/Viktor_Krasnokutskiy?text=${encodedMessage}`;
  } else {
    url = `https://wa.me/998946613346?text=${encodedMessage}`;
  }

// Отправка конверсии "Отправка формы"
gtag('event', 'conversion', {
  'send_to': 'AW-17832720282/w92XCPmau9cbEJrvprdC',
  'value': 1.0,
  'currency': 'USD'
});

window.open(url, '_blank');
return false;
}

