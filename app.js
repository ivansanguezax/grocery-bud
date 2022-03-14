// Seleccionar los items

const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

//opciones para editar

let editElement;
let editFlag = false;
let editID = "";

// Eventos

//Enviar el formulario
form.addEventListener("submit", addItem);

//Limpiar el formulario
clearBtn.addEventListener("click", clearItems);

//Items onload



// Funciones

function addItem(e) {
    const value = grocery.value;
    const id = new Date().getTime().toString();

    if(value !== "" && !editFlag ){
        const element = document.createElement("article");
        let attr = document.createAttribute("data-id");

        attr.value = id;
        element.classList.add("grocery-item");
        element.innerHTML = `
                <p class="title">${value}</p>
                <div class= "btn-container">

                    <button type= "button" class= "edit-btn">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>

                    <button type= "button" class= "delete-btn">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
        `
    }

}

function clearItems(){}