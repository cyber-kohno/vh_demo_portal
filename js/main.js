
window.onload = function () {

    const images = document.getElementById('img-list').children;
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('hide');
    }
    images[0].classList.remove('hide');
}


var timeoutKey = null;

setNextAutoChange();

function changeImage() {

    const images = document.getElementById('img-list').children;
    const cur = getCurrentImageIndex();
    // console.log(cur);
    images[cur].classList.add('hide');
    if (cur < images.length - 1) {
        images[cur + 1].classList.remove('hide');
    } else {
        images[0].classList.remove('hide');
    }

    setNextAutoChange();
}

function setNextAutoChange() {
    clearTimeout(timeoutKey);
    timeoutKey = setTimeout(() => {
        changeImage();
    }, 7000);
}

function getCurrentImageIndex() {

    const images = document.getElementById('img-list').children;
    for (let i = 0; i < images.length; i++) {
        if (!images[i].classList.contains('hide')) return i;
    }
    return -1;
}