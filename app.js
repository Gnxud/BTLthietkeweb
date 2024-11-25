const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});















// Select all menu items
const menuItems = document.querySelectorAll('.menu-list-item');

// Add click event listener to each menu item
menuItems.forEach(item => {
  item.addEventListener('click', function() {
    // Remove 'active' class from all menu items
    menuItems.forEach(item => item.classList.remove('active'));
    
    // Add 'active' class to the clicked menu item
    this.classList.add('active');
  });
});





















// Lấy các phần tử cần thiết
const profileTextContainer = document.querySelector('.profile-text-container');
const profileSubmenu = document.querySelector('.profile-submenu');
const profileCaret = document.querySelector('.profile-text-container i');

// Khi click vào profile, toggle submenu
profileTextContainer.addEventListener('click', () => {
    // Kiểm tra xem submenu có đang mở không
    const isVisible = profileSubmenu.style.display === 'block';

    if (isVisible) {
        profileSubmenu.style.display = 'none'; // Nếu đang mở, đóng lại
        profileCaret.style.transform = 'rotate(0deg)'; // Quay caret về trạng thái ban đầu
    } else {
        profileSubmenu.style.display = 'block'; // Nếu đang đóng, mở submenu
        profileCaret.style.transform = 'rotate(180deg)'; // Quay caret xuống dưới
    }
});












// Dark/Light Mode toggle functionality
const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", function() {
  // When checked, add dark mode, else remove it
  if (checkbox.checked) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
});


