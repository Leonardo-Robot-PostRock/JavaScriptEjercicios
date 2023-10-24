const button = document.querySelector('.button1');

button.disabled = true;

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

console.log(inputTwo);

//Se adjuntan los elementos a los input
addMessageElementsToInput(inputOne, 'message-name', 'name-warning');
addMessageElementsToInput(inputTwo, 'message-password', 'password-warning');
addMessageElementsToInput(inputThree, 'message-email', 'email-warning');

//Validaciones para input password

const showWarningMessage = (messageElement, messageDisplayed) => {
	if (messageElement) {
		if (messageDisplayed) {
			messageElement.style.display = 'block';
			messageElement.textContent = `La contraseña debe tener almenos menos debe tener 1 mayúscula, al
            menos 1 minúscula, al menos 1 dígito numérico, longitud entre 8 y 16
        caracteres`;
		} else {
			messageElement.textContent = '';
			messageElement.style.display = 'none';
			messageElement.style.color = 'white';
		}
	}
};

const validPasswordMessage = (warningTitleElement, messageElement) => {
	warningTitleElement.innerHTML = 'Contraseña válida';
	showWarningMessage(messageElement, false);
	button.disabled = false;
};

const invalidPasswordMessage = (warningTitleElement, messageElement) => {
	warningTitleElement.innerHTML = 'La contraseña no cumple con los requisitos';
	showWarningMessage(messageElement, true);
	button.disabled = true;
};

const passwordValidation = () => {
	const passwordField = document.querySelector('#fpassword');
	const messageElement = document.querySelector('.message-password');
	const warningTitleElement = document.querySelector('.password-warning');

	passwordField.addEventListener('input', (event) => {
		const password = event.target.value;
		const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,16}$/;

		if (password.trim() === '') {
			messageElement.textContent = 'contraseña vacía';
			warningTitleElement.textContent = '';
			messageElement.style.color = 'red';
			button.disabled = true;
		} else if (regex.test(password)) {
			warningTitleElement.style.color = 'green';
			messageElement.style.color = 'green';
			validPasswordMessage(messageElement, warningTitleElement);
		} else {
			invalidPasswordMessage(messageElement, warningTitleElement);
			button.disabled = true;
			messageElement.style.color = 'red';
		}
	});
};
