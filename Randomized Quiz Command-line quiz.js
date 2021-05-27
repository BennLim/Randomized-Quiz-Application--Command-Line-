/* 
Class Group: DISM/FT/1A/02
Admission No: 1928880
Name: Benedict Isaac Lim
*/

class MCQ {
    constructor(question, choice, answer, category) {
        this.question = question;
        this.choice = choice;
        this.answer = answer;
        this.category = category;
    }
    getQuestion() {
        var questionStr = this.question;

        var maxLength = this.choice[0].length;
        for (var i = 1; i < this.choice.length; i++) { // Gets the longest string length of all the choices
            if (maxLength < this.choice[i].length) {
                maxLength = this.choice[i].length;
            }
        }
        for (var i = 0; i < this.choice.length; i += 2) { //Displays choices in 2x2 order
            questionStr += "\n\n(" + (i + 1) + ") " + addSpaces(this.choice[i]) + "\t\t(" + (i + 2) + ") " + addSpaces(this.choice[i + 1]);
        }
        questionStr += "\n";
        return questionStr;
    }
}


class Quiz {
    constructor() {
        this.questionPool = [];
        this.questionPool.push(new MCQ("Which instrument does Ron play?", ["Trumpet", "Saxophone", "Trombone", "Tuba"], 1, 1));
        this.questionPool.push(new MCQ("Who is the only person who dislikes Lil' Sebastian", ["Ben", "Donna", "Ron", "Chris"], 0, 1));
        this.questionPool.push(new MCQ("Who is Leslie's nemesis?", ["Jeremy Jamm", "Jerry Gergich", "Jean-Ralphio", "Ron Swanson"], 0, 1));
        this.questionPool.push(new MCQ("In which season do Ann and Chris leave", ["Season 5", "Season 7", "Season 6", "Season 4"], 2, 1));
        this.questionPool.push(new MCQ("What city does the show take place in?", ["Scranton", "Pawnee", "Indianapolis", "Brooklyn"], 1, 1));
        this.questionPool.push(new MCQ("What do Jake and Amy eat on the rooftop in \"The bet\"?", ["Chips", "Cheese puffs", "Popcorn", "Nuts"], 3, 2));
        this.questionPool.push(new MCQ("What is the name of Charles's son?", ["Nikolaj", "Nicholas", "Nathan", "Nicole"], 0, 2));
        this.questionPool.push(new MCQ("How many of Amy's siblings have made an appearance onscreen?", ["4 slibings", "6 siblings", "1 sibling", "2 siblings"], 2, 2));
        this.questionPool.push(new MCQ("In which season does Gina leave?", ["Season 3", "Season 6", "Season 4", "Season 5"], 1, 2));
        this.questionPool.push(new MCQ("What is Captain Holt's middle name?", ["Jared", "Jacob", "Jerard", "Jaymond"], 1, 2));
        this.questionPool.push(new MCQ("What is Dwight's Middle name?", ["Kurt", "Bert", "Kane", "Hurt"], 0, 3));
        this.questionPool.push(new MCQ("In which season does Andy join the Scranton Branch?", ["5", "2", "4", "3"], 3, 3));
        this.questionPool.push(new MCQ("Which Company aqquired Dunder Mifflin when it went bankrupt?", ["Staples", "Prince Family Paper", "Sabre", "Schrute Farms"], 2, 3));
        this.questionPool.push(new MCQ("Who has not been the CEO of Dunder Mifflin?", ["David Wallace", "Robert California", "Jo Bennett", "Michael Scott"], 3, 3));
        this.questionPool.push(new MCQ("Who has not worked for the Michael Scott Paper Company?", ["Pam", "Dwight", "Ryan", "Michael"], 1, 3));
        this.questionPool.push(new MCQ("Who has never been Ted's roomate?", ["Marshall", "Barney", "Lilly", "Robin"], 1, 4));
        this.questionPool.push(new MCQ("What is the name of the bar the characters go to?", ["Mclaren's", "Carl's", "Mconnel's", "Mcnara's"], 0, 4));
        this.questionPool.push(new MCQ("What does Ted steal for Robin after their first date?", ["A yellow umbrella", "A jar of olives", "A red jacket", "A blue french horn"], 3, 4));
        this.questionPool.push(new MCQ("Prior to season 9, what had Ted never eaten in his life?", ["Pickles", "Bacon", "Yoghurt", "Hot dogs"], 1, 4));
        this.questionPool.push(new MCQ("Who is the mother?", ["Victoria", "Robin", "Tracy", "Zoey"], 2, 4));
        this.questionPool.push(new MCQ("What earth is HR from?", ["Earth-16", "Earth-2", "Earth-19", "Earth-3"], 2, 5));
        this.questionPool.push(new MCQ("What is the name of Barry's daughter?", ["Nora", "Dawn", "Jamie", "Jessie"], 0, 5));
        this.questionPool.push(new MCQ("How many suits has Barry worn over 5 seasons?", ["1 suit", "2 suits", "3 suits", "4 suits"], 2, 5));
        this.questionPool.push(new MCQ("Which villain is from Earth-2?", ["Zoom", "Reverse Flash", "Savitar", "Devoe"], 0, 5));
        this.questionPool.push(new MCQ("What is Cisco's alter ego?", ["Pied Piper", "Reverb", "Echo", "Vibe"], 3, 5));
        this.catQuestions = [];
        this.userAnswers = [];
    }
    getNumberOfCat() {
        var max = this.questionPool[0].category;
        for (var i = 1; i < this.questionPool.length; i++) {
            if (max < this.questionPool[i].category) {
                max = this.questionPool[i].category;
            }
        }
        return max;
    }
    displayCategories() { // displays Quiz topic names  
        var s = "";
        var topic;
        for (var i = 1; i <= this.getNumberOfCat(); i++) {
            switch (i) {
                case 1: topic = "Parks & Recreation";
                    break;
                case 2: topic = "Brooklyn Nine-Nine";
                    break;
                case 3: topic = "The Office";
                    break;
                case 4: topic = "How I Met Your Mother";
                    break;
                case 5: topic = "The Flash";
            }
            s += "\n(" + i + ") " + topic;
        }
        return s;
    }
    getCategoryQuestions(input) {
        var valueHolder;
        for (var i = 0; i < this.questionPool.length; i++) { //Pushes objects into category array
            if (this.questionPool[i].category == input) {
                this.catQuestions.push(this.questionPool[i]);
            }
        }
        for (var i = 0; i < 10; i++) { // Randomizes order of the catQuestions array. Swaps order 10 times
            var random1 = getRandomNumber(this.catQuestions.length); //Generates random number from 0 to 4
            var random2 = getRandomNumber(this.catQuestions.length);
            valueHolder = this.catQuestions[random1];
            this.catQuestions[random1] = this.catQuestions[random2];
            this.catQuestions[random2] = valueHolder;
        }
        var questionCounter = 0;
        while (questionCounter < this.catQuestions.length) { // Randomizes order of the answers to each question
            for (var i = 0; i < 10; i++) {
                random1 = getRandomNumber(this.catQuestions[0].choice.length); // generates random number from 0 to 3
                random2 = getRandomNumber(this.catQuestions[0].choice.length);
                valueHolder = this.catQuestions[questionCounter].choice[random1];
                this.catQuestions[questionCounter].choice[random1] = this.catQuestions[questionCounter].choice[random2];
                this.catQuestions[questionCounter].choice[random2] = valueHolder;

                if (random1 == this.catQuestions[questionCounter].answer) { //Checks if 1 of the indexes swapped is the answer.
                    this.catQuestions[questionCounter].answer = random2; // Changes answer to the new index value
                } else if (random2 == this.catQuestions[questionCounter].answer) {
                    this.catQuestions[questionCounter].answer = random1; // Changes answer to the new index value
                }
            }
            questionCounter++;
        }
    }
    getNumberOfQuestions() {
        return this.catQuestions.length;
    }
    getResult(index) {
        if (this.userAnswers[index] == (this.catQuestions[index].answer) + 1) {
            return "Correct!";
        } else {
            return "Incorrect!!";
        }

    }
}// end quiz

