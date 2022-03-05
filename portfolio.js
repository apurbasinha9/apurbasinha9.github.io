function increase() {
    var e = document.getElementById('like');
    var value = e.innerHTML;
    ++value;

    document.getElementById('like').innerHTML = value;
}
