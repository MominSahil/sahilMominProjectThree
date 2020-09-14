// - quizApp.windows holds all the shortcuts and its answers for windows OS in the form of array.
const quizApp = {};

quizApp.windows = [
    {question: "", answer: ""},
    {question: "Ctrl+Shift+P,F1", answer: "Show Command Palette"},
    {question: "Ctrl+P", answer: "Quick Open, Go to File..."},
    {question: "Ctrl+Shift+N", answer: "New window/instance"},
    {question: "Ctrl+Shift+W", answer: "Close window/instance"},
    {question: "Ctrl+,", answer: "User Settings"},
    {question: "Ctrl+S", answer: "save file"},
    {question: "Ctrl+X", answer: "Cut line (empty selection)"},
    {question: "Ctrl+C", answer: "Copy line (empty selection)"},
    {question: "Alt+↑/ ↓", answer: "Move line up/down"},
    {question: "Shift+Alt+↓/↑", answer: "Copy line up/down"},
    {question: "Ctrl+Shift+K", answer: "Delete line"},
    {question: "Ctrl+Enter", answer: "Insert line below"},
    {question: "Ctrl+Shift+Enter", answer: "Insert line above"},
    {question: "Ctrl+Shift+\\", answer: "Jump to matching bracket"},
    {question: "Ctrl+]/ [", answer: "Indent/outdent line"},
    {question: "Home/ End", answer: "Go to beginning/end of line"},
    {question: "Ctrl+Home", answer: "Go to beginning of file"},
    {question: "Ctrl+End", answer: "Go to end of file"},
    {question: "Ctrl+↑/ ↓", answer: "Scroll line up/down"},
    {question: "Alt+PgUp/ PgDn", answer: "Scroll page up/down"},
    {question: "Ctrl+Shift+[", answer: "Fold (collapse) region"},
    {question: "Ctrl+Shift+]", answer: "Unfold (uncollapse) region"},
    {question: "Ctrl+[", answer: "Fold (collapse) all subregions"},
    {question: "Ctrl+]", answer: "Unfold (uncollapse) all subregions"},
    {question: "Ctrl+0", answer: "Fold (collapse) all regions"},
    {question: "Ctrl+J", answer: "Unfold (uncollapse) all regions"},
    {question: "Ctrl+U", answer: "Remove line comment"},
    {question: "Ctrl+/", answer: "Toggle line comment"},
    {question: "Shift+Alt+A", answer: "Toggle block comment"},
    {question: "Alt+Z", answer: "Toggle word wrap"},
    {question: "Ctrl+T", answer: "Show all Symbols"},
    {question: "Ctrl+G", answer: "Go to Line..."},
    {question: "Ctrl+Shift+O", answer: "Go to Symbol..."},
    {question: "Ctrl+Shift+M", answer: "Show Problems panel"},
    {question: "F8", answer: "Go to next error or warning"},
    {question: "Shift+F8", answer: "Go to previous error or warning"},
    {question: "Ctrl+Shift+Tab", answer: "Navigate editor grouphistory"},
    {question: "Alt+← / →", answer: "Go back/ forward"},
    {question: "Ctrl+F", answer: "Find"},
    {question: "Ctrl+H", answer: "Replace"},
    {question: "F3/ Shift+F3", answer: "Find next/previous"},
    {question: "Alt+Enter", answer: "Select all occurences of Find match"},
    {question: "Ctrl+D", answer: "Add selection to next Find match"},
    {question: "Ctrl+D", answer: "Move last selection to next Find match"},
    {question: "Alt+C/ R / W", answer: "Toggle case-sensitive/ regex / whole word"},
    {question: "Alt+Click", answer: "Insert cursor"},
    {question: "Ctrl+Alt+↑/ ↓", answer: "Insert cursor above/ below"},
    {question: "Ctrl+U", answer: "Undo last cursor operation"},
    {question: "Shift+Alt+I", answer: "Insert cursor at end of each line selected"},
    {question: "Ctrl+L", answer: "Select current line"},
    {question: "Ctrl+Shift+L", answer: "Select all occurrences of current selection"},
    {question: "Ctrl+F2", answer: "Select all occurrences of current word"},
    {question: "Shift+Alt+→", answer: "Expand selection"},
    {question: "Shift+Alt+←", answer: "Shrink selection"},
    {question: "Shift+Alt+(drag mouse)", answer: "Column (box) selection"},
    {question: "Ctrl+Shift+Alt+(arrow key)", answer: "Column (box) selection"},
    {question: "Ctrl+Shift+Alt+PgUp/PgDn", answer: "Column(box)selection page up/down"},
    {question: "Ctrl+Space", answer: "Trigger suggestion"},
    {question: "Ctrl+Shift+Space", answer: "Trigger parameter hints"},
    {question: "Shift+Alt+F", answer: "Format document"},
    {question: "F12", answer: "Go to Definition"},
    {question: "Alt+F12", answer: "Peek Definition"},
    {question: "F12", answer: "Open Definition to the side"},
    {question: "Ctrl+.", answer: "Quick Fix"},
    {question: "Shift+F12", answer: "Show References"},
    {question: "F2", answer: "Rename Symbol"},
    {question: "Ctrl+M", answer: "enable/disable accessibility mode"},
    {question: "Ctrl+\\", answer: "Single line Comments"},
    {question: "Ctrl+ 1 / 2 / 3", answer: "Focus into 1st, 2ndor 3rd editor group"},
    {question: "Ctrl+K+ ←/→", answer: "Focus into previous/nexteditor group"},
    {question: "Ctrl+Shift+PgUp/ PgDn", answer: "Move editor left/right"},
    {question: "Ctrl+K ←/ →", answer: "Move active editor group"},
    {question: "Ctrl+N", answer: "New File"},
    {question: "Ctrl+O", answer: "Open File..."},
    {question: "Ctrl+S", answer: "Save"},
    {question: "Ctrl+Shift+S", answer: "Save As"},
    {question: "Ctrl+F4", answer: "Close"},
    {question: "Ctrl+W", answer: "Close All"},
    {question: "Ctrl+Shift+T", answer: "Reopen closed editor"},
    {question: "Ctrl+Tab", answer: "Open next"},
    {question: "Ctrl+Shift+Tab", answer: "Open previous"},
    {question: "F11", answer: "Toggle full screen"},
    {question: "Shift+Alt+0", answer: "Toggle editor layout(horizontal/vertical)"},
    {question: "Ctrl+/-", answer: "Zoom in/out"},
    {question: "Ctrl+B", answer: "Toggle Sidebar visibility"},
    {question: "Ctrl+Shift+E", answer: "Show Explorer / Toggle focus"},
    {question: "Ctrl+Shift+F", answer: "Show Search"},
    {question: "Ctrl+Shift+G", answer: "Show Source Control"},
    {question: "Ctrl+Shift+D", answer: "Show Debug"},
    {question: "Ctrl+Shift+X", answer: "Show Extensions"},
    {question: "Ctrl+Shift+H", answer: "Replace in files"},
    {question: "Ctrl+Shift+J", answer: "Toggle Search details"},
    {question: "Ctrl+Shift+U", answer: "Show Output panel"},
    {question: "F9", answer: "Toggle breakpoint"},
    {question: "F5", answer: "Start/Continue"},
    {question: "Shift+F5", answer: "Stop"},
    {question: "F11/Shift+F11", answer: "Step into/out"},
    {question: "F10", answer: "Step over"},
    {question: "Ctrl+I", answer: "Show hover"},
    {question: "Ctrl+`", answer: "Show integrated terminal"},
    {question: "Ctrl+Shift+`", answer: "Create new terminal"},
    {question: "Ctrl+C", answer: "Copy selection"},
    {question: "Ctrl+V", answer: "Paste into active terminal"},
    {question: "Ctrl+↑/↓", answer: "Scroll up/down"},
    {question: "Shift+PgUp/ PgDn", answer: "Scroll page up/down"},
    {question: "Ctrl+Home/ End", answer: "Scroll to top/bottom"}
];

