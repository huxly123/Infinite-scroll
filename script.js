const container = document.querySelector('.container');
const URL = "https://source.unsplash.com/random/200x200?sig="

function getRand() {
  let random = Math.random() * 1 + 100
  
return random
}


const loadImge = () => {
  
 
 let i=0
 
  while (i < 36) {
     let img = document.createElement("img");
    img.src = `https://source.unsplash.com/random/200x200?sig=${getRand()}`;
    container.append(img)
  i++
  }
}


loadImge()

function InfiniteScroll() {
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
    loadImge()
  }
}

window.addEventListener('scroll',InfiniteScroll)