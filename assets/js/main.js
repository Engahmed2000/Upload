/*=============== SHOW/HIDE PASSWORD FOR LOGIN ===============*/
const passwordAccess = (passwordFieldId, eyeIconId) => {
    const passwordInput = document.getElementById(passwordFieldId),
          eyeIcon = document.getElementById(eyeIconId);

    eyeIcon.addEventListener('click', () => {
        // Toggle password visibility
        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';

        // Toggle eye icon
        eyeIcon.classList.toggle('ri-eye-fill');
        eyeIcon.classList.toggle('ri-eye-off-fill');
    });
};

// Initialize password visibility toggle for login
passwordAccess('password', 'loginPassword');

/*=============== SHOW/HIDE PASSWORD FOR CREATE ACCOUNT ===============*/
const passwordRegister = (passwordFieldId, eyeIconId) => {
    const passwordInput = document.getElementById(passwordFieldId),
          eyeIcon = document.getElementById(eyeIconId);

    eyeIcon.addEventListener('click', () => {
        // Toggle password visibility
        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';

        // Toggle eye icon
        eyeIcon.classList.toggle('ri-eye-fill');
        eyeIcon.classList.toggle('ri-eye-off-fill');
    });
};

// Initialize password visibility toggle for account creation
passwordRegister('passwordCreate', 'loginPasswordCreate');

/*=============== TOGGLE BETWEEN LOGIN & CREATE ACCOUNT FORMS ===============*/
const loginAccessRegister = document.getElementById('loginAccessRegister'),
      buttonRegister = document.getElementById('loginButtonRegister'),
      buttonAccess = document.getElementById('loginButtonAccess'),
      buttonEnd = document.getElementById('loginButtonEnd');

// Redirect to upload page on button click
buttonEnd.addEventListener('click', () => {
    loginAccessRegister.classList.add('active');
    window.location = 'upload.html';
});

// Uncomment and use these if you want to toggle between login and register forms
buttonRegister.addEventListener('click', () => {
    loginAccessRegister.classList.add('active');
});

buttonAccess.addEventListener('click', () => {
    loginAccessRegister.classList.remove('active');
});

