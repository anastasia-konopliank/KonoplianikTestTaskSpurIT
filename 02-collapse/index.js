const anim = document
  .querySelector(".collapsible__content")
  .animate(
    [{ height: "0px"}, { height: "100px"}],
    { duration: 250, fill: "both", easing: "ease-out" }
  );

document.querySelector(".collapsible__content").style = "overflow: hidden";

anim.pause();

let hideContent = document.getElementsByClassName('collapsible__action--visible')[0];
let showContent = document.getElementsByClassName('collapsible__action--hidden')[0];
hideContent.style.display = 'none';

document.querySelector(".collapsible__button").addEventListener("click", () => {
  if (anim.playState === "paused") {
    anim.play();
  } else {
    anim.reverse();
  }
});

document.querySelector(".collapsible__button").addEventListener("click", () => {
  if (hideContent.style.display === 'none') {
	hideContent.style.display = '';
	showContent.style.display = 'none';
  } else {
	showContent.style.display = '';
	hideContent.style.display = 'none';
  }
});
  