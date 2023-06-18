const bar = document.getElementById('bar');
const max = document.getElementById('max');
const mobile = document.getElementById('mobile');

mobile.addEventListener('click',()=>{
    max.style.right = '0px';
});
bar.addEventListener('click',()=>{
    max.style.right = '-300px';
});