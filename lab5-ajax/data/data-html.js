var button = document.getElementById("ajaxBtn");
button.addEventListener('click', makeRequest, false);
function myRequest(){
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr == 200){
            document.getElementById("content").innerHtml = xhr.responseText;
        }
    };

    xhr.open('Get','data.html',true);
    xhr.send(null);
}