function reverseText(text){
    let reversedText = '';
    //for(let index = 0; index < text.length; index++){
    for(let index = 0; index < text.length; index++){
        let letter = text.charAt(index);
        reversedText += letter;
    }
    return reversedText;
}