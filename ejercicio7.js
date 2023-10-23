const message = document.querySelector('#mensaje');
const button = document.querySelector('.button1');
const warningTitle = document.querySelector('#warning-title');

const warningMessage = () => {
	warningTitle.style.display = 'block';
	warningTitle.textContent = `La contraseña debe tener almenos menos debe tener 1 mayúscula, al
	menos 1 minúscula, al menos 1 dígito numérico, longitud entre 8 y 16
	caracteres`;
	button.disabled = true;
};

const warningMessageRemoved = () => {
	warningTitle.style.display = 'none';
	button.disabled = false;
};

function showWarningMessage(messageDisplayed) {
	if (messageDisplayed) {
		warningMessage();
	} else {
		warningMessageRemoved();
	}
}

const validPasswordMessage = () => {
	message.innerHTML = 'Contraseña válida';
	message.style.color = 'green';
	showWarningMessage(false);
};

const invalidPasswordMessage = () => {
	message.innerHTML = 'La contraseña no cumple con los requisitos';
	message.style.color = 'red';
	showWarningMessage(true);
};

const passwordValidation = () => {
	const password = document.querySelector('#fpassword').value;
	const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,16}$/;

	if (regex.test(password)) {
		validPasswordMessage();
	} else {
		invalidPasswordMessage();
	}
};