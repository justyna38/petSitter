const spanNom=document.getElementById("nomChien")
const spanMaitre=document.getElementById("maitreChien")
const spanAge=document.getElementById("ageChien")

const URLServeur= "http://localhost:3000/"
const routeJusty= "justy-data"
const routeRegistrement= "registre"
const url=URLServeur+routeJusty
const urlRegistre= routeRegistrement


function communicationAvecLeBack(url){
    const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                console.log("Raw response:", this.responseText);

                const responseData = JSON.parse(this.responseText);
                console.log(responseData)
                for (let i=0; i<responseData.length; i++){
                    spanNom.innerHTML=responseData[i].nom
                    spanMaitre.innerHTML=responseData[i].maitre
                    //spanAge.innerHTML=responseData[i].age
                }
                
            } else if (this.readyState === XMLHttpRequest.DONE) {
                console.log("erreur de connexion de type "+this.readyState);
            }
        };
        xhr.open('GET', url, false);
        xhr.send();
}

communicationAvecLeBack(url)

function submitRegistrationForm(event) {
    event.preventDefault();
  
    const registrationForm = document.getElementById('registration-form');
    const registrationFormData = new FormData(registrationForm);
  
    fetch('/register', {
      method: 'POST',
      body: registrationFormData
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('User and pet registered successfully');
      } else {
        alert('Error registering user and pet');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }