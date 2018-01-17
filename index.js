// function called `BoardMember` that sets the following properties: `name`, `homeState`, and `training
function BoardMember (name, homeState, training) {

  this.name = name;
  this.homeState = homeState;
  this.training = training;
  this.approve = function () {
    return 'You can do that!'
  }
  this.doCharity = function () {
    return 'I like to help people.'
  }
  this.releasePressStatement = function () {
    return 'You will see great things from Scuber.'
  }
  this.sayHi = function () {
    return `Hi, my name is ${name}. I am from ${homeState}, and I was trained in ${training}.`
  }

}

BoardMember.Prototype.veto = function () {
  return 'No, I must disagree'
}

/*+ `veto` — returns `No, I must disagree`

+ `approve` — returns `You can do that!`

+ `doCharity` — returns `I like to help people.`

+ `releasePressStatement` — returns `You will see great things from Scuber.`

+ `sayHi` — returns `"Hi, my name is <name>. I am from <homestate>, and I was trained in <training>.`
*/
