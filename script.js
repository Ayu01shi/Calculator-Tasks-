let historyList

function clearEnd(){
    document.getElementById('result').value = '';
}

function clearAll(){
    document.getElementById('result').value = '';
}

function backSpaces() {
    let currentValue = document.getElementById('result').value
    currentValue = currentValue.slice(0, -1);
    document.getElementById('result').value=currentValue;
}
function number(value) {
    document.getElementById('result').value += value;
}

function calResult() {
    const expression = document.getElementById('result').value;
    const result = eval(expression);
    // historyList.push({ expression, result });
    document.getElementById('result').value=result;
}



function openMenu()
{
    const sideMenu = document.getElementById("history");
    if(sideMenu.style.display === "none")
    {
        sideMenu.style.display="block";
    }
    else{
        sideMenu.style.display="none"; 
    }
}

