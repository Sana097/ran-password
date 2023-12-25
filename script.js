function generatePassword() {
    const length = 12; 
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById("passwordOutput").value = password;
}

function copyToClipboard() {
    const passwordOutput = document.getElementById("passwordOutput");
    passwordOutput.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}