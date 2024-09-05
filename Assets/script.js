function Clear() {
    document.getElementById("inputText").value = ' ';
}

function isNumber(inp){
    return isNaN(inp);
}

//get vowels
function getVowels() {
    var inp1 = document.getElementById("inputText").value;

    let inp = inp1.toLowerCase();
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    inp = [...inp];
    let temRes;
    let result = [];
    vowels.forEach(x => {
        temRes = inp.filter(y => y == x);
        if (temRes.length > 0) {
            result.push(temRes[0]);
        }
    });
    document.getElementById('outputId').innerHTML = result.toString();
}

//palindrome
function palindrome() {
    var inp1 = document.getElementById("inputText").value;
    let inp = inp1.toLowerCase();

    let inpArray = [...inp];
    let inpArrayRev = inpArray.reverse();
    let len = inpArray.length;

    let temRes = true;
    let result = "Given String is Palindrome";

    for (var x = 0; x < len; x++) {
        for (var y = 0; y < len; y++) {
            if (inpArray[x] == inpArrayRev[x]) {
                temRes = false;
                result = "Given String is Not Palindrome";
                break;
            }
        }
    }

   
         document.getElementById('outputId').innerHTML = result;
    

}


