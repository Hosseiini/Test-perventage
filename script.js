// percentage catcher online!




document.querySelector(".check").addEventListener("click", function percentage() {

    const correctNumber = Number(document.querySelector(".correct").value);

    const wrongNumber = Number(document.querySelector(".wrong").value);

    const totalNumber = Number(document.querySelector(".total").value);


    const formula = ((3 * correctNumber - wrongNumber) / (3 * totalNumber)) * 100

    if (
        correctNumber >= 0
        &&
        wrongNumber >= 0
        &&
        totalNumber >= correctNumber
        &&
        totalNumber >= wrongNumber
    ) {
        document.querySelector(".percent").innerHTML =
            parseFloat(formula.toFixed(1)) + "%"

    } else if (totalNumber == 0) {
        document.querySelector(".percent").innerHTML = "The total value must not be zero"

    } else if (correctNumber > totalNumber) {
        document.querySelector(".percent").innerHTML = "The correct value is larger"

    } else if (wrongNumber > totalNumber) {
        document.querySelector(".percent").innerHTML = "The wrong value is larger"
    }
});

document.querySelector(".reset").addEventListener("click", function () {
    location.reload("correct", "wrong", "total", "percent");
})
