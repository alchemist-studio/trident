const root = document.documentElement;
const picker = document.querySelector('.colorway-switcher');
const buttons = Array.from(picker.querySelectorAll('[data-colorway-choice]'));
const themeColor = document.querySelector('meta[name="theme-color"]');
const colorways = { cyan: '#67E8F9', petrol: '#06282E', ice: '#CFFAFE' };

function setColorway(name) {
  if (!Object.hasOwn(colorways, name)) return;
  root.dataset.colorway = name;
  themeColor.content = colorways[name];
  buttons.forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.colorwayChoice === name));
  });
}

buttons.forEach(button => {
  button.addEventListener('click', () => setColorway(button.dataset.colorwayChoice));
});

picker.addEventListener('keydown', event => {
  const index = buttons.indexOf(event.target);
  if (index === -1) return;
  let next;
  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % buttons.length;
  else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index + buttons.length - 1) % buttons.length;
  else if (event.key === 'Home') next = 0;
  else if (event.key === 'End') next = buttons.length - 1;
  else return;
  event.preventDefault();
  setColorway(buttons[next].dataset.colorwayChoice);
  buttons[next].focus();
});
