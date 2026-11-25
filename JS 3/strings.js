let query="Find places near sushantlok";
console.log("q",query);
let trimmedQuery=query.trim();
console.log("q",trimmedQuery);
let wordsArr=trimmedQuery.split(" ");
console.log("wordArr",wordsArr);
let outcome=wordsArr.join("+");
console.log("outcome str",outcome);