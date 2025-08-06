let sli = document.querySelector('#li_img')

let leftb = document.querySelector(',left')
let rightb = document.querySelector(',left')
let images = ["1.webp","2.webp","3.webp"]

let index = 0;
sli.src = images[index];
const next = () => {
  index++;
  if(index == images.length){
    index = 0;
  }
  sli.src = images[index]
}
rightb.addEventListener('click',next)
