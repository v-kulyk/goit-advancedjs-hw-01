import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedData) {
  form.email.value = savedData.email;
  form.message.value = savedData.message;
}

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.
const onInput = throttle(event => {
  const formData = {
    email: form.email.value,
    message: form.message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500);

form.addEventListener('input', onInput);

// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
form.addEventListener('submit', event => {
  event.preventDefault();
  const formData = {
    email: form.email.value,
    message: form.message.value,
  };
  console.log(formData);
  form.reset();
  localStorage.removeItem('feedback-form-state');
});
