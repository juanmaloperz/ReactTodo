var groupA = ['jen', '25'];
var groupB = ['Vikram'];
var final = [3, ...groupA];

console.log(final);

function greet(name,age){
  return ('your name is '+name+ 'and you are'+ age );
}
console.log(greet(...groupA));
