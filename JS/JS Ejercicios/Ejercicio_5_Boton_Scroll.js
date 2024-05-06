const d = document;
const w = window;

export default function scrollTopButton(btn) {
  const $scrollBtn = d.querySelector(btn);

  w.addEventListener("scroll",(e) => {
    let ScrollTop = w.scrollY || d.documentElement.scrollTop;

    if (ScrollTop > 600) {
      $scrollBtn.classList.remove("hidden");
    } else {
      $scrollBtn.classList.add("hidden");
    }
    //console.log(w.scrollY,d.documentElement.scrollTop)
  });
  d.addEventListener("click",(e) => {
    if(e.target.matches(btn)){
      w.scrollTo({
        behavior:"smooth",
        top: 0,
        // left: 0,
      })
    }
  }); 
}





