function submiter() {
    var ageInput = document.getElementById("age");
    var weightInput = document.getElementById("weight");
    var genderSelect = document.getElementById("gender");
    var resultElement = document.getElementById("result");
    var errorElement = document.getElementById("error");

    var age = parseInt(ageInput.value);
    var weight = parseFloat(weightInput.value);
    var gender = genderSelect.value;

    resultElement.textContent = "";
    errorElement.textContent = "";

    if (!gender || isNaN(age) || isNaN(weight)) {
        errorElement.textContent = "Alle felt må fylles ut.";
        return;
    }

    var weightClasses = {
        "DAMER": [43, 47, 52, 57, 63, 69, 76, 84, "84+"],
        "HERRER": [53, 59, 66, 74, 83, 93, 105, 120, "120+"]
    };

    var groups = {
        "DAMER": {
            "UNGDOM 14-18": [172.5, 190, 207.5, 225, 242.5, 252.5, 267.5, 277.5, 285],
            "JUNIOR 19-23": [222.5, 245, 267.5, 287.5, 310, 325, 345, 357.5, 367.5],
            "ÅPEN KLASSE": [247.5, 272.5, 297.5, 320, 345, 362.5, 382.5, 397.5, 407.5],
            "VETERAN 40-49": [172.5, 190, 207.5, 225, 242.5, 252.5, 267.5, 277.5, 285],
            "VETERAN 50-59": [172.5, 190, 207.5, 225, 242.5, 252.5, 267.5, 277.5, 285],
            "VETERAN 60-69": [155, 170, 185, 202.5, 217.5, 225, 240, 247.5, 255],
            "VETERAN +70": [137.5, 150, 165, 180, 192.5, 200, 212.5, 220, 227.5]
        },
        "HERRER": {
            "UNGDOM 14-18": [300, 317.5, 360, 382.5, 420, 445, 477.5, 500, 512.5],
            "JUNIOR 19-23": [387.5, 410, 462.5, 490, 540, 572.5, 615, 642.5, 657.5],
            "ÅPEN KLASSE": [430, 455, 515, 545, 600, 635, 682.5, 715, 730],
            "VETERAN 40-49": [300, 317.5, 360, 382.5, 420, 445, 477.5, 500, 512.5],
            "VETERAN 50-59": [300, 317.5, 360, 382.5, 420, 445, 477.5, 500, 512.5],
            "VETERAN 60-69": [270, 285, 322.5, 342.5, 377.5, 400, 427.5, 450, 460],
            "VETERAN +70": [240, 252.5, 287.5, 305, 335, 355, 380, 400, 410]
        }
    };

    var ageGroup = "";
    if (age >= 14 && age <= 18) {
        ageGroup = "UNGDOM 14-18";
    } else if (age >= 19 && age <= 23) {
        ageGroup = "JUNIOR 19-23";
    } else if (age >= 24 && age <= 39) {
        ageGroup = "ÅPEN KLASSE";
    } else if (age >= 40 && age <= 49) {
        ageGroup = "VETERAN 40-49";
    } else if (age >= 50 && age <= 59) {
        ageGroup = "VETERAN 50-59";
    } else if (age >= 60 && age <= 69) {
        ageGroup = "VETERAN 60-69";
    } else if (age >= 70) {
        ageGroup = "VETERAN +70";
    }

    var weightIndex = -1;
    for (var i = 0; i < weightClasses[gender].length; i++) {
        if (weight <= weightClasses[gender][i]) {
            weightIndex = i;
            break;
        }
    }

    if (weightIndex === -1) {
        weightIndex = weightClasses[gender].length - 1; 
    }

    // Finn den riktige vektklassen basert på kalkulert informasjon
    var weightLimit = groups[gender][ageGroup][weightIndex];

    // Vis resultat i resultat p elementet
    resultElement.textContent = "Du hører til aldersgruppen " + ageGroup + " med en vektklasse på " + weightLimit + "KG.";
}
