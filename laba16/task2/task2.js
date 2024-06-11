const editable = document.getElementById('editable');
function editDivContent() {
    const newText = prompt("Введіть новий текст:");
    if (newText !== null) { 
        editable.textContent = newText;
    }
}
editable.addEventListener('click', editDivContent);