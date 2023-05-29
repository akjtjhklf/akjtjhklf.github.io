


//-------------------------------------------------------------------


// Lấy tất cả các nút "Thêm vào giỏ hàng" trên trang
var addToCartButtons = document.querySelectorAll(".addToCart");
// Lặp qua từng nút "Thêm vào giỏ hàng" để thêm sự kiện click
addToCartButtons.forEach(function(button) {
  button.addEventListener("click", function(event) {
    // Ngăn chặn hành động mặc định của nút
    event.preventDefault();

    // Lấy thông tin sản phẩm từ các phần tử trong card
    var card = button.closest(".CardItem");
    var img = card.querySelector(".ImgItem").src;
    var name = card.querySelector(".NameItem").textContent;
    var fullName = card.querySelector(".FullName").textContent;
    var price = card.querySelector(".PriceItem").textContent;

    // Thêm sản phẩm vào giỏ hàng
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    var item = {
      img: img,
      name: name,
      fullName: fullName,
      price: price,
      quantity: 1
    };
    var existingItem = cartItems.find(function(e) {
      return e.name === item.name && e.fullName === item.fullName && e.price === item.price && e.img === item.img;
    });
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push(item);
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    var overlay = document.createElement("div");
      overlay.classList.add("overlay");

      // Tạo hộp chứa hình chữ nhật
      var alertBox = document.createElement("div");
      alertBox.classList.add("alert-box");

      // Tạo hình chữ nhật
      var rectangle = document.createElement("div");
      rectangle.style.width = "300px";
      rectangle.style.height = "50px";
      rectangle.style.backgroundColor = "none";
      rectangle.innerHTML+="<p>Sản phẩm đã được thêm vào giỏ hàng!</p>"
      rectangle.classList.add("alert-main")

      // Thêm hình chữ nhật vào hộp chứa
      alertBox.appendChild(rectangle);

      // Thêm hộp chứa vào lớp mờ
      overlay.appendChild(alertBox);

      // Thêm lớp mờ vào body
      document.body.appendChild(overlay);

      // Đóng cửa sổ pop-up cảnh báo sau 1 giây
      setTimeout(function() {
        overlay.remove();
      }, 1000);
  });
});

function addToCart(img, name, fullName, price) {
  // Tạo một đối tượng sản phẩm mới
  var product = {
    img: img,
    name: name,
    fullName: fullName,
    price: price
  };

  // Thêm sản phẩm vào giỏ hàng
  var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.push(product);
  // Lưu giá trị của mảng cartItems vào localStorage để lưu trữ giỏ hàng
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  // Hiển thị thông báo khi sản phẩm được thêm vào giỏ hàng
  var overlay = document.createElement("div");
      overlay.classList.add("overlay");

      // Tạo hộp chứa hình chữ nhật
      var alertBox = document.createElement("div");
      alertBox.classList.add("alert-box");

      // Tạo hình chữ nhật
      var rectangle = document.createElement("div");
      rectangle.style.width = "100px";
      rectangle.style.height = "100px";
      rectangle.style.backgroundColor = "none";
      rectangle.innerHTML+="<p>Sản phẩm đã được thêm vào giỏ hàng!</p>"

      // Thêm hình chữ nhật vào hộp chứa
      alertBox.appendChild(rectangle);

      // Thêm hộp chứa vào lớp mờ
      overlay.appendChild(alertBox);

      // Thêm lớp mờ vào body
      document.body.appendChild(overlay);

      // Đóng cửa sổ pop-up cảnh báo sau 1 giây
      setTimeout(function() {
        overlay.remove();
      }, 1000);
}
// Tạo class cho trang sản phẩm
class ProductPage {
  constructor(pageNumber) {
    this.pageNumber = pageNumber;
    this.element = document.createElement('div');
    this.element.id = `div${pageNumber}`;
    this.element.classList.add('product-page', 'hidden');
    this.element.style.marginBottom = '20px';
  }
  show() {
    this.element.classList.remove('hidden');
  }
  hide() {
    this.element.classList.add('hidden');
  }
  render(products) {
    const row = document.createElement('div');
    row.classList.add('row');

    const productDivs = products.map(function(product) {
      const imgSrc = product.querySelector('.ImgItem').getAttribute('src');
      const fullName = product.querySelector('.FullName').textContent;
      const name = product.querySelector('.FullName').textContent;
      const price = product.querySelector('.PriceItem').textContent;

      const productDiv = `
        <div class="col-4">
          <div class="card pt-3 CardItem product-item" style="width: 302px; height: 516px;">
            <img class="card-img-top ImgItem" src="${imgSrc}">
            <div class="card-body">
              <h5 class="card-title NameItem">${fullName}</h5>
              <div class="card-text">
                <p class="FullName">${name}</p>
                <p class="price PriceItem">${price}</p>
                <a class="btn w-100 btn-light addToCart">
                  <button style="border: none; background: none;">
                    <i class="bi bi-cart3"></i> Thêm vào giỏ hàng
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
      return productDiv;
    });

    row.insertAdjacentHTML('beforeend', productDivs.join(''));
    this.element.appendChild(row);
  }
}

// Lấy danh sách các sản phẩm từ các phần tử có lớp CSS là "product-item"
const allProducts = Array.from(document.querySelectorAll('.product-item'));

// Tạo các trang sản phẩm
const numPages = Math.ceil(allProducts.length / 3); // Số trang sản phẩm, mỗi trang có tối đa 3 sản phẩm
const productPages = [];
for (let i = 0; i < numPages; i++) {
  const page = new ProductPage(i + 1);
  productPages.push(page);
  document.body.appendChild(page.element);
}

// Hiển thị trang sản phẩm đầu tiên
let currentPage = productPages[0];
currentPage.show();
currentPage.render(allProducts.slice(0, 3));

// Lấy thanh chuyển trang
const pageButtons = Array.from(document.querySelectorAll('#pagination a'));

// Lặp qua từng nút trang để thêm sự kiện click
pageButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    event.preventDefault();

    // Lấy số trang được chọn
    const pageNumber = parseInt(button.textContent);

    // Chuyển đến trang mới
    currentPage.hide();
    currentPage = productPages[pageNumber - 1];
    currentPage.show();
    const startIndex = (pageNumber - 1) * 3;
    const endIndex = Math.min(startIndex + 3, allProducts.length);
    currentPage.render(allProducts.slice(startIndex, endIndex));
  });
});

// Xóa bộ lọc
const clearFiltersButton = document.getElementById('clear-filters');
clearFiltersButton.addEventListener('click', function() {
  currentPage.hide();
  currentPage = productPages[0];
  currentPage.show();
  currentPage.render(allProducts.slice(0, 3));
});
