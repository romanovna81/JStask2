let userCardNum = prompt(`Введите номер вашей карты (12 знаков)`);
s = userCardNum.replace(userCardNum.slice(0, 8), "********");
document.write(`<h3>Последние 4 цифры вашей карты:${s}  </i></h3>`);