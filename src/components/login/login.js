document.addEventListener('DOMContentLoaded', () => {
    const btnlogin = document.getElementById('btn-login');

    const correctemail = 'admin@gmail.com';
    const correctpasswd = 'admin';

    let moveToRight = true;

    function moveButton() {
        if (moveToRight) {
            btnlogin.style.transform = 'translateX(150%)';
        } else {
            btnlogin.style.transform = 'translateX(0)';
        }

        moveToRight = !moveToRight;
    }

    btnlogin.addEventListener('mouseover', () => {
        const useremail = document.getElementById('email').value;
        const userpasswd = document.getElementById('passwd').value;

        if (useremail !== correctemail || userpasswd !== correctpasswd) {
            moveButton();
        }
    });
});
