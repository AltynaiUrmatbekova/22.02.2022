let h1 = document.querySelector('h1');

document.querySelector('#text').addEventListener('input', function() {
    h1.textContent = this.value;
});
document.querySelector('#color').addEventListener('input', function() {
    h1.style.color = this.value;
});
document.querySelector('#background-color').addEventListener('input', function() {
    h1.style.backgroundColor = this.value;
});
document.querySelector('#font-family').addEventListener('input', function() {
    h1.style.fontFamily = this.value;
});
document.querySelector('#font-size').addEventListener('input', function() {
    h1.style.fontSize = this.value + 'px';
    this.nextSibling.textContent = h1.style.fontSize;
});
document.querySelector('#font-size').addEventListener('input', function() {
    h1.style.fontSize = this.value + 'px';
    this.nextSibling.textContent = h1.style.fontSize;
});
document.querySelector('#bold').addEventListener('input', function() {
    if (this.checked) {
        h1.style.fontWeight = 'bold';
    }
    else {
        h1.style.fontWeight = 'normal'
    }
 });
    
 

