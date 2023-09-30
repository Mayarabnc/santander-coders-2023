// Lista de dinossauros (inicialmente vazia)
let dinosaurs = [];

// Inicializa a lista de dinossauros a partir do Local Storage (se existir)
const storedDinosaurs = JSON.parse(localStorage.getItem('dinosaurs'));
if (storedDinosaurs) {
    dinosaurs = storedDinosaurs;
    updateDinosaurList();
}

// Função para adicionar um dinossauro
function addDinosaur(name, especie, data, image, dieta) {
    const dinosaur = { name, especie, data, image, dieta};
    dinosaurs.push(dinosaur);
    updateDinosaurList();
    clearForm();
}

function updateDinosaurList() {
    const list = document.getElementById('dinosaur-list');
    list.innerHTML = '';
    for (let index = 0; index < dinosaurs.length; index++) {
        const dinosaur = dinosaurs[index];
        const listItem = document.createElement('li');
        listItem.innerHTML = `
        <div style="background:rgb(188, 188, 188); padding: 4em">
        <strong>${dinosaur.name}</strong><br>
        <strong>Espécie:</strong> ${dinosaur.especie}<br>
        <strong>Data de Existência:</strong> ${dinosaur.data} milhões de anos<br>
        <img src="${dinosaur.image}" alt="${dinosaur.name}"><br>
         <strong>Dieta:</strong> ${dinosaur.dieta}<br><br>
        <button id="edit-button" onclick="editDinosaur(${index})">Editar</button>
        <button id="delete-button" onclick="deleteDinosaur(${index})">Excluir</button>
        </div>
        `;
        const deleteAllButton = document.getElementById('delete-all-button');
        deleteAllButton.style.display = dinosaurs.length >= 3 ? 'block' : 'none';
        list.appendChild(listItem);
    }

    localStorage.setItem('dinosaurs', JSON.stringify(dinosaurs));
}


// Função para editar um dinossauro
function editDinosaur(index) {
    const dinosaur = dinosaurs[index];
    document.getElementById('name').value = dinosaur.name;
    document.getElementById('especie').value = dinosaur.especie;
    document.getElementById('data').value = dinosaur.data;
    document.getElementById('image').value = dinosaur.image;

    // Seleciona o botão de opção de dieta corretamente com base no valor
    const dieta = dinosaur.dieta;
    const dietaOptions = document.getElementsByName('dieta');
    for (let i = 0; i < dietaOptions.length; i++) {
        if (dietaOptions[i].value === dieta) {
            dietaOptions[i].checked = true;
        }
    }

    // Define o índice do dinossauro sendo editado em um atributo personalizado
    const updateButton = document.getElementById('update-button');
    updateButton.style.display = 'block';
    updateButton.setAttribute('data-index', index);

    // Esconde o botão de envio (submit) durante a edição
    document.getElementById('submit-button').style.display = 'none';

    // Mostra o botão de cancelar
    document.getElementById('cancel-button').style.display = 'block';
}

// Função para atualizar um dinossauro
function updateDinosaur() {
    const index = document.getElementById('update-button').getAttribute('data-index');
    const name = document.getElementById('name').value;
    const especie = document.getElementById('especie').value;
    const data = document.getElementById('data').value;
    const image = document.getElementById('image').value;

    // Seleciona o valor da dieta corretamente
    const dietaElement = document.querySelector('input[name="dieta"]:checked');
    const dieta = dietaElement ? dietaElement.value : '';

    dinosaurs[index] = { name, especie, data, image, dieta };
    updateDinosaurList();
    clearForm();

    // Mostra o botão de envio (submit) após a atualização
    document.getElementById('submit-button').style.display = 'block';
    document.getElementById('submit-button').style.margin = 'auto';

    // Esconde o botão de atualização (update)
    document.getElementById('update-button').style.display = 'none';

    // Esconde o botão de cancelar
    document.getElementById('cancel-button').style.display = 'none';
}

// Função para excluir um dinossauro
function deleteDinosaur(index) {
    const confirmDelete = confirm("Eita, tem certeza que esse dinossauro vai ter um meteoro privado?");
    
    if (confirmDelete) {
        dinosaurs.splice(index, 1);
        updateDinosaurList();
    } else {
        
    }
}

// Função para limpar o formulário
function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('especie').value = '';
    document.getElementById('data').value = '';
    document.getElementById('image').value = '';
    document.getElementsByTagName('dieta').value = '';
}

// Adiciona evento de envio de formulário
document.getElementById('dinosaur-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const especie = document.getElementById('especie').value;
    const data = document.getElementById('data').value;
    const image = document.getElementById('image').value;
const dietaElement = document.querySelector('input[name="dieta"]:checked');
    
    if (name && especie && data && image && dieta) {
      const dieta = dietaElement.value;
        addDinosaur(name, especie, data, image, dieta);
    } else {
        alert('Preencha todos os campos.');
    }
});

// Adiciona evento de atualização de dinossauro
document.getElementById('update-button').addEventListener('click', updateDinosaur);

// Obtém o elemento de entrada de data por seu ID
var dataInput = document.getElementById("data");

// Adiciona um ouvinte de evento para a entrada de data
dataInput.addEventListener("input", function () {
    // Obtém o valor do campo de texto
    var inputValue = dataInput.value;
    
    //Expressão regular para validar se o valor é um ano válido
    var yearPattern = /^(?:\d{2,3})$/; // Aceita apenas de 2 a 3 dígitos numéricos
    
    if (!yearPattern.test(inputValue)) {
        // Se o valor não corresponder ao padrão, exiba uma mensagem de erro
        dataInput.setCustomValidity("Por favor, insira um ano válido (exemplo: 199).");
    } else {
        // Se o valor for válido, limpe qualquer mensagem de erro
        dataInput.setCustomValidity("");
    }
});


//Toca o texto do botão delete all
const button = document.getElementById('delete-all-button');
const normalText = 'O meteoro chegou : (';
const hoverText = 'Ahhhhhh';

button.addEventListener('mouseover', function () {
    button.textContent = hoverText;
});

button.addEventListener('mouseout', function () {
    button.textContent = normalText;
});

document.getElementById('delete-all-button').addEventListener('click', function () {
    deleteAllDinosaurs();
});

function deleteAllDinosaurs() {
    dinosaurs = [];
    updateDinosaurList();
}

function toggleDeleteAllButton() {
    const deleteAllButton = document.getElementById('delete-all-button');
    if (dinosaurs.length === 0) {
        deleteAllButton.style.display = 'none';
    } else {
        deleteAllButton.style.display = 'block';
    }
}

function deleteAllDinosaurs() {
    while (true) {
        const confirmDeleteAll = confirm("Ahhhhh, a gente vai morrer!!!!");

        if (confirmDeleteAll) {
            dinosaurs = [];
            updateDinosaurList();
            toggleDeleteAllButton();
            break; // Sai do loop se o usuário confirmar
        } else {
            const confirmUfa = confirm("Ufa! Essa foi por pouco");
            
            if (!confirmUfa) {
                // O usuário clicou em "Cancelar" na segunda confirmação, então a primeira mensagem será exibida novamente no próximo loop
                continue;
            } else {
                break; // Sai do loop se o usuário confirmar a segunda mensagem
            }
        }
    }
}

//cancela edição
function cancelEdit(){
  clearForm();
  document.getElementById('submit-button').style.display = 'block';
  document.getElementById('submit-button').style.margin = 'auto';
  document.getElementById('update-button').style.display = 'none';
  document.getElementById('cancel-button').style.display = 'none';
}
document.getElementById('cancel-button').addEventListener('click', cancelEdit);