// - quizApp.macOS holds all the shortcuts and its answers for macOS in the form of array.
quizApp.macOS = [
    {question: "⌘F ", answer: " Find "},
    {question: "⌥⌘F ", answer: " Replace "},
    {question: "⌘G / ⇧⌘G ", answer: " Find next/previous "},
    {question: "⌥Enter ", answer: " Select all occurrences of Find match "},
    {question: "⌘D ", answer: " Add selection to next Find match "},
    {question: "⌘K ⌘D ", answer: " Move last selection to next Find match "},
    {question: "⇧⌘T ", answer: " Reopen closed editor "},
    {question: "⌘K Enter ", answer: " Keep preview mode editor open "},
    {question: "⌃Tab / ⌃⇧Tab ", answer: " Open next / previous "},
    {question: "⌘K P ", answer: " Copy path of active file "},
    {question: "⌘K R ", answer: " Reveal active file in Finder "},
    {question: "⌘K O ", answer: " Show active file in new window/instance "},
    {question: "⇧⌘P, F1 ", answer: " Show Command Palette "},
    {question: "⌘P ", answer: " Quick Open, Go to File… "},
    {question: "⇧⌘N ", answer: " New window/instance "},
    {question: "⌘W ", answer: " Close window/instance "},
    {question: "⌘, ", answer: " User Settings "},
    {question: "⌘K ⌘S ", answer: " Keyboard Shortcuts "},
    {question: "⌃⌘F ", answer: " Toggle full screen "},
    {question: "⌥⌘0 ", answer: " Toggle editor layout (horizontal/vertical) "},
    {question: "⌘= / ⇧⌘- ", answer: " Zoom in/out "},
    {question: "⌘B ", answer: " Toggle Sidebar visibility "},
    {question: "⇧⌘E ", answer: " Show Explorer / Toggle focus "},
    {question: "⇧⌘F ", answer: " Show Search "},
    {question: "⌃⇧G ", answer: " Show Source Control "},
    {question: "⇧⌘D ", answer: " Show Debug "},
    {question: "⇧⌘X ", answer: " Show Extensions "},
    {question: "⇧⌘H ", answer: " Replace in files "},
    {question: "⇧⌘J ", answer: " Toggle Search details "},
    {question: "⇧⌘U ", answer: " Show Output panel "},
    {question: "⇧⌘V ", answer: " Open Markdown preview "},
    {question: "⌘K V ", answer: " Open Markdown preview to the side "},
    {question: "⌘K Z ", answer: " Zen Mode (Esc Esc to exit) "},
    {question: "⌃Space ", answer: " Trigger suggestion "},
    {question: "⇧⌘Space ", answer: " Trigger parameter hints "},
    {question: "⇧⌥F ", answer: " Format document "},
    {question: "⌘K ⌘F ", answer: " Format selection "},
    {question: "F12 ", answer: " Go to Definition "},
    {question: "⌥F12 ", answer: " Peek Definition "},
    {question: "⌘K F12 ", answer: " Open Definition to the side "},
    {question: "⌘. ", answer: " Quick Fix "},
    {question: "⇧F12 ", answer: " Show References "},
    {question: "F2 ", answer: " Rename Symbol "},
    {question: "⌘K ⌘X ", answer: " Trim trailing whitespace "},
    {question: "⌘K M ", answer: " Change file language "},
    {question: "⌘X ", answer: " Cut line (empty selection) "},
    {question: "⌘C ", answer: " Copy line (empty selection) "},
    {question: "⌥↓ / ⌥↑ ", answer: " Move line down/up "},
    {question: "⇧⌥↓ / ⇧⌥↑ ", answer: " Copy line down/up "},
    {question: "⇧⌘K ", answer: " Delete line "},
    {question: "⌘Enter / ⇧⌘Enter ", answer: " Insert line below/above "},
    {question: "⇧⌘\\ ", answer: " Jump to matching bracket "},
    {question: "⌘] / ⌘[ ", answer: " Indent/outdent line "},
    {question: "Home / End ", answer: " Go to beginning/end of line "},
    {question: "⌘↑ / ⌘↓ ", answer: " Go to beginning/end of file "},
    {question: "⌃PgUp / ⌃PgDn ", answer: " Scroll line up/down "},
    {question: "⌘PgUp /⌘PgDn ", answer: " Scroll page up/down "},
    {question: "⌥⌘[  / ⌥⌘] ", answer: " Fold/unfold region "},
    {question: "⌘K ⌘[  /  ⌘K ⌘] ", answer: " Fold/unfold all subregions "},
    {question: "⌘K ⌘0  /  ⌘K ⌘J ", answer: " Fold/unfold all regions "},
    {question: "⌘K ⌘C ", answer: " Add line comment "},
    {question: "⌘K ⌘U ", answer: " Remove line comment "},
    {question: "⌘/ ", answer: " Toggle line comment "},
    {question: "⇧⌥A ", answer: " Toggle block comment "},
    {question: "⌥Z ", answer: " Toggle word wrap "},
    {question: "⌘T ", answer: " Show all Symbols "},
    {question: "⌃G ", answer: " Go to Line... "},
    {question: "⌘P ", answer: " Go to File... "},
    {question: "⇧⌘O ", answer: " Go to Symbol... "},
    {question: "⇧⌘M ", answer: " Show Problems panel "},
    {question: "F8 / ⇧F8 ", answer: " Go to next/previous error or warning "},
    {question: "⌃⇧Tab ", answer: " Navigate editor group history "},
    {question: "⌃- / ⌃⇧- ", answer: " Go back/forward "},
    {question: "⌃⇧M ", answer: " Toggle Tab moves focus "},
    {question: "F9 ", answer: " Toggle breakpoint "},
    {question: "F5 ", answer: " Start/Continue "},
    {question: "F11 / ⇧F11 ", answer: " Step into/ out "},
    {question: "F10 ", answer: " Step over "},
    {question: "⇧F5 ", answer: " Stop "},
    {question: "⌘K ⌘I ", answer: " Show hover "},
    {question: "⌃` ", answer: " Show integrated terminal "},
    {question: "⌃⇧` ", answer: " Create new terminal "},
    {question: "⌘C ", answer: " Copy selection "},
    {question: "⌘↑ / ↓ ", answer: " Scroll up/down "},
    {question: "PgUp / PgDn ", answer: " Scroll page up/down "},
    {question: "⌘Home / End ", answer: " Scroll to top/bottom "},
    {question: "⌘W ", answer: " Close editor "},
    {question: "⌘K F ", answer: " Close folder "},
    {question: "⌘\\ ", answer: " Split editor "},
    {question: "⌘1 / ⌘2 / ⌘3 ", answer: " Focus into 1st, 2nd, 3rd editor group "},
    {question: "⌘K ⌘← / ⌘K ⌘→ ", answer: " Focus into previous/next editor group "},
    {question: "⌘K ⇧⌘← / ⌘K ⇧⌘→ ", answer: " Move editor left/right "},
    {question: "⌘K ← / ⌘K → ", answer: " Move active editor group "},
    {question: "⌥ + click ", answer: " Insert cursor "},
    {question: "⌥⌘↑ ", answer: " Insert cursor above "},
    {question: "⌥⌘↓ ", answer: " Insert cursor below "},
    {question: "⌘U ", answer: " Undo last cursor operation "},
    {question: "⇧⌥I ", answer: " Insert cursor at end of each line selected "},
    {question: "⌘L ", answer: " Select current line "},
    {question: "⇧⌘L ", answer: " Select all occurrences of current selection "},
    {question: "⌘F2 ", answer: " Select all occurrences of current word "},
    {question: "⌃⇧⌘→ / ← ", answer: " Expand / shrink selection "},
    {question: "⇧⌥ + drag mouse ", answer: " Column (box) selection "},
    {question: "⇧⌥⌘↑ / ↓ ", answer: " Column (box) selection up/down "},
    {question: "⇧⌥⌘← / → ", answer: " Column (box) selection left/right "},
    {question: "⇧⌥⌘PgUp ", answer: " Column (box) selection page up "},
    {question: "⇧⌥⌘PgDn ", answer: " Column (box) selection page down "},
    {question: "⌘N ", answer: " New File "},
    {question: "⌘O ", answer: " Open File... "},
    {question: "⌘S ", answer: " Save "},
    {question: "⇧⌘S ", answer: " Save As... "},
    {question: "⌥⌘S ", answer: " Save All "},
    {question: "⌘W ", answer: " Close "},
    {question: "⌘K ⌘W ", answer: " Close All "}
];
// selected topic of quiz
quizApp.quizTopic = "";
// array of 10 questions to be asked
quizApp.quizList = [];
// array of answer options per question
quizApp.ansPerQue = [];
// changing class on buttons for click event
quizApp.buttonClass = 0;
// count of number of question asked
quizApp.count = 0;
// score count 
quizApp.score = 0;

