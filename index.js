const buttonWonman = document.getElementById("buttonWonman");
const buttonMan = document.getElementById("buttonMan");
const manlist = document.getElementById("manlist");
const RepImg = document.getElementsByClassName("RepImg");
const RepName = document.getElementsByClassName("RepName");
const RepFullName = document.getElementsByClassName("RepFullName");
const RepPrice = document.getElementsByClassName("RepPrice");
const content =document.getElementById("content-main");
const text1= document.getElementsByClassName("text-content")[0];
const text2= document.getElementsByClassName("text-2")[0];
const man= document.getElementById("man");
const woman= document.getElementById("woman");

content.addEventListener("click", function(){
    text1.innerHTML += "Nước hoa là một trong những sản phẩm mang tính cá nhân nhất, nó mang lại cho người dùng những trải nghiệm riêng biệt và đặc biệt. Tại La Parfumania, chúng tôi hiểu được điều này và luôn cố gắng mang đến cho khách hàng những trải nghiệm tuyệt vời nhất với nước hoa." +"<br><br>" + 
    "Mỗi mùi hương là một cuộc hành trình đầy cảm hứng và sự khám phá. Chúng ta có thể tìm thấy những kí ức và cảm xúc của mình trong mỗi hương thơm và khám phá những chân trời mới lạ. Với La Parfumania, chúng tôi hy vọng sẽ giúp khách hàng khám phá và trải nghiệm những mùi hương đặc biệt, và mang đến cho họ những cuộc phiêu lưu tuyệt vời." +"<br><br>"+
    "Tại La Parfumania, chúng tôi cam kết cung cấp cho khách hàng những sản phẩm nước hoa chất lượng nhất từ những thương hiệu nổi tiếng và danh tiếng trên thế giới. Chúng tôi luôn chọn lựa và cập nhật các mẫu nước hoa mới nhất và phù hợp nhất với xu hướng thị trường và sở thích của khách hàng." + "<br><br>"+
    "Đội ngũ nhân viên của chúng tôi là những chuyên gia về nước hoa, luôn sẵn sàng tư vấn và hỗ trợ khách hàng trong việc chọn lựa và sử dụng sản phẩm. Chúng tôi hiểu rằng mỗi người có một phong cách, một cá tính riêng và chúng tôi sẽ tìm ra cho bạn một mùi hương phù hợp với cá tính và phong cách của bạn." +"<br><br>"+
    "Không chỉ cung cấp các sản phẩm nước hoa, La Parfumania còn cung cấp các dịch vụ tư vấn và định hướng cho khách hàng trong việc lựa chọn sản phẩm phù hợp với nhu cầu sử dụng, cũng như các dịch vụ hậu mãi như bảo trì và sửa chữa sản phẩm nếu cần thiết." +"<br><br>"+
    "Với mong muốn mang đến cho khách hàng những trải nghiệm tuyệt vời nhất với nước hoa, La Parfumania sẽ không ngừng nỗ lực và cải tiến để trở thành địa chỉ tin cậy và chất lượng nhất cho những ai yêu thích nước hoa.";
    text2.innerHTML +=`<div class="p-auto bd-highlight">
    <div class="d-md-flex bd-highlight mb-3 justify-content-center ">
      <div class="d-flex flex-row justify-content-center p-2 bd-highlight">
        <div class="card" style="width: 302px; height: 516px">
          <img src="http://hinhnenhd.com/avt-trang-fb/tai-ngay-avt-trang-fb-moi-nhat-dep-nhat-doc-dao-22/"
            class="card-img-top " alt="...">
          <div class="card-body" style="background-color:#E3F2FD;">
            <h5 class="card-title p-2" style="font-size:large;font-weight:700; font-family:Verdana, Geneva, Tahoma, sans-serif">Trần Lê Giang</h5>
            <h5 class="card-title ps-2 pt-1">B2012197</h5>
            <p class="card-text"></p>
          </div>
        </div>
      </div>
      <div class="d-flex flex-row justify-content-center p-2 bd-highlight">
        <div class="card" style="width: 302px; height: 516px">
          <img src="http://hinhnenhd.com/avt-trang-fb/tai-ngay-avt-trang-fb-moi-nhat-dep-nhat-doc-dao-23/"
            class="card-img-top" alt="...">
          <div class="card-body" style="background-color:#E3F2FD;">
            <h5 class="card-title p-2"style="font-size:large;font-weight:700; font-family:Verdana, Geneva, Tahoma, sans-serif">Trần Ngọc Trân</h5>
            <h5 class="card-title ps-2 pt-1">B2103569</h5>
            <p class="card-text"></p>
          </div>
        </div>
      </div>
      <div class="d-flex flex-row justify-content-center p-2 bd-highlight">
        <div class="card" style="width: 302px; height: 516px">
          <img src="https://i.pinimg.com/564x/63/37/6a/63376aa4e780ba77fd87298161aef6a0.jpg"
            class="card-img-top" alt="...">
          <div class="card-body" style="background-color:#E3F2FD;">
            <h5 class="card-title p-2"style="font-size:large;font-weight:700; font-family:Verdana, Geneva, Tahoma, sans-serif">Nguyễn Minh Thuận</h5>
            <h5 class="card-title ps-2 pt-1">B2106816</h5>
            <p class="card-text"></p>
          </div>
        </div>
      </div>
      <div class="d-flex flex-row justify-content-center p-2 bd-highlight">
        <div class="card" style="width: 302px; height: 516px">
          <img src="http://hinhnenhd.com/avt-trang-fb/tai-ngay-avt-trang-fb-moi-nhat-dep-nhat-doc-dao-12/"
            class="card-img-top" alt="...">
          <div class="card-body" style="background-color:#E3F2FD;">
            <h5 class="card-title p-2"style="font-size:large; font-weight:700; font-family:Verdana, Geneva, Tahoma, sans-serif">Quách Vĩnh Thành Trung</h5>
            <h5 class="card-title ps-2 pt-1">B2111870</h5>
            <p class="card-text"></p>
          </div>
        </div>
      </div>
    </div>
  </div>`
    content.classList.add("hidden");
})

