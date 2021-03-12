function main() {

    var myNoun = "dog";
    var myVerb = "ran";
    var myAdjective = "big";
    var myAdverb = "quickly";
    var wordBlanks = "His " + myNoun + " is really " + myAdjective + ", so he " + myVerb + " " + myAdverb + " for food" + ".";


    return wordBlanks;
}

console.log(main());
module.exports = main;