let fullName ,email ,username;
const fileInput = document.getElementById("file-input");
const box = document.getElementById("box-id");

function setBackgroundImage(element, imageUrl) {
    element.style.backgroundImage = `url(${imageUrl})`;
    element.style.backgroundSize = "cover";
    element.style.backgroundRepeat = "no-repeat";
    element.style.backgroundPosition = "center";
}

document.getElementById('input-form').addEventListener('submit', function(event) {
    event.preventDefault();

    if(document.getElementById("name-input").value ==""){
        document.getElementById("name-error").style.display="block";
    }
    if(document.getElementById("email-input").value ==""){
        document.getElementById("email-error").style.display="block";
    }
    if(document.getElementById("username-input").value ==""){
        document.getElementById("user-error").style.display="block";
    }
    if(fileInput.files.length === 0){
        document.getElementById("file-error").style.color="hsl(7, 71%, 60%)";
    }
    else{
        const fileInput = document.getElementById("file-input");
        const file = fileInput.files[0];
        fullName = document.getElementById("name-input").value;
        email = document.getElementById("email-input").value;
        username = document.getElementById("username-input").value;
    
        const imageUrl = URL.createObjectURL(file);
        const avatarDiv = document.querySelector("#avatar-img");
        setBackgroundImage(avatarDiv , imageUrl);
    
        const ticketFullName = document.createElement("h2");
        ticketFullName.innerHTML ="ticket for "+ fullName +" "+username;

        document.getElementById("input-form").remove();
        document.querySelector("#fullname").innerHTML = fullName;
        document.querySelector("#git-prof").innerHTML = username;
        
        document.querySelector("#header-text").innerHTML = 'Congrats, <span class=color-word>' + fullName +'</span>!'+ '<br>' + ' Your ticket is ready.';
        document.querySelector("#information-text").innerHTML=`We've emailed your ticket to <br> <span class="color-word">${email}</span> and will send updates in <br> the run-up to the event.`
        //document.querySelector("#information-text").style.fontSize ="1.3rem";
        document.querySelector(".ticket").classList.add("ticket-genrated");
    }
});

fileInput.addEventListener("change", function(event) {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    const avatarDiv = document.querySelector("#upload-icon");
    const MAX_FILE_SIZE = 500 * 1024; 

    if (file && file.size > MAX_FILE_SIZE) {
        document.getElementById("file-error").textContent = "⨀ File too larg. Please upload a photo under 500KB."
        document.getElementById("file-error").style.color="hsl(7, 71%, 60%)";
        fileInput.value ="";
    }else{
        setBackgroundImage(avatarDiv,imageUrl);
        document.getElementById("file-error").textContent = "⨀ Upload your photo (JPG or PNG, max size: 500KB)"
        document.getElementById("file-error").style.color="#fff";
        document.querySelector(".orange-icon").style.display="none"
    }   
});

