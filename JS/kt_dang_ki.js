$(document).ready(function () {
  function KTTen() {
    var kt = /(^[A-Za-z]+)((\s[A-Za-z]+){1,})$/;
    if ($("#ho_ten").val() == "") {
      $("#tbho_ten").html("*Bắt buộc nhập !!");
      $("#ho_ten").focus();
      return false;
    }
    if (!kt.test($("#ho_ten").val())) {
      $("#tbho_ten").html("*Viết hoa chữ cái đầu !!");
      $("#ho_ten").focus();
      return false;
    }
    $("#tbho_ten").html("*");
    return true;
  }
  $("#ho_ten").blur(KTTen);

  function KTUer() {
    var kt = /(^\w+)$/;
    if ($("#uesr").val() == "") {
      $("#tbuser").html("*Bắt buộc nhập !!");
      $("#uesr").focus();
      return false;
    }
    if (!kt.test($("#uesr").val())) {
      $("#tbuser").html("*User không được có dấu cách!");
      $("#uesr").focus();
      return false;
    }
    $("#tbuser").html("*");
    return true;
  }
  $("#uesr").blur(KTUer);

  function KTSDT() {
    var sdt = /^[0-9]{3}\-\d{4}\-\d{3}$/;
    if ($("#sdt").val() == "") {
      $("#tbsdt").html("* Bắt buộc nhập !!");
      $("#sdt").focus();
      return false;
    }
    if (!sdt.test($("#sdt").val())) {
      $("#tbsdt").html("Nhập theo dạng 000-0000-000");
      $("#sdt").focus();
      return false;
    }
    $("#tbsdt").html("*");
    return true;
  }
  $("#sdt").blur(KTSDT);

  function KTMail() {
    var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+(\.\w{2,3})+$/;
    if ($("#email").val() == "") {
      $("#tbemail").html("* Bắt buộc nhập !!");
      $("#email").focus();
      return false;
    }
    if (!mail.test($("#email").val())) {
      $("#tbemail").html("* Nhập đúng định dạng mail");
      $("#email").focus();
      return false;
    }
    $("#tbemail").html("*");
    return true;
  }
  $("#email").blur(KTMail);

  function NhapPass() {
    if ($("#pass").val() == "") {
      $("#tbpassword").html("* Bắt buộc nhập !!");
      $("#pass").focus();
      return false;
    }
    $("#tbpassword").html("*");
    return true;
  }
  $("#pass").blur(NhapPass);

  function Nhap_lai_pass() {
    var password = $("#pass").val();
    var password2 = $("#pass2").val();
    if ($("#pass2").val() == "") {
      $("#tbpass2").html("* Bắt buộc nhập !!");
      $("#pass2").focus();
      return false;
    }
    if (password != password2) {
      $("#tbpass2").html(
        "* Nhập lại mật khẩu phải trùng với mật khẩu ở trên !!!"
      );
      $("#pass2").focus();
      return false;
    } else $("#tbpass2").html("Trùng khớp");
    $("#tbpass2").html("*");
    return true;
  }
  $("#pass2").blur(Nhap_lai_pass);

  $("#dangki").click(function () {
    if (
      $("#ho_ten").val() != "" ||
      $("#pass2").val() != "" ||
      $("#pass").val() != "" ||
      $("#email").val() != "" ||
      $("#sdt").val() != "" ||
      $("#uesr").val() != ""
    ) {
      window.location.href = "index.html";
      alert("Đăng kí thành công !!");
      return false;
    } else {
      alert("Vui lòng nhập đầy đủ thông tin !!!");
      return false;
    }
  });
});