// START functions
function getRandomNumber(highestNumber) {
    return Math.floor(Math.random() * highestNumber);
}
function addSpaces(choice) { // Makes the spaces inbetween choices even throughout the quiz
    var maxLength = q.questionPool[0].choice[0].length;
    for (var i = 0; i < q.questionPool.length; i++) {
        for (var u = 1; u < q.questionPool[i].choice.length; u++) { // Gets the longest string length of all the choices
            if (maxLength < q.questionPool[i].choice[u].length) {
                maxLength = q.questionPool[i].choice[u].length;
            }
        }
    }
    while (choice.length < maxLength) { // adds spaces until it reaches the same string length as the longest choice
        choice += " ";
    }
    return choice;
}
function fiftyFifty(questionNumber, counter) {
    if (counter == 0) {
        do {
            var random1 = getRandomNumber(q.catQuestions[0].choice.length);
            var random2 = getRandomNumber(q.catQuestions[0].choice.length);
        } while (random2 == random1 || random1 == q.catQuestions[questionNumber].answer || random2 == q.catQuestions[questionNumber].answer)

        q.catQuestions[questionNumber].choice[random1] = "";
        q.catQuestions[questionNumber].choice[random2] = "";
    }
}
// END functions

// Main program
var input = require("readline-sync");
var errorMsg = "\n--------------------------------------------------------------------------------"
errorMsg += "\nPlease enter a valid input!"; // Declaring variable containing error message for invalid input

