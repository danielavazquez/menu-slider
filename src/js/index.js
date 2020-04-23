const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

//Toggle nav
toggle.addEventListener('click', () => document.body.classList.toggle('show-nav'));

//Show modal
open.addEventListener('click', () => modal.classList.add('show-modal'));

//Close button hide modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));

//Hide modal on outside click
//window object is the topmost object in browser, add eListener, take e the event parameter and 
//used ternary operator
window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal') : false);