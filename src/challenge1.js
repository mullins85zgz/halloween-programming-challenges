/**
 * 
 Durante la noche de Halloween 🎃, una bruja 🧙‍♀️ está preparando una mezcla mágica. Tiene una lista de pociones, cada una con un poder asociado, y quiere combinar dos de ellas para obtener un poder total específico.

Dada una lista de enteros donde cada número representa el poder de una poción 🧪 y un número entero que representa el poder objetivo, debes encontrar el índice de las dos primeras pociones que sumen exactamente el poder objetivo.
 */


function createMagicPotion(potions, target) {
  let map = {}
  for (let i = 0; i < potions.length; i++) {
    let diff = target - potions[i]
    if (map[diff] !== undefined) {
      return [map[diff], i]
    }
    map[potions[i]] = i
  }
  return undefined
}

var potions = [11, 3, 7, 5]
var goal = 10

console.log(createMagicPotion(potions, goal)) 