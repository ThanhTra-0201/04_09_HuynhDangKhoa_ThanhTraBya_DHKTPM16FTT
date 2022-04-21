function tim() {
  var gia_tri_tim = document.getElementById("search_input").value;

  if (!gia_tri_tim) {
    alert("Hãy nhập tên sản phẩm cần tìm");
  } else {
    var product = document.querySelectorAll("div#products > div.item");
    for (let index = 0; index < product.length; index++) {
      var h4 = product[index].getElementsByTagName("h4")[0].innerHTML;
      if (h4.indexOf(gia_tri_tim) >= 0) {
        product[index].style.outline = "2px solid red";
      }
    }
    alert("Tìm thấy sản phẩm");
  }
  setTimeout(function () {
    var product = document.querySelectorAll("div#products > div.item");
    for (let index = 0; index < product.length; index++) {
      var h4 = product[index].getElementsByTagName("h4")[0].innerHTML;
      if (h4.indexOf(gia_tri_tim) >= 0) {
        product[index].style.outline = "none";
      }
    }
  }, 3000);
}
