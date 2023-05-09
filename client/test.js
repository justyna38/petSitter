function showAnimalInfo(event) {
  event.preventDefault();
  const humanForm = document.getElementById('human-form');
  const animalInfoContainer = document.getElementById('animal-info-container');

  // Serialize human form data
  const formData = new FormData(humanForm);
  const userData = {};
  for (const [key, value] of formData.entries()) {
    userData[key] = value;
  }

  // Save serialized data to the animal form
  const animalForm = document.getElementById('animal-form');
  for (const [key, value] of Object.entries(userData)) {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = value;
    animalForm.appendChild(input);
  }

  humanForm.style.display = 'none';
  animalInfoContainer.style.display = 'block';
}

 // Liste d'animaux et leurs races
        const animals = [
          {
            name: 'Chien',
            races: ['Labrador', 'Berger Allemand', 'Golden Retriever', 'Bulldog', 'Beagle']
          },
          {
            name: 'Chat',
            races: ['Siamois', 'Persan', 'Maine Coon', 'Sphynx', 'Bengal']
          }
        ];
    
        const animalSelect = document.getElementById('animal-select');
        const raceSelect = document.getElementById('race-select');
    
        // Remplir le selecteur d'animaux
        function fillAnimalSelect() {
          animals.forEach((animal, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = animal.name;
            animalSelect.appendChild(option);
          });
        }
    
        // Mettre à jour les races en fonction de l'animal sélectionné
        function updateRaces() {
          const selectedIndex = animalSelect.value;
          const selectedAnimal = animals[selectedIndex];
    
          // Vider le selecteur de races
          raceSelect.innerHTML = '';
    
          // Remplir le selecteur de races avec les nouvelles options
          selectedAnimal.races.forEach(race => {
            const option = document.createElement('option');
            option.value = race;
            option.textContent = race;
            raceSelect.appendChild(option);
          });
        }
    
        // Remplir le selecteur d'animaux et mettre à jour les races lors du chargement de la page
        document.addEventListener('DOMContentLoaded', () => {
          fillAnimalSelect();
          updateRaces();
        });

        async function submitRegistrationForm(event) {
          event.preventDefault();
        
         
  const humanFormElement = document.getElementById('human-form');
  const humanFormData = new FormData(humanFormElement);

  const animalFormElement = document.getElementById('animal-form');
  const animalFormData = new FormData(animalFormElement);

  const mergedFormData = new FormData();
  for (const [key, value] of humanFormData.entries()) {
    mergedFormData.append(key, value);
  }
  for (const [key, value] of animalFormData.entries()) {
    mergedFormData.append(key, value);
  }

  try {
    const response = await fetch('/register', {
      method: 'POST',
      body: mergedFormData,
    });

    if (!response.ok) {
      throw new Error('Error registering user and pet');
    }

    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error('Error registering user and pet', err);
  }
}