const usernameInput = document.getElementById("username").value;
const  password = document.getElementById("password").value;
const btnDangnhap = document.getElementById("buttonDangnhap");
const btnCheck
function saveData() {
  if (data != null) {
      localStorage.setItem('savedData', data);
      alert('Dữ liệu đã được lưu vào Local Storage.');
      displayData();
  } else {
      alert('Vui lòng nhập dữ liệu trước khi lưu.');
  }
}

function displayData() {
  const savedData = localStorage.getItem('savedData');
  const outputElement = document.getElementById('output');

  if (savedData != null) {
      outputElement.textContent = `Dữ liệu đã lưu: ${savedData}`;
  } else {
      outputElement.textContent = 'Chưa có dữ liệu được lưu.';
  }
}

function deleteData() {
  localStorage.removeItem('savedData');
  alert('Dữ liệu đã bị xóa khỏi Local Storage.');
  displayData();
}

function checkExistence() {
  const inputValue = document.getElementById('dataInput').value
  const savedData = localStorage.getItem('savedData');

  if (savedData != null && inputValue == savedData) {
      alert('Dữ liệu đã tồn tại trong Local Storage.');
  } else {
      alert('Không có dữ liệu nào được lưu.');
  }
}

// Gọi hàm displayData() để hiển thị dữ liệu từ Local Storage
displayData();
