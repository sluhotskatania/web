let isAdult = prompt("Вам виповнилося 18 років? (Так/Ні)");
if(isAdult.toLowerCase()  === "так"){
    console.log( "Ви досягли повнолітнього віку");
}
else if (isAdult.toLowerCase() === "ні") {
    console.log("Ви ще надто молоді");
} else {
    console.log("Будь ласка, введіть 'Так' або 'Ні'");
}