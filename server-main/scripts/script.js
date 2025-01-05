const gallery = document.getElementById("gallery");
const clearBtn = document.getElementById("clear");
//popup
const popupBtn = document.getElementById("popupbtn");
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const cancel = document.getElementById("cancel");
const submitBtn = document.getElementById("submit");
const fileType = document.getElementById("fileType");
const fileName = document.getElementById("fileName");
const fileSize = document.getElementById("fileSize");

function addFolder(name, size) {
  let oldGallery = document.querySelector("#gallery");
  let oldinnerhtml = oldGallery.innerHTML;
  gallery.innerHTML = `
    <div class="file-row">
        <div class="icon"><img src="styles/img/folder.png" alt="folder" /></div>
        <button class="down-style folder btn">${name}</button>
        <div class="info">
            <p>${size}mb</p>
            <div class="type"><p>folder</p></div>
            <button>Download</button>
        </div>
    `;
  gallery.innerHTML += oldinnerhtml;

  console.log("folder imported");
}
function addFile(name, type, size) {
  gallery.innerHTML += `
    <div class="file-row">
        <div class="icon"><img src="styles/img/file.png" alt="file" /></div>
        <button class="down-style file btn">${name}</button>
        <div class="info">
            <p>${size}mb</p>
            <div class="type"><p>${type}</p></div>
            <button>Download</button>
        </div>
    `;
  console.log("file imported");
}
function clearFiles() {
  gallery.innerHTML = ``;
  console.log("All files has been cleared");
}
//popup functions
function showpopup () {
  popup.style.display = "block";
  overlay.style.display = "block";
}
function hidepopup () {
  popup.style.display = "none";
  overlay.style.display = "none";
}


clearBtn.onclick = () => clearFiles();
//popup
popupBtn.onclick = () => showpopup();
cancel.onclick = () => hidepopup();
submitBtn.onclick = () => {
  const fileTypeValue = fileType.value;
  const fileNameValue = fileName.value;
  const fileSizeValue = fileSize.value;

  if (fileNameValue === "" || fileNameValue === " "){
    alert("please enter a valid name");
    return false;
  }
  if(fileTypeValue === "folder") {
    addFolder(fileNameValue, fileSizeValue);
  } else{
    addFile(fileNameValue, fileTypeValue, fileSizeValue);
  }
}