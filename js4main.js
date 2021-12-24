var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
btn.addEventListener('click', () => {
  alert('You clicked me!');
   let pElem = document.createElement('p');
  	pElem.textContent = 'This is a newly-added paragraph.';
  	document.body.appendChild(pElem);
});
