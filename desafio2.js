function calculateLevel(wins, losses) {
    const winBalance = wins - losses;

    const levels = [
        { threshold: 10, level: 'Ferro' },
        { threshold: 21, level: 'Bronze' },
        { threshold: 51, level: 'Prata' },
        { threshold: 81, level: 'Ouro' },
        { threshold: 91, level: 'Diamante' },
        { threshold: 101, level: 'Lendário' },
        { threshold: Infinity, level: 'Imortal' }
    ];


    const level = levels.find(({ threshold }) => wins < threshold).level;

    return `O Herói tem de saldo de **${winBalance}** está no nível de **${level}**`;
}

console.log(calculateLevel(85, 10));  
console.log(calculateLevel(95, 5));  
console.log(calculateLevel(105, 0));
