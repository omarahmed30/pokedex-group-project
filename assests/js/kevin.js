
//create a class to contain selected api info
class KevinKetchum {
  constructor () {
    this.all = []
  }
  add(pokemon) {
    this.all.push(pokemon)
//adds and pushes needed api info
}

get(name) {
  return this.all.find(pokemon => pokemon.name == name)
  }
}

  class Pokemon {
    constructor(name, attack, defense, abilities,hp) {
      this.name = name
      this.attack = attack
      this.defense = defense
      this.abilities = abilities
      this.hp = hp
    }
  }

  //button click event
//   let button = document.querySelector(".shiny-button")
//   button.addEventListener("click", event => {
//     window.location.href = "shiny.html"
// })
