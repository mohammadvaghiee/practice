// preview عکس پروفایل
const input = document.getElementById('avatarInput');
const preview = document.getElementById('avatarPreview');

input.addEventListener('change', function () {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

let a = document.getElementById("email").value;
let sub = document.getElementById("sub");
let form = document.getElementById("form")
form.addEventListener("submit", (e) => {
    e.preventDefault(false)
})
sub.addEventListener("click", () => {
    let a = document.getElementById("email").value;
    localStorage.setItem("number", JSON.stringify(a))


    let b = document.getElementById("name").value;
    localStorage.setItem("name", JSON.stringify(b))


    let c = document.getElementById("info").innerText;
    localStorage.setItem("info", JSON.stringify(c))
    

    let create = document.createElement("h1");
    create.id = "saved";
    create.textContent = "ذخیره شد";
    document.getElementById("save-con").appendChild(create);
    window.scrollTo(0, 0)
    setTimeout(() => {
        create.remove()
    }, 5000)
    let get_name = document.getElementById("name").value;
    document.getElementById("setname").innerText = "," + get_name;
})
function render() {
    let a = document.getElementById("email");
    let get = JSON.parse(localStorage.getItem("number"))
    a.value = get


    let b = document.getElementById("name");
    let getname = JSON.parse(localStorage.getItem("name"))
    b.value = getname
    document.getElementById("setname").textContent = getname


    let getinfo = JSON.parse(localStorage.getItem("info"))
    document.getElementById("info").innerText = getinfo;
}
render()
document.querySelector("*").addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("myh",e.target.id)
})
document.querySelector("*").addEventListener("dragover", (e) => {
    e.preventDefault()
})
document.querySelector("*").addEventListener("drop", (e) => {
    let a = e.dataTransfer.getData("myh")
    e.target.append(document.getElementById(a))
})
document.querySelector(".b").addEventListener("click",()=>{
    document.querySelector(".tab").classList.toggle("c")
})
function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [key, value] = cookie.trim().split('=');
    if (key === name) {
      return value;
    }
  }
}
if(getCookie("bsman")){
    document.getElementById("account").style.display = "flex"
    document.getElementById("log-sign").style.display = "none"
}
if(! getCookie("bsman")){
    document.getElementById("account").style.display = "none"
    document.getElementById("log-sign").style.display = "flex"
}