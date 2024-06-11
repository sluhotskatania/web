let numeric = prompt ("Please enter number");
if (!isNaN(numeric)) {
    if (numeric > 0 && numeric % 2 === 0) {
        console.log("The number is even positive.");
    } else {
        console.log("The number is not even positive.");
    }

    if (numeric % 7 === 0) {
        console.log("The number is a multiple of 7.");
    } else {
        console.log("The number is not a multiple of 7.");
    }
} else {
    console.log("Incorrect number entered.");
}