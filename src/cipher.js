const cipher = {
  
encode (displ, message) {

  let message = "";
  const alphabetSize = 26;
  const alphabetSizeASC = "A".charCodeAt(0);
  let displ = "";
  let finalSentence = "";

for (let turns=0; turns < message.length; turns++ ){

     let uppercase = message.toUpperCase()
     let result = (message.charCodeAt(turns) - alphabetSizeASC + displ) % alphabetSize + alphabetSizeASC
     let print = String.fromCharCode(result)
     finalSentence += print
    }
    return finalSentence;
  } 
};

decode (displ, message){
  
let message = "";
const alphabetSize = 26;
const alphabetSizeASC = "A".charCodeAt(0);
let displ = "";
let finalSentence = "";

for (let i=0; i <= message.length; i++){
  
  let finalSentence = (message.charCodeAt(i)-displ-alphabetSizeASC)
  let negative = (-finalSentence / alphabetSize)
  if(finalSentence <0 & negative <=1){
     let resultOne = finalSentence + alphabetSize
     let resultTwo = resultOne + alphabetSizeASC
     let print = String.fromCharCode(resultTwo)
     finalSentence += print        
  } else if (result <0 & negative >1){
          let resultOne = (result + (alphabetSize * Math.trunc(negative)) + alphabetSize) % alphabetSize
          let resultTwo = resultOne +alphabetSizeASC
          let print = String.fromCharCode(resultTwo)
          finalSentence += print
       } else {
           let resultOne = result % alphabetSize
           let resultTwo = resultOne + alphabetSizeASC
           let print = String.fromCharCode(resultTwo)
           finalSentence += print
       }
       return finalSentence;
};

export default cipher;
