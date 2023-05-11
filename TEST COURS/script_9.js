function strtok(str1, str2, n){
    var words = str1.split(str2);
    return document.write(words[n-1]);
}

str1 = "robert ;dupont ;amiens ;80000"
document.write(str1+"<br>");
strtok(str1,";",3);