//1. Declară variabile numite țară, continent și populație și atribuie-le valori conform propriei tale țări (populația în milioane).

const country= 'Mexic';
const continent= 'America de Nord';
let population='129'; //in milioane :P

//2. Afișează valorile lor în consolă.

console.log(country);
console.log(continent);
console.log(population);

//3. Declară o variabilă numită esteInsulă și setează-i valoarea conform țării tale. Variabila ar trebui să conțină o valoare Boolean.

const esteInsula=false;

//4. De asemenea, declară o variabilă limbă, dar nu-i atribui nicio valoare încă.

let language;

//5. Afișează tipurile de date ale variabilelor esteInsulă, populație, țară și limbă în consolă.
console.log(typeof esteInsula);
console.log(typeof population);
console.log(typeof country);
console.log(language);

//6. Setează valoarea variabilei limbă la limba vorbită în locul unde locuiești (unele țări au mai multe limbi, dar alege doar una).
language="spaniola";

//7. Gândește-te care variabile ar trebui să fie variabile const (care valori nu se vor schimba niciodată și care s-ar putea schimba?). Apoi, schimbă aceste variabile în const.
//idk dar am pus tara ca const p-u ca dc nu, populatia nu p-u ca se schimba constant, limba la fel se poate schimba chiar si daca e putin probabil.

//8. Încercați să schimbați una dintre variabilele schimbate acum și observați ce se întâmplă.

let halfpopulation = population/2;
console.log(halfpopulation + " milioane");

//10. Crește populația țării tale cu 1 și afișează rezultatul în consolă.

population++;
console.log(population);

//11. Finlanda are o populație de 6 milioane. Are țara ta mai mulți oameni decât Finlanda?
let Finlandapopulation ="6";
console.log(population>Finlandapopulation, " Mexic are o populatie mai mare");

//12. Populația medie a unei țări este de 33 de milioane de oameni. Are țara ta mai puțini oameni decât o țară medie?

let populatiemedie="33";
console.log(population>populatiemedie, "Mexic are o populatie mai mare ca populatia medie");

//13. Pe baza variabilelor pe care le-ați creat, creați o nouă variabilă descriere care conține un șir de caractere cu acest format: 'Portugalia este în Europa, iar cei 11 milioane de oameni ai săi vorbesc portugheză'.

const descriere= country + " este in " + continent + " iar cei " + population + " milioane de oameni ai sai vorbesc " + language;
console.log(descriere);