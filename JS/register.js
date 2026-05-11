document.querySelectorAll('.toggle-password').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const input = document.getElementById(targetId);
        const eyeIcon = this.querySelector('.eye-icon');
        const eyeOffIcon = this.querySelector('.eye-off-icon');

        if (input.type === 'password') {
            input.type = 'text';
            eyeIcon.classList.add('hidden');
            eyeOffIcon.classList.remove('hidden');
        } else {
            input.type = 'password';
            eyeIcon.classList.remove('hidden');
            eyeOffIcon.classList.add('hidden');
        }
    });
});

const registerForm = document.getElementById('registerForm');
const paymentModal = document.getElementById('paymentModal');
const closeModal = document.getElementById('closeModal');

registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    
    const name = document.getElementById('username');
    if (name.value.trim() === '') {
        showError(name, 'Please enter your name');
        isValid = false;
    } else {
        clearError(name);
    }

    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        showError(email, 'Please enter a valid email');
        isValid = false;
    } else {
        clearError(email);
    }

    const password = document.getElementById('password');
    if (password.value.length < 6) {
        showError(password, 'Password must be at least 6 characters');
        isValid = false;
    } else {
        clearError(password);
    }

    const confirmPassword = document.getElementById('confirmPassword');
    if (confirmPassword.value !== password.value || confirmPassword.value === '') {
        showError(confirmPassword, 'Passwords do not match');
        isValid = false;
    } else {
        clearError(confirmPassword);
    }

    // AQUÍ ESTÁ LA SOLUCIÓN
    if (isValid) {
        if (paymentModal) {
            paymentModal.classList.add('active');
        } else {
            registerForm.submit(); // ENVÍA EL FORMULARIO
        }
    }
});

function showError(input, message) {
    input.classList.add('error');
    const errorSpan = input.closest('.input-group').querySelector('.error-message');
    errorSpan.textContent = message;
    errorSpan.classList.add('show');
}

function clearError(input) {
    input.classList.remove('error');
    const errorSpan = input.closest('.input-group').querySelector('.error-message');
    errorSpan.classList.remove('show');
}

document.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('input', function() {
        this.classList.remove('error');
        this.closest('.input-group').querySelector('.error-message').classList.remove('show');
    });
});

// para evitar errores
if (closeModal && paymentModal) {
    closeModal.addEventListener('click', function() {
        paymentModal.classList.remove('active');
    });

    paymentModal.addEventListener('click', function(e) {
        if (e.target === paymentModal) {
            paymentModal.classList.remove('active');
        }
    });
}

// FORMATO TARJETA 
const cardNumber = document.getElementById('cardNumber');
if (cardNumber) {
    cardNumber.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s/g, '').replace(/[^0-9]/gi, '');
        let formattedValue = value.match(/.{1,4}/g)?.join(' ') || '';
        e.target.value = formattedValue;
    });
}

const expiryDate = document.getElementById('expiryDate');
if (expiryDate) {
    expiryDate.addEventListener('input', function(e) {
        let value = e.target.value.replace(/[^0-9]/g, '');
        if (value.length >= 2) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        e.target.value = value;
    });
}

const cvv = document.getElementById('cvv');
if (cvv) {
    cvv.addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });
}

const paymentForm = document.getElementById('paymentForm');
const successMessage = document.getElementById('successMessage');

if (paymentForm) {
    paymentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;

        const cardName = document.getElementById('cardName');
        if (cardName.value.trim() === '') {
            showError(cardName, 'Please enter the cardholder name');
            isValid = false;
        } else {
            clearError(cardName);
        }

        const cardNum = document.getElementById('cardNumber');
        const cleanCardNum = cardNum.value.replace(/\s/g, '');
        if (cleanCardNum.length < 13 || cleanCardNum.length > 19) {
            showError(cardNum, 'Please enter a valid card number');
            isValid = false;
        } else {
            clearError(cardNum);
        }

        const expiry = document.getElementById('expiryDate');
        const expiryRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
        if (!expiryRegex.test(expiry.value)) {
            showError(expiry, 'Invalid date format (MM/YY)');
            isValid = false;
        } else {
            clearError(expiry);
        }

        const cvvInput = document.getElementById('cvv');
        if (cvvInput.value.length < 3 || cvvInput.value.length > 4) {
            showError(cvvInput, 'CVV must be 3 or 4 digits');
            isValid = false;
        } else {
            clearError(cvvInput);
        }

        if (isValid) {
            const payBtn = paymentForm.querySelector('.pay-btn');
            payBtn.classList.add('processing');
            
            setTimeout(() => {
                paymentModal.classList.remove('active');
                if (successMessage) {
                    successMessage.classList.add('show');
                }
                payBtn.classList.remove('processing');

                // ENVÍA EL FORMULARIO 
                registerForm.submit();

            }, 2000);
        }
    });
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && paymentModal) {
        paymentModal.classList.remove('active');
    }
});