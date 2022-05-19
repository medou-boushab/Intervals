/* 
    1-Expliquez, en quelques lignes, ce que fait cette fonction
    - Cette fonction, prend une list des intervals et retourne le résultat de l'union de ses intervals.
    3- Précisez en combien de temps vous avez implémenté cette fonction.
    10min
*/

function foo(listOfIntervals){
    const listOfIntervalsSorted = listOfIntervals.sort((interval1, interval2) => {
            return interval1[0] - interval2[0];
    })
    const output = [listOfIntervalsSorted[0]]
    for (let index = 1; index < listOfIntervalsSorted.length; index++) {
        const interval = listOfIntervalsSorted[index];
        if(output[output.length-1][1] >= interval[0] && output[output.length-1][1] < interval[1]){
            output.push( [output[output.length-1][0],  interval[1]] )
            output.splice(output[output.length-2],1)
        } else if(output[output.length-1][1] < interval[1]){
            output.push(interval)
        }
    }
    return output;
}

console.log(foo([[0, 3]]))
console.log(foo([[0, 4], [-1,2]]))
console.log(foo([[1,3],[2,6],[8,10],[15,18]]))
console.log(foo([[0, 3], [6, 10]]))
console.log(foo([[0, 5], [3, 10]]))
console.log(foo([[0, 5], [2, 4]]) )
console.log( foo([[7, 8], [3, 6], [2, 4]]))
console.log( foo([[3, 6], [3, 4], [15, 20], [16, 17], [1, 4], [6, 10], [3, 6]]) )