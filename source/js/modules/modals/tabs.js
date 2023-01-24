const buttons = document.querySelectorAll('[data-tab]');
const tabs = document.querySelectorAll('[data-list]');

export const initTabs = () => {

  tabs.forEach((tab, i) => {
    if (i !== 0) {
      tab.style.display = 'none';
    }
  });

  buttons.forEach((button) => {
    button.addEventListener('click', () => {

      buttons.forEach((item) => item.classList.remove('is-active'));

      tabs.forEach((tab) => {
        tab.style.display = 'none';

        if (button.dataset.tab === tab.dataset.list) {
          button.classList.add('is-active');
          tab.style.display = 'block';
        }
      });
    });
  });
};
