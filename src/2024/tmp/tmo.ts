
const s = `Button A: X+94, Y+34
Button B: X+22, Y+67
Prize: X=8400, Y=5400

Button A: X+26, Y+66
Button B: X+67, Y+21
Prize: X=12748, Y=12176

Button A: X+17, Y+86
Button B: X+84, Y+37
Prize: X=7870, Y=6450

Button A: X+69, Y+23
Button B: X+27, Y+71
Prize: X=18641, Y=10279`

const bCost = 1;
const aCost = 3;

let games = s.split('\n\n').map(g => {
    const buttonA = g.split('\n')[0].match(/\d+/g)?.map(Number) ?? [];
    const buttonB = g.split('\n')[1].match(/\d+/g)?.map(Number) ?? [];
    const prize = g.split('\n')[2].match(/\d+/g)?.map(Number) ?? [];
    return {
        buttonA: {x: buttonA[0], y: buttonA[1]},
        buttonB: {x: buttonB[0], y: buttonB[1]},
        prize: {x: prize[0], y: prize[1]}
    };
});

for (const game of games) {

    const allOKY = doIt(game.buttonA.y,game.buttonB.y,game.prize.y)

    for (const ok of allOkY) {


//todo better determine here from which its calvulqted
        if(ok.price=== 3){
         itsa the index a
}

     }
    }

    console.log((number1 / numberMax) * price);
    console.log(priceOther * i);
    
}

function doIt(ba1,bb1,prize1){
    let numberMin = Math.min(game.buttonA.y, game.buttonB.y);
    let numberMax = Math.max(game.buttonB.y, game.buttonA.y);

    const allOk=[];
    for (let i = 0; i < game.prize.y; i++) {

        let number1 = game.prize.y - (numberMin * i);
        if (number1 > 0 && number1 % numberMax === 0) {
            const price = numberMax === game.buttonB.y ? 1 : 3
            allOk.push({ price, index1});
        }
    }
    return allOk;
}


