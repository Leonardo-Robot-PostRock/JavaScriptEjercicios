const button = document.querySelector('.button1');

button.style.color = 'gray';

const createMessageElements = () => {
	const warningTitleElement = document.createElement('h6');
	const messageElement = document.createElement('div');
	warningTitleElement.classList.add('warning-title');
	messageElement.classList.add('message');

	return { messageElement, warningTitleElement };
};

const addMessageElementsToInput = (
	inputElement,
	classMessage,
	classWarningTitle
) => {
	const { messageElement, warningTitleElement } = createMessageElements();

	messageElement.classList.add(classMessage);
	warningTitleElement.classList.add(classWarningTitle);
	inputElement.append(warningTitleElement);
	inputElement.append(messageElement);
};

const inputOne = document.querySelector('.input-one');
const inputTwo = document.querySelector('.input-two');
const inputThree = document.querySelector('.input-three');

//Se adjuntan los elementos a los input
addMessageElementsToInput(inputOne, 'message-name', 'name-warning');
addMessageElementsToInput(inputTwo, 'message-password', 'password-warning');
addMessageElementsToInput(inputThree, 'message-email', 'email-warning');

//Validaciones para input password
const showWarningMessage = (messageElement, messageDisplayed, message) => {
	if (messageElement) {
		if (messageDisplayed) {
			messageElement.style.display = 'block';
			messageElement.textContent = message;
		} else {
			messageElement.textContent = '';
			messageElement.style.display = 'none';
			messageElement.style.color = 'red';
		}
	}
};

const validData = (warningTitleElement, messageElement, message) => {
	warningTitleElement.innerHTML = message;
	showWarningMessage(messageElement, false, message);
	button.disabled = false;
};

const invalidData = (messageElement, warningTitleElement, title, message) => {
	warningTitleElement.innerHTML = title;
	showWarningMessage(messageElement, true, message);
	button.disabled = true;
};

//Validar que el input.value tenga primer letra mayúscula y las demás minúscula por cada palabra
const todasLasPalabrasConMayuscula = (cadena) => {
	const palabras = cadena.split(' ');
	const regex = /^[A-Z][a-záéíóúüñÁÉÍÓÚÜÑ\s-]*$/;

	for (const palabra of palabras) {
		if (!regex.test(palabra)) {
			return false;
		}
	}
	return true;
};

//Variables booleanas
let isNameValidated = false;
let isPasswordValidated = false;
let isEmailValidated = false;
let isChecking = false;

// Validación de NOMBRE
const isNameValid = () => {
	const nameField = document.querySelector('#fname');
	const messageElement = document.querySelector('.message-name');
	const warningTitleElement = document.querySelector('.name-warning');
	const name = nameField.value;

	if (name.trim() === '') {
		warningTitleElement.style.color = 'red';
		invalidData(messageElement, warningTitleElement, 'Campo requerido');
		showWarningMessage(messageElement, true, 'Ingrese un nombre por favor');
		isNameValidated = false;
	} else if (todasLasPalabrasConMayuscula(name)) {
		warningTitleElement.style.color = 'green';
		messageElement.style.color = 'green';
		validData(warningTitleElement, messageElement, 'Nombre válido');
		isNameValidated = true;
	} else {
		invalidData(
			messageElement,
			warningTitleElement,
			'El nombre ingresado no cumple con los requisitos',
			'Los nombres y apellidos deben comenzar en mayúscula, precedidos de minúsculas'
		);
		warningTitleElement.style.color = 'red';
		messageElement.style.color = '#8c8c8c';
		isNameValidated = false;
	}
	activeButton();
};

//Mostrar Contraseña
const passwordField = document.getElementById('fpassword');
const eyeIcon = document.querySelector('.password-toggle');

eyeIcon.addEventListener('click', togglePassword);

function togglePassword() {
	if (passwordField.type === 'password') {
		passwordField.type = 'text';
		eyeIcon.textContent = 'visibility';
	} else {
		passwordField.type = 'password';
		eyeIcon.textContent = 'visibility_off';
	}
}

// Validación de PASSWORD
const isPasswordValid = () => {
	const passwordField = document.querySelector('#fpassword');
	const messageElement = document.querySelector('.message-password');
	const warningTitleElement = document.querySelector('.password-warning');
	const password = passwordField.value;
	const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,16}$/;

	if (password.trim() === '') {
		showWarningMessage(messageElement, true, 'Contraseña vacía');
		warningTitleElement.textContent = '';
		messageElement.style.color = 'red';
		isPasswordValidated = false;
	} else if (regex.test(password)) {
		warningTitleElement.style.color = 'green';
		messageElement.style.color = 'green';
		validData(warningTitleElement, messageElement, 'Contraseña válida');
		isPasswordValidated = true;
	} else {
		invalidData(
			messageElement,
			warningTitleElement,
			'La contraseña no cumple con los requisitos',
			'La contraseña debe tener al menos una mayúscula, al menos una minúscula, al menos un dígito numérico, longitud entre 8 y 16 caracteres'
		);
		warningTitleElement.style.color = 'red';
		messageElement.style.color = '#8c8c8c';
		isPasswordValidated = false;
	}
	activeButton();
};

//Validación DE EMAIL
const isEmailValid = () => {
	const emailField = document.querySelector('#femail');
	const messageElement = document.querySelector('.message-email');
	const warningTitleElement = document.querySelector('.email-warning');
	const email = emailField.value;
	const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

	if (email.trim() === '') {
		showWarningMessage(messageElement, true, 'Correo electrónico vacío');
		warningTitleElement.textContent = '';
		messageElement.style.color = 'red';
		isEmailValidated = false;
	} else if (emailRegex.test(email)) {
		warningTitleElement.style.color = 'green';
		messageElement.style.color = 'green';
		validData(warningTitleElement, messageElement, 'Correo electrónico válido');
		isEmailValidated = true;
	} else {
		invalidData(
			messageElement,
			warningTitleElement,
			'El correo electrónico no cumple con los requisitos',
			'Ingrese un correo electrónico válido'
		);
		warningTitleElement.style.color = 'red';
		messageElement.style.color = '#8c8c8c';
		isEmailValidated = false;
	}
	activeButton();
};

// Validación de CHECKBOX
const isChecked = () => {
	const checkbox = document.querySelector('#checkbox');
	checkbox.addEventListener('change', (event) => {
		isChecking = event.target.checked;
		activeButton();
	});
};

const activeButton = () => {
	if (
		isNameValidated &&
		isPasswordValidated &&
		isEmailValidated &&
		isChecking
	) {
		button.disabled = false;
		button.style.color = 'white';
	} else {
		button.disabled = true;
		button.style.color = 'gray';
	}
};

function handleFormSubmit(event) {
	event.preventDefault();
	if (
		isNameValidated &&
		isPasswordValidated &&
		isEmailValidated &&
		isChecking
	) {
		event.target.submit();
	}
}
// Agregar event listeners a los campos para activar las validaciones cuando sea necesario
document.addEventListener('DOMContentLoaded', () => {
	isChecked();
});

// Activar las validaciones cuando el usuario interactúe
// con los campos de entrada.

document.querySelector('#fname').addEventListener('input', isNameValid);
document.querySelector('#fpassword').addEventListener('input', isPasswordValid);
document.querySelector('#femail').addEventListener('input', isEmailValid);
document.querySelector('#checkbox').addEventListener('change', isChecked);
