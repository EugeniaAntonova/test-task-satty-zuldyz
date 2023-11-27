const faqList = document.querySelector('.faq-list');
const panels = document.querySelectorAll('.panel');
const accordeonControls = document.querySelectorAll('.accordion');
const crosses = document.querySelectorAll('.cross');

crosses[0].classList.add('cross-close');

for (let i = 1; i < panels.length; i++) {
  panels[i].style.maxHeight = 'auto';
  panels[i].classList.add('panel-close');
}
// panels.forEach((panel) => {
//   panel.style.maxHeight = 'auto';
//   panel.classList.add('panel-close');
// })


accordeonControls.forEach((control) => {
  control.addEventListener("click", (evt) => {
   let panel = document.getElementById(control.getAttribute("aria-controls"));
   let cross = evt.target.querySelector('.cross');
   panels.forEach((p) => {if (p !== panel) p.classList.add('panel-close')});
   crosses.forEach((c) => {if (c !== cross) c.classList.remove('cross-close')});
    panel.classList.toggle('panel-close')
    cross.classList.toggle('cross-close');
  })
})
