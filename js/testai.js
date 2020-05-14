'use strict'

/* -------------------------------------------------- */
/* Abbreviate a Two Word Name */
/* -------------------------------------------------- */

function abbrevName( name ){
    let text = '';
    text = name.toUpperCase().split(' ');    
    return text[0][0] + '.' + text[1][0];
}

console.log(abbrevName("Sam Harris"), "S.H");
console.log(abbrevName("Patrick Feenan"), "P.F");
console.log(abbrevName("Evan Cole"), "E.C");
console.log(abbrevName("P Favuzzi"), "P.F");
console.log(abbrevName("David Mendieta"), "D.M");

/* -------------------------------------------------- */
/* altERnaTIng cAsE <=> ALTerNAtiNG CaSe */
/* -------------------------------------------------- */

String.prototype.toAlternatingCase = function () {
    
    let res = '';
 
     for ( let i=0; i<this.length; i++ ) {
         
        let letters = this[i]; 
         
        if ( letters === letters.toLowerCase() )
        {
            res = res + letters.toUpperCase();        
        }
        else{
            res = res + letters.toLowerCase();
        }
    }
 
    return res;
}

console.log("hello world".toAlternatingCase(), "HELLO WORLD");
console.log("HELLO WORLD".toAlternatingCase(), "hello world");
console.log("hello WORLD".toAlternatingCase(), "HELLO world");
console.log("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
console.log("12345".toAlternatingCase(), "12345");
console.log("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E");
console.log("String.prototype.toAlternatingCase".toAlternatingCase(), "sTRING.PROTOTYPE.TOaLTERNATINGcASE");
console.log("Hello World".toAlternatingCase().toAlternatingCase(), "Hello World");

/* -------------------------------------------------- */
/* Is the string uppercase? */
/* -------------------------------------------------- */

String.prototype.isUpperCase = function() {
  
    let str = this.valueOf();
      
    if ( str === str.toUpperCase() )
    {
       str = true;
    }
    else
    {
       str = false;
    }
     
    return str;    
}

console.log('c'.isUpperCase(), false, 'c is not upper case');
console.log('C'.isUpperCase(), true, 'C is upper case');
console.log('hello I AM DONALD'.isUpperCase(), false, 'hello I AM DONALD not is upper case');
console.log('HELLO I AM DONALD'.isUpperCase(), true, 'HELLO I AM DONALD is upper case');
console.log('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase(), false, 'ACSKLDFJSgSKLDFJSKLDFJ not is upper case');
console.log('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase(), true, 'ACSKLDFJSGSKLDFJSKLDFJ is upper case');
console.log('Hello World'.isUpperCase(), false, 'Hello World is not upper case');
console.log('hello world'.isUpperCase(), false, 'hello world is not upper case');
console.log('Hello world'.isUpperCase(), false, 'Hello world is not upper case');
console.log('hello World'.isUpperCase(), false, 'hello World is not upper case');
console.log('HELLO WORLD'.isUpperCase(), true, 'HELLO WORLD is upper case');
console.log('Bob walks his dog every day.'.isUpperCase(), false, 'Bob walks his dog every day. is not upper case');
console.log('BOB walks his dog every day.'.isUpperCase(), false, 'BOB walks his dog every day. is not upper case');
console.log('BOB WALKS HIS DOG EVERY DAY.'.isUpperCase(), true, 'BOB WALKS HIS DOG EVERY DAY. is upper case');
console.log('BOB WALKs HIS DOG EVERY DAY.'.isUpperCase(), false, 'BOB WALKs HIS DOG EVERY DAY. is not upper case');
console.log('#lovewins'.isUpperCase(), false, '#lovewins is not upper case');
console.log('#Lovewins'.isUpperCase(), false, '#Lovewins is not upper case');
console.log('#loveWins'.isUpperCase(), false, '#loveWins is not upper case');
console.log('#LoveWins'.isUpperCase(), false, '#LoveWins is not upper case');
console.log('#LOVEWins'.isUpperCase(), false, '#LOVEWins is not upper case');
console.log('#LoveWINS'.isUpperCase(), false, '#LoveWINS is not upper case');
console.log('#LOVEWINs'.isUpperCase(), false, '#LOVEWINs is not upper case');
console.log('#lOVEWINS'.isUpperCase(), false, '#lOVEWINS is not upper case');
console.log('#LOVEWINS'.isUpperCase(), true, '#LOVEWINS is upper case');

/* -------------------------------------------------- */
/* Removing Elements */
/* -------------------------------------------------- */

function removeEveryOther(arr){

    var arrNew = []
    
    for ( var i = 0; i < arr.length; i = i+2 ) {
        arrNew.push(arr[i]);
    };
        
    return arrNew;
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
console.log(removeEveryOther([[1, 2]]), [[1, 2]]);
console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);

/* -------------------------------------------------- */
/* Reverse String */
/* -------------------------------------------------- */

function toMilisec( h, m, s ){

    /*
    const sec = s * 1000;
    const min = m * 60 *1000;
    const hour = h * 60 * 60 *1000;
    const ms = hour + min + sec;
    */

    const ms = (h * 60 * 60 + m * 60 + s)*1000;
    return ms;
}

console.log(toMilisec(0,1,1),61000);
console.log(toMilisec(1,1,1),3661000);

/* -------------------------------------------------- */
/* Reverse String */
/* -------------------------------------------------- */

function reverseString( str ){
    let res = '';
    
    for ( var i = str.length - 1; i >= 0; i-- ){
        res += str[i];
    }
    
    return res;
}

console.log(reverseString('world'), 'dlrow');

/* -------------------------------------------------- */
/* Watermelon, Divide */
/* -------------------------------------------------- */

function divide( weight ){
    
    let res = false;

    if ( weight !== 2 && weight % 2 === 0 ){
        res = true;
    }

    return res;  //geras pvz: // return weight > 2 && !(weight % 2);
}

console.log(divide(4), true);
console.log(divide(2), false);
console.log(divide(5), false);
console.log(divide(88), true);

/* -------------------------------------------------- */
/* Every second element remove from array */
/* -------------------------------------------------- */

function removeEveryOther( arr ){

    var arrNew = []

    for ( var i = 0; i < arr.length; i = i+2 ){
        arrNew.push(arr[i]);
    };
    
    return arrNew;
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
console.log(removeEveryOther([[1, 2]]), [[1, 2]]);
console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);


/* -------------------------------------------------- */
/* Number to string */
/* -------------------------------------------------- */

function toString( a ){
    return a.toString();    
}

console.log(toString('123'), '123');

/* -------------------------------------------------- */
/* Number no zero */
/* -------------------------------------------------- */

function noBoringZeros( n ){

    if ( n === 0 )
    {
        return n;
    }
    
    while ( n % 10 === 0 ){
        n = n / 10;
    }
    return n;
}

console.log(noBoringZeros(1450), 145);
console.log(noBoringZeros(960000), 96);
console.log(noBoringZeros(1050), 105);
console.log(noBoringZeros(-1050), -105);
console.log(noBoringZeros(-105), -105);
console.log(noBoringZeros(0), 0);

/* -------------------------------------------------- */
/* Sum average array */
/* -------------------------------------------------- */

function betterThanAverage( classPoints, yourPoints ) {
    
    let arr = classPoints.length;
    let sum = 0;
    let res = false;
    let avg = '';
   
    for( let i=0; i<arr; i++ ){
        sum += classPoints[i];
    }

    avg = sum/arr;

    if ( yourPoints > avg ){
        res = true;
    }

    return res;
}

console.log(betterThanAverage([2, 3], 5), true);

/* -------------------------------------------------- */
/* Convert number to reversed array of digits */
/* -------------------------------------------------- */

function digitize( n ) {
    
    /*
    let res = '';
    res = n.toString().split('').reverse().map(Number);
    return res;
    */
    
    let res = [];
    let str = n.toString();
    for ( let i = str.length - 1; i >= 0; i-- ){
        res.push(parseInt(str[i]));
    }
    
    return res;
}

console.log(digitize(35231),[1,3,2,5,3]);

/* -------------------------------------------------- */
/* Remove First and Last Character */
/* -------------------------------------------------- */

function removeChar( str ){
    let res = '';

    /*let cnt = str.length;

    for( let i=0; i<=cnt; i++ ){    
        if ( i > 0 && i < cnt-1) {
            res += str[i];
        }
    }*/

    res = str.slice(1, -1);

    return res;
};

console.log(removeChar('eloquent'), 'loquen');
console.log(removeChar('country'), 'ountr');
console.log(removeChar('person'), 'erso');
console.log(removeChar('place'), 'lac');

/* -------------------------------------------------- */
/* Sum Mixed Array */
/* -------------------------------------------------- */

function sumMix( x ){
    
    let str = x;
    var total=0;

    for ( let i = 0; i<str.length; i++ ){
        total += parseInt(str[i]);
    }
    
    return total;
}

console.log(sumMix([9, 3, '7', '3']), 22);
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);

/* -------------------------------------------------- */
/* Reversed sequence !!! neissprestas !!!! */
/* -------------------------------------------------- */

/* -------------------------------------------------- */
/*  Lost Without a Map */
/* -------------------------------------------------- */

function maps( x ){

    let arr = x;
    var res = [];

    for ( let i = 0; i<arr.length; i++ ){
        res.push(parseInt(arr[i])*2);
    }
    
    return res;

}

console.log(maps([1, 2, 3]), [2, 4, 6]);
console.log(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]); 
console.log(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]);

