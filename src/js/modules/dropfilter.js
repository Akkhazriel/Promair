export let select = function() {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__body-item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle);
    });
    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose);
    });

    function selectToggle() {
        this.parentElement.classList.toggle('active');
    }

    function selectChoose() {
        let text = this.innerText;
        let currentText = this.closest('.select').querySelector('.select__header');
        let select = this.closest('.select');
        currentText.innerText = text;
        select.classList.remove('active');
    }
}