const cipher = {
  let message = "";
  const alphabetSize = 26;
  const alphabetSizeASC = 65;
  let displ = ;
  let finalSentence = "";

encode (displ, message) {

for (let turns=0; turns < message.length; turns++ ){


     let uppercase = message.toUpperCase()

     let result = (message.charCodeAt(turns) - alphabetSizeASC + displ) % alphabetSize + alphabetSizeASC
      
     let print = String.fromCharCode(result)
     finalSentence += print
    }
    return finalSentence;
  } 



decode (displ, message){
  
let message = "";
const alphabetSize = 26;
const alphabetSizeASC = 65;
let displ = ;
let finalSentence = "";

for (let i=0; i <= message.length; i++){


};

export default cipher;
