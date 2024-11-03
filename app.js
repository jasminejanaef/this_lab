function solve(area, vol, input) { 

    const dropdownBtn = document.getElementById('dropdown');
    const dropdownUl = document.getElementById('dropdown-ul')
    const box = document.getElementById('box');




    dropdownBtn.addEventListener('click', function () {
        switch (dropdownUl.style.display) {
            case '':
            case "none":
                dropdownUl.style.display = 'block';
                break;
            case 'block':
                dropdownUl.style.display = "none";
                box.style.background = '#727070';
                break;
        }
    })

    dropdownUl.addEventListener('click', function (e) {
        box.style.backgroundColor = e.target.textContent
    })









}












 