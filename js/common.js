
function callMenuWnd() {
    const iconEl = document.getElementById('menu-icon');
    const menuEl = document.getElementById('fixed-menu');
    const bodyEl = document.getElementsByTagName('body')[0];
    iconEl.classList.toggle('active');
    menuEl.classList.toggle('active');
    bodyEl.classList.toggle('lock');
}