// --- BÀI 1: Nút bấm đổi nền ---
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// --- BÀI 2 & 3: Xử lý khi cuộn trang (Scroll) ---
const navLinks = document.querySelectorAll('#navbar a');
const sections = document.querySelectorAll('section');
const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', () => {
    let current = "";

    // Bài 2: Kiểm tra section nào đang ở trong khung nhìn
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });

    // Bài 3: Kiểm tra các box để hiện hiệu ứng
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;
        if (boxTop < triggerPoint) {
            box.classList.add('show');
        }
    });
});

// --- BÀI 4: Hiệu ứng nhảy lên ---
const jumpBtn = document.querySelector('.jump');
jumpBtn.addEventListener('mouseover', () => {
    jumpBtn.classList.add('animate');
});
// Xóa class khi animation kết thúc để có thể lặp lại lần sau
jumpBtn.addEventListener('animationend', () => {
    jumpBtn.classList.remove('animate');
});

// --- BÀI 5: Hình tròn theo chuột ---
const circle = document.querySelector('.circle');
window.addEventListener('mousemove', (e) => {
    // Sử dụng style.left/top hoặc transform để mượt hơn
    circle.style.left = e.clientX - 15 + 'px';
    circle.style.top = e.clientY - 15 + 'px';
});