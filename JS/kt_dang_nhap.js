$(document).ready(function () {
  function KTUer() {
    var kt = /(^\w+)$/;
    if ($("#user").val() == "") {
      alert("User không được bỏ trống !!!");
      return false;
    }
    if (!kt.test($("#uesr").val())) {
      alert("User không được có dấu cách!!");
      return false;
    }
    return true;
  }
  $("#user").blur(KTUer);

  function NhapPass() {
    if ($("#pass").val() == "") {
      alert("Password không được bỏ trống !!!");
      return false;
    }
    return true;
  }
  $("#pass").blur(NhapPass);

  $("#dangnhap").click(function () {
    if ($("#pass").val() != "" || $("#user").val() != "") {
      window.location.href = "index.html";
      alert("Đăng nhập thành công !!");
      return false;
    } else {
      alert("Vui lòng nhập đầy đủ thông tin !!!");
      return false;
    }
  });
});
