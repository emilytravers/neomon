function calculateForm() {

//for each question, get the number of the choice then add to array
arrayAnswers = [];

var answer1 = document.querySelector('input[name="question1"]:checked').value;
arrayAnswers.push(Number(answer1))

var answer2 = document.querySelector('input[name="question2"]:checked').value;
arrayAnswers.push(Number(answer2))

var answer3 = document.querySelector('input[name="question3"]:checked').value;
arrayAnswers.push(Number(answer3))

var answer4 = document.querySelector('input[name="question4"]:checked').value;
arrayAnswers.push(Number(answer4))

var answer5 = document.querySelector('input[name="question5"]:checked').value;
arrayAnswers.push(Number(answer5))

var answer6 = document.querySelector('input[name="question6"]:checked').value;
arrayAnswers.push(Number(answer6))

var answer7 = document.querySelector('input[name="question7"]:checked').value;
arrayAnswers.push(Number(answer7))

var answer8 = document.querySelector('input[name="question8"]:checked').value;
arrayAnswers.push(Number(answer8))

console.log(arrayAnswers);

calculateDigimon(arrayAnswers);

}

function calculateDigimon(array){
    var popular = math.mode(array);
    console.log(popular);

    if (popular[0] == 5){
        console.log("Liminal");
        alert("Liminal");
    }
    if (popular[1] != null){
        if (popular[0] == 1){
            if (popular[1] == 5){
                console.log("Celestial");
                alert("Celestial");
                }
            if (popular[1] == 2){
                    console.log("Hyper");
                    alert("Hyper");
                }
            if (popular[1] == 3){
                    console.log("Liminal");
                    alert("Liminal");
                }
            if (popular[1] == 4){
                    console.log("Radiant");
                    alert("Radiant");
                }
            }
        if (popular[0] == 2){
            if (popular[1] == 5){
                console.log("Data")
                alert("Data");
            }
            if (popular[1] == 1){
                console.log("Hyper")
                alert("Hyper");
            }
            if (popular[1] == 3){
                console.log("Void")
                alert("Void");
            }
            if (popular[1] == 4){
                console.log("Liminal")
                alert("Liminal");
            }
        }
        if (popular[0] == 3){
            if (popular[1] == 5){
                console.log("Infernal")
                alert("Infernal");
            }
            if (popular[1] == 1){
                console.log("Liminal")
                alert("Liminal");
            }
            if (popular[1] == 2){
                console.log("Void")
                alert("Void");
            }
            if (popular[1] == 4){
                console.log("Abyssal")
                alert("Abyssal");
            }
        }
        if (popular[0] == 4){
            if (popular[1] == 5){
                console.log("Organic")
                alert("Organic");
            }
            if (popular[1] == 1){
                console.log("Radiant")
                alert("Radiant");
            }
            if (popular[1] == 2){
                console.log("Liminal")
                alert("Liminal");
            }
            if (popular[1] == 3){
                console.log("Abyssal")
                alert("Abyssal");
            }
        }
    }
    if (popular[1] == null){
        if (popular[0] == 1){
            console.log("Celestial")
            alert("Celestial");
        }
        if (popular[0] == 2){
            console.log("Data")
            alert("Data");
        }
        if (popular[0] == 3){
            console.log("Infernal")
            alert("Infernal");
        }
        if (popular[0] == 4){
            console.log("Organic")
            alert("Organic");
        }
    }
    
}

document.getElementById("submitbtn").addEventListener("click", calculateForm)