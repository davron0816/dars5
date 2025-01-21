let messsage = prompt(`Ismingizni kiriting`);
let choise = prompt(`${messsage} bironta,harf kiriting`);
// alert (`${messsage} ismining ichida ${choise} harifi mavjud`);

if(messsage.toLowerCase().includes(choise.toLowerCase())){
    alert (`Szni ismingizni ichida ${choise} harifi mavjud`);
}
else{
    alert (`Szni ismingizni ichida ${choise} harifi  mavjud emas`);
    
}
