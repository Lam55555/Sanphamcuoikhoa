// const avt = document.getElementById('avatar');
// avt.addEventListener("change",(event)=>
// {
//     const {files} = event.target;
//     console.log("file",files)
//     const show = document.getElementById('show');
//     show.href="files";
// })

function chooseFile(fileInput)
{
    if(fileInput.files&&fileInput.files[0])
    {
        var reader = new FileReader();
        reader.onload = function(e){
            $('#image').attr('src',e.target.result);
        }
        reader.readAsDataURL(fileInput.files[0])
    }
}