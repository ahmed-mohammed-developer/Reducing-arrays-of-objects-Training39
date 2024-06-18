const grades = [{grade: 10}, {grade: 15}, {grade: 5}];
 const gra = grades.reduce((total, cureent) => {
 return total + cureent.grade;
}, 0);
console.log(gra)



const tweets = [
  {
      id: 10512,
      stats: {
          likes: 41,
          retweets: 54
      }
  },
  {
      id: 41241,
      stats: {
          likes: 14,
          retweets: 20
      }
  }
];
const soc = tweets.reduce((total, cureent) => {
  return total + cureent.stats.likes + cureent.stats.retweets
}, 0);

console.log(soc);



const run = () => {
  console.log("setp 1");
  try {
    getaaa();
  } catch (error){
    console.error(error);
  }
  console.log("se2")
}

run()



const question2 = () => {
  // return the answer of: false === false
  return false === false ;
}
console.log(question2);


function word_repeat(word, n) {
  // write your code here
  let set = "";
  for(let i = 0; i < n; i++){
    set += word;
  }

  return set
}
console.log(word_repeat("a", 2));


function kSumSubset(numArray, k) {
  // write your code here
    const sumArray = numArray.reduce(function(t, c){
      return t + c;
    }, 0);
   console.log(sumArray)
}

console.log(kSumSubset([7, 3, 2, 5, 8], 14))



function operation(num1, num2) {
  // write your code here
   if(num1 + num2 === 24){
    return "added"
   } else if(num1 * num2 === 24){
    return "multiplied"
   } else if(num1 - num2 === 24){
    return "divided"
   } else if(num1 / num2 === 24){
    return "subtracted"
   } 
   return "None";
};

console.log(operation(24, 1))


function cone_volume(radius, height) {
  // write your code here
  return (1 / 3) * 1.3 * Math.pow(radius, 2) * height
}

console.log(cone_volume(1.3,  5.2))



function match_arrays(array1, array2) {
  // write your code here
    return [...array1] === [...array2];
}
consle.log(matc)







