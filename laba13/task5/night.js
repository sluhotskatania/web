let now = new Date();
let hour = now.getHours();

if (hour >= 23 || hour < 5) {
    console.log("Доброї ночі");
} else if (hour >= 5 && hour < 11) {
    console.log("Доброго ранку");
} else if (hour >= 11 && hour < 17) {
    console.log("Доброго дня");
} else {
    console.log("Доброго вечора");
}
