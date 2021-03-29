var user = document.getElementById("user_name");
var pass = document.getElementById("password");
var frm = document.getElementById("frmLogin");


frm.onsubmit = function(){
			// Lấy dữ liệu user đã đăng ký được lưu trong localStorage
			var _users = JSON.parse(localStorage.getItem("users")) || [];
			// Kiểm dữ liệu đăng ký
			if (_users.length == 0) {
				alert("Chưa có dữ liệu tài khoản\nVui lòng chuyển đến trang đăng ký để đăng ký tài khoản!");
				return false;
			}
			// Duyệt mảng users để kiểm tra đăng nhập đúng hay sai
			// biến kết quả kiểm tra kết quả đăng nhập
			var _check = false;
			for(var i = 0; i < _users.length;i++){
				if (_users[i].username==user.value && _users[i].password == pass.value) {
					_check = true;
					break;
				}
			}
			if (_check) {
				alert("Đăng nhập thành công!");
				// Lưu vào session
				// Tạo đối tượng uesr đăng nhập thành côgn
				var _user = {
					username: user.value,
					password: pass.value
				}
				// Chuyển thành chuỗi json
				var _json = JSON.stringify(_user);
				// Đưa vào sessionStorage
				sessionStorage.setItem("user", _json);


				return true;
			} else {
				alert("Sai tài khoản hoặc mật khẩu!");
				return false;
			}

		}