window.addEventListener('load', () => {
    console.log("aca estamos perro")
    $inputs = document.querySelectorAll('.data');
    $smalls = document.querySelectorAll('small');
    $form = document.querySelector('#form');

    regExName = /^[a-zA-Z\sñáéíóúü ]*$/;
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    // regExImage = /(.jpg|.jpeg|.png|.gif|.webp)$/i;
    date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
    let validationErrors = false;

    for (let i = 0; i < $inputs.length; i++) {
        $inputs[i].addEventListener('change', () => {
            switch ($inputs[i].name) {
                case 'name':
                    if (!regExName.test($inputs[i].value.trim()) || $inputs[i].value.length < 3 || $inputs[i].value.length > 10) {
                        $smalls[i].innerHTML = 'Complete con su primer nombre, entre 3 y 10 letras.';
                        validationErrors = true; 
                    } else {
                        $smalls[i].innerHTML = '';
                        validationErrors = false;
                    } 
                break;
                case 'lastname':
                    if (!regExName.test($inputs[i].value.trim()) || $inputs[i].value.length < 3 || $inputs[i].value.length > 15) {
                        $smalls[i].innerHTML = 'Complete con su primer apellido, entre 3 y 15 letras.';
                        validationErrors = true; 
                    } else {
                        $smalls[i].innerHTML = '';
                        validationErrors = false;
                   } 
                break;
                case 'date':
                    if (!date_regex.test($inputs[i].value.trim())) {
                        $smalls[i].innerHTML = 'formato invalido';
                        validationErrors = true; 
                    } else {
                        $smalls[i].innerHTML = '';
                        validationErrors = false;
                   } 
                break;



                case 'email':
                    if (!regExEmail.test($inputs[i].value.trim())) {
                        $smalls[i].innerHTML = 'Debe ingresar un email válido.';
                        validationErrors = true; 
                    } else {
                        $smalls[i].innerHTML = '';
                        validationErrors = false;
                    } 
                break;
                case 'password':
                    if (!regExPass.test($inputs[i].value.trim())) {
                        $smalls[i].innerHTML = 'La contraseña debe tener: entre 6 y 12 caracteres, al menos una mayúscula, una minúscula y un número.';
                        validationErrors = true; 
                    } else {
                        $smalls[i].innerHTML = '';
                        validationErrors = false;
                    } 
                break;
                case 'pass2':
                    if ($inputs[i].value.trim() != $inputs[i-1].value.trim()) {
                        $smalls[i].innerHTML = 'Debe repetir la contraseña anterior.';
                        validationErrors = true; 
                    } else {
                        $smalls[i].innerHTML = '';
                        validationErrors = false;
                    } 
                break;
                
            }
        });    
    }

    
});