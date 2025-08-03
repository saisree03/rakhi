function handleSubmit(event) {
        event.preventDefault(); // Prevent form from submitting normally
        const nameInput = document.getElementById("name").value.toLowerCase().trim();

        if (nameInput === "narendra") {
          window.location.href = "narendra.html";
        } 
        else if (nameInput === "lokesh") {
          window.location.href = "lokesh.html";
        }
         else if (nameInput === "Narendra Yadav") {
          window.location.href = "narendrayadav.html";
        }
        else if (nameInput === "pawan") {
          window.location.href = "pawan.html";
        }
        else if (nameInput === "prasanth") {
          window.location.href = "prasanth.html";
        } 
        else if (nameInput === "pavan") {
          window.location.href = "pavan.html";
        } 
        else if (nameInput === "kranthi") {
          window.location.href = "kranthi.html";
        } 
        else if (nameInput === "ganesh") {
          window.location.href = "ganesh.html";
        } 
        else if (nameInput === "aravind") {
          window.location.href = "aravind.html";
        }
        else if (nameInput === "sai") {
          window.location.href = "sai.html";
        } 
        else if (nameInput === "chaitu") {
          window.location.href = "chaitu.html";
        } 
        else if (nameInput === "chandu") {
          window.location.href = "chandu.html";
        } 
        else if (nameInput === "mohan") {
          window.location.href = "mohan.html";
        } 
        else {
          alert("Sorry, you are not allowed to access this page.");
        }
      }