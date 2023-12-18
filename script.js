
document.addEventListener('DOMContentLoaded', function () {
  const loginButton = document.querySelector('.Login-header');
  const logSection = document.querySelector('.Log');
  const closeButton = logSection.querySelector('.close-btn');
  const overlay = document.createElement('div');

  loginButton.addEventListener('click', function () {
    logSection.classList.add('active');
    document.body.classList.add('overlay');
  });

  closeButton.addEventListener('click', function () {
    closeLogSection();
  });

  logSection.addEventListener('click', function (event) {
    if (event.target === logSection) {
      closeLogSection();
    }
  });

  function closeLogSection() {
    logSection.classList.remove('active');
    document.body.classList.remove('overlay');
  }

});
document.addEventListener('DOMContentLoaded', function () {

  function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
      const offsetTop = section.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }


  const menuItems = document.querySelectorAll('.item');
  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      const sectionClass = `.${item.textContent}`;
      scrollToSection(sectionClass);
    });
  });
});

const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};