var q = new Quiz();
var name = input.question("Please enter your name: ")
// Getting catergory from user input
var invInputCount = 0; // Counter for invalid inputs
do {
    var catSelectString = "\n\n--------------------------------------------------------------------------------\n";
    catSelectString += "Hello "+ name + ", \nSelect the TV show of your choice: " + q.displayCategories();
    if (invInputCount > 0) {
        catSelectString += errorMsg;
        invInputCount = 0;
    }
    var catSelect = parseInt(input.question(catSelectString + "\n>> "));
    if ((isNaN(catSelect) || catSelect < 1 || catSelect > q.getNumberOfCat()) && invInputCount == 0) {
        invInputCount++;
    }
} while (isNaN(catSelect) || (catSelect < 1 || catSelect > q.getNumberOfCat()));
// END Getting catergory 


q.getCategoryQuestions(catSelect); // Getting questions from the selected category and storing it inside an array


// Getting user's answers

var i = 0; // Count for do while loop
var j = 0; // count for invalid input
var k = 0; // count for if user tries to input p when at question 1
var y = 0; // count for 50/50 life-line
do {
    var questionAnsString = "\n\n\n--------------------------------------------------------------------------------\n\n";
    questionAnsString += (i + 1) + ". " + q.catQuestions[i].getQuestion() + "\nEnter N for the next question or P to return to the previous question\n"
    if (j > 0) { // Displays messages depending on user input
        questionAnsString += errorMsg;
        j = 0;
    } else if (k > 0) {
        questionAnsString += "\n--------------------------------------------------------------------------------\nYou are at the first question!"
        k = 0;
    } else if (y == 0) {
        questionAnsString += "\n--------------------------------------------------------------------------------\nStuck? Use your lifeline by entering L to remove half of the choices!";
    } else {
        questionAnsString += "\n--------------------------------------------------------------------------------";
    }
    var questionAns = input.question(questionAnsString + "\n>> ");
    switch (questionAns) { // Validates user input
        case "p":
        case "P": i--;
            break;
        case "n":
        case "N": i++;
            break;
        case "l":
        case "L": fiftyFifty(i, y);
            y++;
            break;
        case "1":
        case "2":
        case "3":
        case "4": q.userAnswers[i] = parseInt(questionAns);
            i++;
            break;
        default: j++;
    }
    if (i < 0) {
        i = 0;
        k++;
    }
} while (i < q.catQuestions.length)
// END User's answers 

// Getting user's answers for unattempted questions

