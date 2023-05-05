const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

/*Hàm xử lý sự kiện khi click vào class="register-link" thì sẽ thêm lớp CSS có tên 'active' vào phần tử logregBox*/
registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});

/*Hàm xử lý sự kiện khi click vào class="login-link" thì sẽ xóa lớp CSS có tên 'active' ra khỏi phần tử logregBox'*/
loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});