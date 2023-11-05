// const avt = document.getElementById('avatar');
// avt.addEventListener("change",(event)=>
// {
//     const {files} = event.target;
//     console.log("file",files)
//     const show = document.getElementById('show');
//     show.href="files";
// })

function uploadAvatar() {
    var input = document.getElementById('avatarInput');
    var preview = document.getElementById('avatarPreview');

    var file = input.files[0];
    var reader = new FileReader();

    reader.onload = function() {
        var img = new Image();
        img.src = reader.result;
        img.onload = function() {
            if (img.width > 2000 || img.height > 3000) {
                alert('Hình ảnh quá lớn. Hãy chọn hình ảnh có kích thước nhỏ hơn 300x300.');
            } else {
                // Lưu trữ đường dẫn hình ảnh vào local storage
                localStorage.setItem('avatar', reader.result);
                preview.innerHTML = '';
                preview.appendChild(img);
            }
        }
    }

    if (file) {
        reader.readAsDataURL(file);
    }
}

// Kiểm tra xem có avatar đã lưu trong local storage không
document.addEventListener('DOMContentLoaded', function() {
    var savedAvatar = localStorage.getItem('avatar');
    if (savedAvatar) {
        var preview = document.getElementById('avatarPreview');
        var img = new Image();
        img.src = savedAvatar;
        preview.appendChild(img);
    }
});
