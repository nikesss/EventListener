var openPageTwo = document.getElementById("open_page_two");
var openPageOne = document.getElementById("open_page_one");
if (openPageOne) {
  openPageOne.addEventListener("click", function () {
    var inputOne = document.querySelector("#input_one").value;
    var inputTwo = document.querySelector("#input_two").value;
    if (inputOne && inputTwo) {
      console.log(inputOne);
      document.location.href = "./page1.html";
    } else {
      alert("Заполните поля для ввода");
    }
  });
}
if (openPageTwo) {
  openPageTwo.addEventListener("click", function () {
    document.location.href = "./page2.html";
  });
}
