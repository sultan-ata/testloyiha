document.addEventListener('DOMContentLoaded', function() {
    const taomimg = document.getElementById('taomimg');

    let isScaled = false;

    taomimg.addEventListener('click', function() {
        if (!isScaled) {
            taomimg.classList.add('scale', 'rotate');
            isScaled = true;
        } else {
            taomimg.classList.remove('scale', 'rotate');
            isScaled = false;
        }
    });
});
