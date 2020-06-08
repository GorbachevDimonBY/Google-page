const footerSubmenu = document.getElementsByClassName('footer__submenu')[0];
const settings = document.getElementsByClassName('settings')[0];
const services = document.getElementsByClassName('header-menu__services')[0];
const headerSubmenu = document.getElementsByClassName('header-submenu')[0];
const keyboard = document.getElementsByClassName('keyboard')[0];
const keyboardBtn = document.getElementsByClassName('search-form__keyboard-icon')[0];
const closeKeyboardBtn = document.getElementsByClassName('keyboard__close-btn')[0];
const searchInput = document.getElementsByClassName('search-input')[0];

const showFooterSubmenu = () => {
  footerSubmenu.classList.toggle('active');
}

const showKeyboard = () => {
  keyboard.classList.toggle('active');
}

const showHeaderSubmenu = (e) => {
  e.stopPropagation();
  headerSubmenu.classList.toggle('active');
}

const closeSubmenu = (e) => {
  if (e.target.className !== 'settings') footerSubmenu.classList.remove('active');
  if (e.target.className !== 'header-menu__services') headerSubmenu.classList.remove('active');
}

const closeKeyboard = (e) => {
  if (e.target.className === 'keyboard__close-btn') keyboard.classList.remove('active');
}

keyboard.addEventListener('click', (e) => {
  if (e.target.textContent.length === 1 && e.target.textContent !== '✖')
    searchInput.value += e.target.textContent;
});

settings.addEventListener('click', showFooterSubmenu);
services.addEventListener('click', showHeaderSubmenu)
keyboardBtn.addEventListener('click', showKeyboard)
document.addEventListener('click', closeSubmenu);
closeKeyboardBtn.addEventListener('click', closeKeyboard);