/* -------------------------------------------------- */
/*  Lost Without a Map */
/* -------------------------------------------------- */

function monkeyCount( n ) {
    let res = [];

    for ( let i = 1; i<=n; i++ ){
        res.push(i);
    }
    
    return res;
}

console.log((monkeyCount(5)), [1, 2, 3, 4, 5]);
console.log((monkeyCount(3)), [1, 2, 3]);
console.log((monkeyCount(9)), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log((monkeyCount(10)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log((monkeyCount(20)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);


/* -------------------------------------------------- */
/*  What is between? */
/* -------------------------------------------------- */

function between( a, b ) {
    var arr = [];
    for ( var i = a; i <= b; i++ ) {
        arr.push(i);
    }

    return arr;
}

console.log( between(1, 4),'-> [1, 2, 3, 4]');
console.log( between(-2, 2),'-> [-2, -1, 0, 1, 2]');

/* -------------------------------------------------- */
/*  Tip Calculator */
/* -------------------------------------------------- */

function calculateTip( amount, rating ) {     
    let res = '';
    let rate = rating.toLowerCase();
    
    if ( rate === "terrible" ){
        res = 0;
    }
    else if ( rate === "poor" ){
        res = 5;
    }
    else if ( rate === "good" ){
        res = 10;
    }
    else if ( rate === "great" ){
        res = 15;
    }
    else if ( rate === "excellent" ){
        res = 20;
    }
    else{       
        res = "Rating not recognised";
    }

    if ( typeof(res) === 'number' ) {
        res = Math.ceil((res*amount)/100);
    } 

    return res;
}

console.log(calculateTip(20, "Excellent"), 4);
console.log(calculateTip(26.95, "good"), 3);

/* --------------------------------------------------------- */
/* I love you, a little , a lot, passionately ... not at all */
/* --------------------------------------------------------- */

function howMuchILoveYou( nbPetals ) {

    let arr = [
        'I love you',
        'a little',
        'a lot',
        'passionately',
        'madly',
        'not at all',
    ]

    let cnt = arr.length;
    let res = '';

    res = (nbPetals % cnt);

    if ( res > 0 )
    {
        res = arr[res-1];
    }
    else {
        res = arr[cnt-1];
    }

    return res;
     
}

console.log(howMuchILoveYou(7),"I love you")
console.log(howMuchILoveYou(3),"a lot")
console.log(howMuchILoveYou(6),"not at all")

/* --------------------------------------------------------- */
/* My head is at the wrong end! */
/* --------------------------------------------------------- */

function fixTheMeerkat( arr ) {
    return arr.reverse();
}

console.log(fixTheMeerkat(["tail", "body", "head"]), ["head", "body", "tail"]);
console.log(fixTheMeerkat(["tails", "body", "heads"]), ["heads", "body", "tails"]);
console.log(fixTheMeerkat(["bottom", "middle", "top"]), ["top", "middle", "bottom"]);
console.log(fixTheMeerkat(["lower legs", "torso", "upper legs"]), ["upper legs", "torso", "lower legs"]);
console.log(fixTheMeerkat(["ground", "rainbow", "sky"]), ["sky", "rainbow", "ground"]);

/* --------------------------------------------------------- */
/* Student's Final Grade */
/* --------------------------------------------------------- */

function finalGrade ( exam, projects ) {
    let res = '';  
    
    if ( exam > 91 || projects > 10 ){
        res = 100;
    }else if ( exam > 75 && projects >= 5 ){
        res = 90;
    }else if ( exam > 50 && projects >= 2 ){
        res = 75;
    }
    else {
        res = 0;
    }
    
    return (res);
}

console.log(finalGrade(100, 12), 100);
console.log(finalGrade(85, 5), 90);
console.log(finalGrade(0, 11), 100);

/* --------------------------------------------------------- */
/* A Strange Trip to the Market */
/* --------------------------------------------------------- */

function isLockNessMonster( s ) {
   
    let res = '';
    let str = s;

    /*
    if ( s.includes('tree fiddy') || s.includes('three fifty') || s.includes('3.50')){
        res = s;
    }
    */

    /*
    if ( s.indexOf("tree fiddy") > -1 || s.indexOf("three fifty") > -1 || s.indexOf('3.50') > -1)
    {
        res = s;
    } 
    */

    /*
    let arr = ['tree fiddy','three fifty', '3.50'];

    for (var i = 0; i < arr.length; i++) {
        if (s.indexOf(arr[i]) > -1) {
            res = s;
        }
    }
    */

   let arr = ['tree fiddy','three fifty', '3.50'];

   for ( var i = 0; i < arr.length; i++ ) {
       if ( s.includes(arr[i]) ) {
           res = s;
       }
   }

    return res;
} 

console.log(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"));
console.log(!isLockNessMonster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance."));