function WomanPerFume() {
    RepImg[0].src = "/images/product/perfume-w1.png";
    RepName[0].innerHTML = "GUCCI";
    RepFullName[0].innerHTML = "Bloom Eau de Parfum For Her";
    RepPrice[0].innerHTML = "1,780,000đ";
    RepImg[1].src = "/images/product/perfume-w2.png";
    RepName[1].innerHTML = "JEAN PAUL GAULTIER";
    RepFullName[1].innerHTML = "Scandal";
    RepPrice[1].innerHTML = "1,780,000đ";
    RepImg[2].src = "/images/product/perfume-w3.png";
    RepName[2].innerHTML = "CAROLINA HERRERA";
    RepFullName[2].innerHTML = "Good Girl Eau de Parfum";
    RepPrice[2].innerHTML = "1,780,000đ";
    RepImg[3].src = "/images/product/perfume-w4.png";
    RepName[3].innerHTML = "VERSACE";
    RepFullName[3].innerHTML = "Bright Crystal Mini Size";
    RepPrice[3].innerHTML = "1,990,000đ";
    RepImg[4].src = "/images/product/perfume-w5.png";
    RepName[4].innerHTML = "SALVATORE FERRAGAMO";
    RepFullName[4].innerHTML = "Signorina Eau de Parfum";
    RepPrice[4].innerHTML = "1,850,000đ";
    RepImg[5].src = "/images/product/perfume-w6.png";
    RepName[5].innerHTML = "MARC JACOBS";
    RepFullName[5].innerHTML = "Perfect";
    RepPrice[5].innerHTML = "2,400,000đ";
    RepImg[6].src = "/images/product/perfume-w7.png";
    RepName[6].innerHTML = "MARC JACOBS";
    RepFullName[6].innerHTML = "Daisy Love";
    RepPrice[6].innerHTML = "1,480,000đ";
    RepImg[7].src = "/images/product/perfume-w8.png";
    RepName[7].innerHTML = "MOSCHINO";
    RepFullName[7].innerHTML = "Toy 2 For Woman";
    RepPrice[7].innerHTML = "1,380,000đ";
    RepImg[8].src = "/images/product/perfume-w9.png";
    RepName[8].innerHTML = "ISSEY MIYAKE";
    RepFullName[8].innerHTML = "L’Eau d’Issey Eau & Magnolia";
    RepPrice[8].innerHTML = "1,870,000đ";
    RepImg[9].src = "/images/product/perfume-w10.png";
    RepName[9].innerHTML = "VERSACE";
    RepFullName[9].innerHTML = "Yellow Diamond Travel Spray";
    RepPrice[9].innerHTML = "2,800,000đ";
    RepImg[10].src = "/images/product/perfume-w11.png";
    RepName[10].innerHTML = "ANNA SUI";
    RepFullName[10].innerHTML = "Sky";
    RepPrice[10].innerHTML = "1,090,000đ";
    RepImg[11].src = "/images/product/perfume-w12.png";
    RepName[11].innerHTML = "AZZARO";
    RepFullName[11].innerHTML = "Wanted Girl By Night";
    RepPrice[11].innerHTML = "1,280,000đ";
    woman.classList.add("selected");
    woman.classList.add("animation");
    man.classList.remove("selected");
    man.classList.remove("animation");
}
function ManPerFume() {
    RepImg[0].src = "/images/product/perfume1.png";
    RepName[0].innerHTML = "CHRISTIAN DIOR";
    RepFullName[0].innerHTML = "Homme Intense";
    RepPrice[0].innerHTML = "2,800,000đ";
    RepImg[1].src = "/images/product/perfume2.png";
    RepName[1].innerHTML = "DOLCE & GABBANA";
    RepFullName[1].innerHTML = "The One Eau de Parfum for Men";
    RepPrice[1].innerHTML = "2,660,000đ";
    RepImg[2].src = "/images/product/perfume3.png";
    RepName[2].innerHTML = "CHANEL";
    RepFullName[2].innerHTML = "Bleu De Chanel Eau de Parfum";
    RepPrice[2].innerHTML = "2,450,000đ";
    RepImg[3].src = "/images/product/perfume4.png";
    RepName[3].innerHTML = "GIORGIO ARMANI";
    RepFullName[3].innerHTML = "Acqua di Gio Profumo";
    RepPrice[3].innerHTML = "3,200,000đ";
    RepImg[4].src = "/images/product/perfume5.png";
    RepName[4].innerHTML = "CREED";
    RepFullName[4].innerHTML = "Aventus";
    RepPrice[5].innerHTML = "6,500,000đ";
    RepImg[5].src = "/images/product/perfume6.png";
    RepName[5].innerHTML = "ARMAF";
    RepFullName[5].innerHTML = "Club de Nuit Intense Man";
    RepPrice[5].innerHTML = "1,180,000";
    RepImg[6].src = "/images/product/perfume7.png";
    RepName[6].innerHTML = "YVES SAINT LAURENT";
    RepFullName[6].innerHTML = "La Nuit De L'Homme";
    RepPrice[6].innerHTML = "2,650,000đ";
    RepImg[7].src = "/images/product/perfume8.png";
    RepName[7].innerHTML = "BVLGARI";
    RepFullName[7].innerHTML = "Aqva Pour Homme Marine";
    RepPrice[7].innerHTML = "1,650,000đ";
    RepImg[8].src = "/images/product/perfume9.png";
    RepName[8].innerHTML = "CALVIN KLEIN";
    RepFullName[8].innerHTML = "Everyone";
    RepPrice[8].innerHTML = "2,800,000đ";
    RepImg[9].src = "/images/product/perfume10.png";
    RepName[9].innerHTML = "VIKTOR & ROLF";
    RepFullName[9].innerHTML = "Spicebomb For Men";
    RepPrice[9].innerHTML = "2,450,000đ";
    RepImg[10].src = "/images/product/perfume11.png";
    RepName[10].innerHTML = "PACO RABANNE";
    RepFullName[10].innerHTML = "Phantom";
    RepPrice[10].innerHTML = "2,150,000đ";
    RepImg[11].src = "/images/product/perfume12.png";
    RepName[11].innerHTML = "JEAN PAUL GAULTIER";
    RepFullName[11].innerHTML = "Le Beau Le Parfum";
    RepPrice[11].innerHTML = "3,100,000đ";
    man.classList.add("selected");
    man.classList.add("animation");
    woman.classList.remove("selected");
    woman.classList.remove("animation");
}
buttonWonman.addEventListener("click", () => {
    WomanPerFume();
});
buttonMan.addEventListener("click", () => {
    ManPerFume();
});