var j = 0; // count for invalid input
for (var i = 0; i < q.catQuestions.length; i++) {
    if (q.userAnswers[i] == undefined) {
        do {
            var string = "\n\n\nPlease answer question " + (i + 1) + "!\n--------------------------------------------------------------------------------\n\n" + q.catQuestions[i].getQuestion();
            if (j > 0) {
                string += errorMsg;
                j = 0;
            } else {
                string += "\n--------------------------------------------------------------------------------";
            }
            var unansweredAns = input.question(string + "\n>> ");
            switch (unansweredAns) { // Validates user input
                case "1":
                case "2":
                case "3":
                case "4": q.userAnswers[i] = parseInt(unansweredAns);
                    break;
                default: j++;
            }
        } while (j > 0)
    }
}
// END Getting unattempted answers 

// Show ANSWER Summary
invInputCount = 0; // Counter for invalid inputs
do {
    var summary = "\n\n\n\n\n--------------------------------------------------------------------------------\n\n\t\t\t\tANSWERS SUMMARY\n\n--------------------------------------------------------------------------------";
    for (var i = 0; i < q.catQuestions.length; i++) {
        summary += "\n\n" + (i + 1) + ". " + q.catQuestions[i].getQuestion() + "\n[ Your current answer is: (" + q.userAnswers[i] + ") ]";
        summary += "\n\n--------------------------------------------------------------------------------";
    }
    summary += "\n\nEnter 0 to submit your answers or [1 to " + q.catQuestions.length + "] to edit your answers.";
    if (invInputCount > 0) {
        summary += "\n--------------------------------------------------------------------------------\nPlease enter a number between 0 and " + q.getNumberOfQuestions() + "!";
        invInputCount = 0;
    }
    var submit = parseInt(input.question(summary + "\n>> "));
    if ((isNaN(submit) || submit < 0 || submit > q.getNumberOfQuestions()) && invInputCount == 0) {
        invInputCount++;
    } else if (submit != 0) {
        j = 0; // Counter for invalid inputs
        do {
            var editString = "\n\n\n--------------------------------------------------------------------------------\n\n" + (submit) + ". " + q.catQuestions[(submit - 1)].getQuestion();
            if (j > 0) {
                editString += errorMsg;
                j = 0;
            } else {
                editString += "\n--------------------------------------------------------------------------------";
            }
            var editedAns = input.question(editString + "\n>> ");
            switch (editedAns) {
                case "1":
                case "2":
                case "3":
                case "4": q.userAnswers[(submit - 1)] = parseInt(editedAns);
                    break;
                default: j++;
            }
        } while (j > 0)
    }
} while (submit != 0);
//End Show ANSWER Summary

// Show RESULT summary
var correctAnswers = 0;
var resultsSummary = "\n\n\n\n\n--------------------------------------------------------------------------------\n\n\t\t\t\tRESULTS SUMMARY\n\n--------------------------------------------------------------------------------";
for (var i = 0; i < q.catQuestions.length; i++) {
    resultsSummary += "\n\n" + (i + 1) + ". " + q.catQuestions[i].getQuestion() + "\nYour Answer: (" + q.userAnswers[i] + ") \tResult: " + q.getResult(i);
    resultsSummary += "\n\n--------------------------------------------------------------------------------";
    if (q.getResult(i) == "Correct!") {
        correctAnswers++;
    }
}
resultsSummary += "\n\n\t\tYou have answered " + correctAnswers + " out of " + q.catQuestions.length + " questions correctly!";
var congratsMsg;
switch (correctAnswers) { // Displays congratulatory message
    case 0:
    case 1:
    case 2: congratsMsg = "Better luck next time!";
        break;
    case 3: congratsMsg = "At least you passed!";
        break;
    case 4: congratsMsg = "Congratulations!";
        break;
    case 5: congratsMsg = "Congratulations! You scored full marks!";
}

resultsSummary += "\n\t\t" + congratsMsg + "\n\n--------------------------------------------------------------------------------\n";

console.log(resultsSummary);
// END Show RESULT summary
// END main program