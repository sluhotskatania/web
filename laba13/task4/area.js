let side1 = parseFloat(prompt("Введіть довжину першої сторони трикутника:"));

if (isNaN(side1) || side1 <= 0) {
    console.log("Incorrect data");
} else {
    let side2 = parseFloat(prompt("Введіть довжину другої сторони трикутника:"));

    if (isNaN(side2) || side2 <= 0) {
        console.log("Incorrect data");
    } else {
        let side3 = parseFloat(prompt("Введіть довжину третьої сторони трикутника:"));

        if (isNaN(side3) || side3 <= 0) {
            console.log("Incorrect data");
        } else {
            if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
                let s = (side1 + side2 + side3) / 2;
                let area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

                console.log("Площа трикутника:", area.toFixed(3));

                if (side1 * side1 + side2 * side2 === side3 * side3 ||
                    side1 * side1 + side3 * side3 === side2 * side2 ||
                    side2 * side2 + side3 * side3 === side1 * side1) {
                    console.log("Цей трикутник є прямокутним.");
                } else {
                    console.log("Цей трикутник не є прямокутним.");
                }
            } else {
                console.log("Incorrect data");
            }
        }
    }
}