// function to know if user have windows of macOS
quizApp.getTopic = function() {
    const ans = $("input:checked").val();
    if (ans !== undefined) {
        $(".quizForm__warning").text("");
        $(".result__score").text("");
        quizApp.quizTopic = ans;
        $("#button0").css("display", "none");
        $("#button1").css("display", "block");
        // quizApp.getQuestions();
        // quizApp.startQuiz();
    }
    else {
        $(".quizForm__warning").text("Please select OS!");
        quizApp.getTopic();
    }
    console.log("getTopic is working");
}

// set question list
quizApp.getQuestions = function() {
    for(let i = 0; i < 10; i++) {
        quizApp.populateArray(quizApp.quizList);
    }
    console.log("getQuestion is working");
    quizApp.startQuiz();
}

// function to populate array
quizApp.populateArray = function(array) {
    // const entireList = quizApp[quizApp.quizTopic];
    const number = Math.floor(Math.random() * quizApp[quizApp.quizTopic].length);
    const length = array.length;
    for (let i = 0; i < length; i++) {
        if (number == array[i]) {
            quizApp.populateArray(array);
        }
    }
    array.push(number);
}

// function to run 10 questions in the quiz
quizApp.startQuiz = function() {
    for (quizApp.count = 0; quizApp.count < 10; quizApp.count++) {
        const queNum = quizApp.quizList[quizApp.count];
        const question = quizApp[quizApp.quizTopic][queNum].question;
        const answer = quizApp[quizApp.quizTopic][queNum].answer;
        quizApp.setOptions(queNum);
        quizApp.displayQuiz(question);
        $("#button1").on("click", function(){
            const selectedAns = $("input:checked").val();
            quizApp.score += quizApp.checkAnswer(answer, selectedAns);
        });
    }
    console.log("startQuiz is working");
    quizApp.displayResult(); 
}

