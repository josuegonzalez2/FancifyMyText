//Creates an alert box
function windowAlert() {
    alert("Hello, world!");
}

//increases the size of the font to 24pt in the text area
function biggerText() {
    document.getElementById('TextArea').style.fontSize = '2em';
}

//Changes the text depending on which button is pressed
function changeText() {
    if(document.getElementById('FancySchmancy').checked) {
        document.getElementById('TextArea').style.fontWeight = 'bold';
        document.getElementById('TextArea').style.color = 'blue';
        document.getElementById('TextArea').style.textDecoration = 'underline';
    } else if(document.getElementById('BoringBetty').checked) {
        document.getElementById('TextArea').style.fontWeight ='normal';
        document.getElementById('TextArea').style.color = 'black';
        document.getElementById('TextArea').style.textDecoration = 'none';
    }
}

//function uppercases all letters in textarea
function uppercase() {
    alert(document.getElementById('TextArea').value.toUpperCase());
}

//function that splits sentences and joins them
function splitAndJoin() {
    var str = document.getElementById('TextArea').value;
    var parts = str.split(".");
    str = parts.join(" -Moo");
    alert(str);
}