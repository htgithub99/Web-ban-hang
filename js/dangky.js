var user = document.getElementById("user_name");	
	var name = document.getElementById("fullname");
	var email = document.getElementById("email");
	var pass = document.getElementById("password");
	var confirm_pass = document.getElementById("confirm-password");
	var frm = document.getElementById("frmRegister");
	var _reg_user = /^[a-z0-9]{8,16}$/;
	var _reg_name = /^[a-z]{4,16}$/;
	var _reg_pass = /^[a-zA-Z0-9]{6,10}$/;
	var _reg_email = /^([a-zA-Z0-9_\.])+\@([a-z])+\.([a-z]{2,4})$/;

frm.onsubmit = function(){
	if(user.value ==""){
		alert("Các mục không được bỏ trống");
		return false;
	}
	if(name.value ==""){
		alert("Các mục không được bỏ trống");
	}
	if(email.value ==""){
		alert("Các mục không được bỏ trống");
		return false;
	}
	if(pass.value ==""){
		alert("Các mục không được bỏ trống");
		return false;
	}
	if(confirm_pass.value ==""){
		alert("Các mục không được bỏ trống");
		return false;
	}
	if(!_reg_user.test(user.value)){
		alert("Tên tài khoản phải là chữ thường hoặc số");
		return false;
	}
	if(!_reg_name.test(name.value)){
		alert("Họ và Tên phải in hoa");
		return false;
	}if(!_reg_email.test(email.value)){
		alert("Email không đúng định dạng");
		return false;
	}
	 if(!_reg_pass.test(pass.value)){
		alert("Mật khẩu không được chứa ký tự đặc biệt\nĐộ dài từ 6-8 ký tự");
		return false;
	} if(confirm_pass.value !=pass.value){
		alert("Xác nhận mật khẩu không khớp!");
		return false;
	}

	var _users = JSON.parse(localStorage.getItem("users")) || [];
	// Tạo đối tượng user để lưu
	var _user = {
		username: user.value,
		password: pass.value
	}
	_users.push(_user);

	// Chuyển mảng thành chuỗi json để lưu trữ
	var _json = JSON.stringify(_users);
	// Lưu vào localStorage
	localStorage.setItem("users", _json);
	alert("Đăng ký thành công!");
	return true;
}