function calculateLevel(wins, losses) {

    const winBalance = wins - losses;
    let level;


    if (wins < 10) {
        level = 'Ferro';
    } else if (wins >= 11 && wins <= 20) {
        level = 'Bronze';
    } else if (wins >= 21 && wins <= 50) {
        level = 'Prata';
    } else if (wins >= 51 && wins <= 80) {
        level = 'Ouro';
    } else if (wins >= 81 && wins <= 90) {
        level = 'Diamante';
    } else if (wins >= 91 && wins <= 100) {
        level = 'Lendário';
    } else if (wins >= 101) {
        level = 'Imortal';
    }
    return `O Herói tem de saldo de **${winBalance}** está no nível de **${level}**`;
}


console.log(calculateLevel(85, 10)); 
console.log(calculateLevel(95, 5));   
console.log(calculateLevel(105, 0));  