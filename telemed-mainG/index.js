const scrollFunction = () => {
  const header = document.getElementById("header");
  if (
    document.body.scrollTop > 80 ||
    document.documentElement.scrollTop > 80
  ) {
    console.log(header)
    header.classList.add('active')
  } else {
    header.classList.remove('active')
  }
}

window.addEventListener('scroll', () => {
  scrollFunction()
})

const menuClick = () => {
  const menu = document.getElementById("menu");
  const subMenu = document.getElementById("subMenu");
  const iconClose = document.getElementById("iconClose");

  menu.addEventListener("click", () => {
    subMenu.classList.add('active')
  });

  iconClose.addEventListener("click", () => {
    subMenu.classList.remove('active')
  });
}

window.addEventListener('click', () => menuClick())

const confirm = () => {
  const modal = document.querySelector('.terms-modal');
  modal.classList.add('none');
}