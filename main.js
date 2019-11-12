var modal = document.getElementById('subModal')
var btn = document.getElementById('subBtn')

span = document.getElementsByClassName('xbutton')[0]

btn.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none'
}

window.onclick = function(event) {
    if (event.target == modal) {
        this.modal.style.display = 'none'
    }
}