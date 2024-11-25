
const btn = document.getElementById("btn");

btn.onclick = function () {
    let min = document.getElementById("min");
    let max = document.getElementById("max");
    if (document.getElementById("tc").checked) {
        if (min.value.trim() == "" && max.value.trim() == "") {
            window.alert("No input found, Assigning default values. MIN: 0, MAX: 10");
            min = 0;
            max = 10;
            let a = Math.round(Math.random() * (max - min) + min);
            document.getElementById("number").textContent = a;
        }
        else if (min.value.trim() == "") {
            window.alert("No MIN input found, a default value 0 will be assigned");
            min = 0;
            max = Number(max.value);
            let a = Math.round(Math.random() * (max - min) + min);
            document.getElementById("number").textContent = a;
        }
        else if (max.value.trim() == "") {
            window.alert("No MAX input found, a default value 10 will be assigned");
            min = Number(min.value);
            max = 10;
            let a = Math.round(Math.random() * (max - min) + min);
            document.getElementById("number").textContent = a;
        }
        else {
            min = Number(min.value);
            max = Number(max.value);
            let a = Math.round(Math.random() * (max - min) + min);
            document.getElementById("number").textContent = a;
        }
    }
    else {
        window.alert(`Ageee T&C`);
    }
}
