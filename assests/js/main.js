
let pokemonPikachu = new Pokemoon("pikachu")
let pokemonPignite = new Pokemoon("pignite")
let pokemonPikipek = new Pokemoon("pikipek")

let omar = new TrainerOmar()
omar.add(pokemonPikachu)
omar.add(pokemonPignite)
omar.add(pokemonPikipek)


function getImageUrl(pokemon) {
    if (pokemon.id < 100) {
        pokemon.id = "0" + pokemon.id
    }
    let img = document.createElement("img")
    img.src = POKEMON_IMAGE_URL + pokemon.id + ".png"
    return img
}

function displayStatsOfPokemon(id) {
    let displays = document.getElementById(id)
    if (displays.style.display == "block"){
        displays.style.display = "none"
    }
    else{
        displays.style.display = "block"
    }
 }

function maintainBackgroundForEachPokemon(pmon, nameAndImgList, statList){
    if (pmon.id < 100){
        uls[0].appendChild(nameAndImgList)
        divs[3].appendChild(statList)
    }
    else if (pmon.id > 100 && pmon.id < 500){
        uls[1].appendChild(nameAndImgList)
        divs[4].appendChild(statList)
    }
    else
    {
        uls[2].appendChild(nameAndImgList)
        divs[5].appendChild(statList)
    } 
 }

function getAbilities(pokemon){
     let abilitiesArray = []
     pokemon.abilities.forEach(
         ability => {
            abilitiesArray.push(ability.ability.name)
         }
     )
     return abilitiesArray
 }

 function callingObjects(pmon) {
    let ul
    if ( pmon.id == 25) {
        ul = document.querySelector("#pikachu")
    }
    else if (pmon.id == 499){
        ul = document.querySelector("#pignite") 
    }
    else if (pmon.id == 731){
        ul = document.querySelector("#pikipek")
    }

// Appending name to the nameAndImgList li
    let name = document.createElement("li")
    name.innerHTML = "name: " +  pmon.name
    ul.appendChild(name)

// Attack is being appended on the html
    let attack = document.createElement("li")
    attack.innerHTML = "attack: " + pmon.stats[4].base_stat
    ul.appendChild(attack)

// Defense is being appended on the html
    let defense = document.createElement("li")
    defense.innerHTML = "defense: " + pmon.stats[3].base_stat
    ul.appendChild(defense)

 // Abilites information being retrieved and append to li
    let pokemonAbilities = getAbilities(pmon)
    let abilities = document.createElement("li")
    abilities.innerHTML = " abilities: " + "<br>" +  pokemonAbilities[0] + ", " + pokemonAbilities[1] 
    ul.appendChild(abilities)

// HP, Attack, Defense and Abilites information being retrieved and append to statList li
    let hp = document.createElement("li")
    hp.innerHTML =  "hp: " + pmon.stats[5].base_stat
    ul.appendChild(hp)

    

    

      
//[pmon.abilities[0].ability.name + ",  " + pmon.abilities[1].ability.name]
    


// Maintaing a background with specific Pookemon regardles of who's information return first from the API    
   
    }



    // Kevin Code is below

  let charmeleon
  let ul = document.querySelector("ul")
  let kevinKetchum = new KevinKetchum()

  //Charmeleon
  axios.get("https://pokeapi.co/api/v2/pokemon/5/")
  .then((response) => {

    let ul = document.querySelector("#char")
    let name = document.createElement("li")
    let attack = document.createElement("li")
    let defense = document.createElement("li")
    let abilities = document.createElement("li")
    let hp= document.createElement("li")
    let data = response.data

    charmeleon = new Pokemon(
      data.name,
      data.stats[4].base_stat,
      data.stats[3].base_stat,
      data.abilities,
      data.stats[5].base_stat
    )

    kevinKetchum.add(charmeleon)

    name.innerHTML = "name:" + " " + charmeleon.name
    attack.innerHTML = "attack:" + " " + charmeleon.attack
    defense.innerHTML ="defense:" + " " + charmeleon.defense
    abilities.innerHTML ="abilities:" + " " +
      [charmeleon.abilities[0].ability.name] + "\n" +
      [charmeleon.abilities[1].ability.name]

    hp.innerHTML = "hp:" + " " + charmeleon.hp
    data.innerHTML = charmeleon.data

    ul.appendChild(name)
    ul.appendChild(attack)
    ul.appendChild(defense)
    ul.appendChild(abilities)
    ul.appendChild(hp)

  }).catch((error) => {
     console.log(error)
  })

    //jigglypuff
    axios.get("https://pokeapi.co/api/v2/pokemon/jigglypuff/")
    .then((response) => {

      let ul = document.querySelector("#jiggly")

      let name = document.createElement("li")
      let attack = document.createElement("li")
      let defense = document.createElement("li")
      let abilities = document.createElement("li")
      let hp= document.createElement("li")
      let data = response.data


      let jigglypuff = new Pokemon(
        data.name,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
        data.abilities,
        data.stats[5].base_stat
      )

      kevinKetchum.add(jigglypuff)

      name.innerHTML = "name:" + " " + jigglypuff.name
      attack.innerHTML = "attack:" + " " + jigglypuff.attack
      defense.innerHTML = "defense:" + " " + jigglypuff.defense
      abilities.innerHTML = "abilities:" + " " +
        [jigglypuff.abilities[0].ability.name] +"\n"+
        [jigglypuff.abilities[1].ability.name] +"\n"+
        [jigglypuff.abilities[2].ability.name]

      hp.innerHTML = "hp:" + " " + jigglypuff.hp
      data.innerHTML = jigglypuff.data

      ul.appendChild(name)
      ul.appendChild(attack)
      ul.appendChild(defense)
      ul.appendChild(abilities)
      ul.appendChild(hp)

  }).catch((error) => {
     console.log(error)
   })

   //meowth
   axios.get("https://pokeapi.co/api/v2/pokemon/meowth/")
   .then((response) => {

     let ul = document.querySelector("#meowth")

     let name = document.createElement("li")
     let attack = document.createElement("li")
     let defense = document.createElement("li")
     let abilities = document.createElement("li")
     let hp= document.createElement("li")
     let data = response.data

     let meowth = new Pokemon(
       data.name,
       data.stats[4].base_stat,
       data.stats[3].base_stat,
       data.abilities,
       data.stats[5].base_stat
     )

     kevinKetchum.add(meowth)

     name.innerHTML = "name:" + " " + meowth.name
     attack.innerHTML = "attack:" + " " + meowth.attack
     defense.innerHTML = "defense:" + " " + meowth.defense
     abilities.innerHTML = "abilities:" + " " +
     [meowth.abilities[0].ability.name] + "\n" +
     [meowth.abilities[1].ability.name] + "\n" +
     [meowth.abilities[2].ability.name]

     hp.innerHTML ="hp:" + " " + meowth.hp
     data.innerHTML = meowth.data

     ul.appendChild(name)
     ul.appendChild(attack)
     ul.appendChild(defense)
     ul.appendChild(abilities)
     ul.appendChild(hp)

   }).catch((error) => {
      console.log(error)
    })
