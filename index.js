var kittens = ["Milo", "Otis", "Garfield"] 
function destructivelyAppendKitten(name)  {
  kittens.push("Ralph")
}
function destructivelyPrependKitten(name)  {
  kittens.unshift("Bob")
}
function destructivelyRemoveLastKitten(name)  {
  kittens.pop("Frank")
}
function destructivelyRemoveFirstKitten(name)  {
  kittens.shift("Billy")
}
function appendKitten(name)  {
  return [...kittens, "Broom"]
}
function prependKitten(name)  {
  return ["name",...kittens]
}