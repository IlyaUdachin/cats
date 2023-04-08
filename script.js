fetch(path + "/show")
  .then(function(res){
    return res.json();
  })
  .then(function(data){
    // console.log(data);
    if (data.length) {
      for (let pet of data) {
        createCard(pet, block);
      }
    }
  })

addBtn.addEventListener("click", e => {
  mdBox.classList.toggle("active");
});
mdClose.addEventListener("click", e => {
  mdBox.classList.remove("active");
});
mdBox.addEventListener("click", e => {
  if (e.target === e.currentTarget) {
    mdBox.classList.remove("active");
  }
});