// function to start set up quiz question and answer options
quizApp.setOptions = function(queNum) {
    quizApp.ansPerQue = [];
    quizApp.ansPerQue.push(queNum);
    for (let i = 0; i < 3; i++) {
        quizApp.populateArray(quizApp.ansPerQue);
    }
    quizApp.ansPerQue.sort();
    console.log("setOptions is working");
}

// function to display questions and answer options on page
quizApp.displayQuiz = function(question) {
    $(".quizForm__question").text(question);
    $(".quizForm__listOption label").text("");
    // $(".quizForm__listOption--checked").val("");
    $(".quizForm__list").html("");
    // const topic = quizApp.quizTopic;
    for (let i = 0; i < 4; i++) {
        const itemNum = quizApp.ansPerQue[i];
        const answer = quizApp[quizApp.quizTopic][itemNum].answer;
        $(".quizForm__list").append(`<li class="quizForm__listOption">
            <input type="radio" id="q${i+1}" name="options" class="quizForm__listOption--checked" value="${answer}">
            <label for="q${i+1}">${answer}</label>
        </li>`);
    }
    console.log("displayQuiz is working");
    // const score = quizApp.checkAnswer(correctAns);
    // return score;
}

quizApp.checkAnswer = function(correctAnswer, selectedAns) {
    if (selectedAns == correctAnswer) {
        return 1;
    }
    else {
        return 0;
    }
    console.log("checkAnswer is working");
};

