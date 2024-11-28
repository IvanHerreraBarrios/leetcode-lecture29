var countVowelStrings = function(n) {
    const memo = {}
    return countVowelStringsRec(memo, n, 0)
};

function countVowelStringsRec(memo, n, pos){
    if(n === 0 ) return 1
    let count = 0
    for(let i=pos; i < 5; i++){
        const val = memo[`${n-1}-${i}`]
        const result = val || countVowelStringsRec(memo, n-1, i)

        memo[`${n-1}-${i}`] = result
        count += result
    }
    return count
}