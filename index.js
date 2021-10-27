// console.log('hello')

let jonSnowAttack = 25;
let jamieLannisterAttack = 35;

if (jonSnowAttack > jamieLannisterAttack) {
    console.log('Jon has the greater attack strength')
} else if (jamieLannisterAttack > jonSnowAttack) {
    console.log('Jamie has the greater attack strength')
} else {
    console.log('Jamie & Jon have equal attack strengths!')
}

let jonSnowHealth = 100
let jonSnowDefense = 0;

if (jonSnowHealth <= jamieLannisterAttack) {
    console.log('Jon Snow has been defeated!')
}  else {
    jonSnowHealth -= jamieLannisterAttack
    console.log(`Jon Snow new health: ${jonSnowHealth}`)
}

jonSnowDefense += 25;

if (jonSnowHealth <= (jamieLannisterAttack - jonSnowDefense)) {
    console.log('Jon Snow has been defeated!')
}  else {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    console.log(`Jon Snow new health: ${jonSnowHealth}`)
}

if (jonSnowHealth <= 50) {
    jonSnowHealth += 50;
} else {
    jonSnowHealth = 100;
}

console.log ('Multi attack!')

for (let i = 0; i < 5; i++) {
    if (jonSnowHealth <= (jamieLannisterAttack - jonSnowDefense)) {
        console.log('Jon Snow has been defeated!')
    }  else {
        jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
        console.log(`Jon Snow new health: ${jonSnowHealth}`)
    } 

    console.log(i)
}

console.log('Jon was attacked!')

for (let i = 100; i > 0; i -= 2) {
    console.log(i)
}