// function to display final result
quizApp.displayResult = function() {
    if (quizApp.score == 10) {
        $(".quizForm__question").text(`You scored 10/10. You are a VS code Ninja!`);
    }
    else {
        $(".quizForm__question").text(`You scored ${quizApp.score}/10.`);
        //  You can practice more at are a <a src="https://code.visualstudio.com/docs/">VisualStudioCode.com</a>
    }
    $("#button1").css("display", "none");
    $("#button2").css("display", "block");
    $(".quizForm__list").html("");
    console.log("displayResult is working");
}

// function to initialize quizApp
quizApp.init = function() {
    console.log("init is working");
    $(".quizForm__button0").on("click", function(e) {
        e.preventDefault();
        quizApp.getTopic();
        quizApp.getQuestions();
        // quizApp.startQuiz();
        // quizApp.displayResult();
    });

}

$(document).ready(function(){
    console.log("docReady is working");
    quizApp.init();
})

// js

// - First impression is displaying paragraph as "let's start" and the next button will say start. submit button will be hidden.
// - when user clicks on start button, text will change to "next"
// - A function will select random number from 0 to length of array.
// - That will be the question and answer.
// - another function will select other three random answers from the array that are not correct and add to the list.
// - The list will be sorted alphbetically and added to the input of the form.
// - the user will select a radio button with the answer and click submit.
// - if the answer is right, the process will repeat 9 more time making sure the same question is not repeated.
// - a counter will check how many answers are right.
// to add padding-->  $(".result__score").css("padding", "2rem");
// - if all the answers are right then a message will be displayed with score saying the user won.
// - if any answer is wrong the message will display the score and a link to VS Code shortcut page.

// Stretch goals
// - add MacOS and windows buttons to let the user select which OS they have.
// - checked answer to change color to goldenrod
// - random motivation quote in the end.
// - next question fade in/out animation.
// - final score animation.

