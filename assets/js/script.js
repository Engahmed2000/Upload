const form = document.querySelector("form"),
fileInput = document.querySelector(".file-input"),
progressArea = document.querySelector(".progress-area"),
uploadedArea = document.querySelector(".uploaded-area");

form.addEventListener("click", () =>{
  fileInput.click();
});

fileInput.onchange = ({target})=>{
  let file = target.files[0];
  if(file){
    let fileName = file.name;
    if(fileName.length >= 12){
      let splitName = fileName.split('.');
      fileName = splitName[0].substring(0, 13) + "... ." + splitName[1];
    }
    uploadFile(fileName);
  }
}

function uploadFile(name){
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "js/upload.php");
  xhr.upload.addEventListener("progress", ({loaded, total}) =>{
    let fileLoaded = Math.floor((loaded / total) * 100);
    let fileTotal = Math.floor(total / 1000);
    let fileSize;
    (fileTotal < 1024) ? fileSize = fileTotal + " KB" : fileSize = (loaded / (1024*1024)).toFixed(2) + " MB";
    let progressHTML = `<li class="row">
                          <i class="fas fa-file-alt"></i>
                          <div class="content">
                            <div class="details">
                              <span class="name">${name} • Uploading</span>
                              <span class="percent">${fileLoaded}%</span>
                            </div>
                            <div class="progress-bar">
                              <div class="progress" style="width: ${fileLoaded}%"></div>
                            </div>
                          </div>
                        </li>`;
    uploadedArea.classList.add("onprogress");
    progressArea.innerHTML = progressHTML;
    if(loaded == total){
      progressArea.innerHTML = "";
      let uploadedHTML = `<li class="row">
                            <div class="content upload">
                              <i class="fas fa-file-alt"></i>
                              <div class="details">
                                <span class="name">${name} • Uploaded</span>
                                <span class="size">${fileSize}</span>
                              </div>
                            </div>
                            <i class="fas fa-check"></i>
                          </li>`;
      uploadedArea.classList.remove("onprogress");
      uploadedArea.insertAdjacentHTML("afterbegin", uploadedHTML);
    }
  });
  let data = new FormData(form);
  xhr.send(data);
}

// function uploadFile(name) {
//   let xhr = new XMLHttpRequest();
//   xhr.open("POST", "js/upload.php");

//   xhr.upload.addEventListener("progress", ({ loaded, total }) => {
//     let fileLoaded = Math.floor((loaded / total) * 100);
//     let fileTotal = Math.floor(total / 1000);
//     let fileSize;
//     fileTotal < 1024 ? fileSize = fileTotal + " KB" : fileSize = (loaded / (1024 * 1024)).toFixed(2) + " MB";

//     let progressHTML = `<li class="row">
//                           <i class="fas fa-file-alt"></i>
//                           <div class="content">
//                             <div class="details">
//                               <span class="name">${name} • Uploading</span>
//                               <span class="percent">${fileLoaded}%</span>
//                             </div>
//                             <div class="progress-bar">
//                               <div class="progress" style="width: ${fileLoaded}%"></div>
//                             </div>
//                           </div>
//                         </li>`;
//     uploadedArea.classList.add("onprogress");
//     progressArea.innerHTML = progressHTML;

//     if (loaded == total) {
//       progressArea.innerHTML = "";
//       let uploadedHTML = `<li class="row">
//                             <div class="content upload">
//                               <i class="fas fa-file-alt"></i>
//                               <div class="details">
//                                 <span class="name">${name} • Uploaded</span>
//                                 <span class="size">${fileSize}</span>
//                               </div>
//                             </div>
//                             <i class="fas fa-check"></i>
//                           </li>`;
//       uploadedArea.classList.remove("onprogress");
//       uploadedArea.insertAdjacentHTML("afterbegin", uploadedHTML);

//       // Display the submit page content dynamically
//       let submitHTML = `<div class="submit-page">
//                           <h1>Upload Successful!</h1>
//                           <p>Your file has been uploaded successfully.</p>
//                           <button onclick="window.location.reload()">Upload Another File</button>
//                         </div>`;
//       form.innerHTML = submitHTML; // Replace the form with the submit page content
//     }
//   });

//   let data = new FormData(form);
//   xhr.send(data);
// }


function uploadFile(name) {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "js/upload.php");

  xhr.upload.addEventListener("progress", ({ loaded, total }) => {
    let fileLoaded = Math.floor((loaded / total) * 100);
    let fileTotal = Math.floor(total / 1000);
    let fileSize;
    fileTotal < 1024 ? fileSize = fileTotal + " KB" : fileSize = (loaded / (1024 * 1024)).toFixed(2) + " MB";

    let progressHTML = `<li class="row">
                          <i class="fas fa-file-alt"></i>
                          <div class="content">
                            <div class="details">
                              <span class="name">${name} • Uploading</span>
                              <span class="percent">${fileLoaded}%</span>
                            </div>
                            <div class="progress-bar">
                              <div class="progress" style="width: ${fileLoaded}%"></div>
                            </div>
                          </div>
                        </li>`;
    uploadedArea.classList.add("onprogress");
    progressArea.innerHTML = progressHTML;

    if (loaded == total) {
      progressArea.innerHTML = "";
      let uploadedHTML = `<li class="row">
                            <div class="content upload">
                              <i class="fas fa-file-alt"></i>
                              <div class="details">
                                <span class="name">${name} • Uploaded</span>
                                <span class="size">${fileSize}</span>
                              </div>
                            </div>
                            <i class="fas fa-check"></i>
                          </li>`;
      uploadedArea.classList.remove("onprogress");
      uploadedArea.insertAdjacentHTML("afterbegin", uploadedHTML);

      // Display the submit page content dynamically
      let submitHTML = `<div class="submit-page">
                          <h1 class="fontone">Upload Successful!</h1>
                          <p class="fonttwo">Your file has been uploaded successfully.</p>
                          <div class="successone">  
                          <a href="#" class="successtwo">
            <img src="assets/img/iconswhite.png" alt="image"> </a> </div> 
             </div>`;
      form.innerHTML = submitHTML; // Replace the form with the submit page content
    }
  });

  let data = new FormData(form);
  xhr.send(data);
}












