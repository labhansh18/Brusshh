class Animal{
  //special function that takes incoming parameters
  constructor(breed="human", name="Nobody", lang="silence"){
  //personal properties
    this.breed = breed;
    this.name = name;
    this.language = lang;
  }
//personal function
talk () {
  print(this.language);
}
  
  express(){
    print("Waddup I am " + this.breed + ", I yap "+ this.language + " , I am  " + this.name + "!!")
    
  }
}



 function setup(){
   //create Black Cat
   let blackCat = new Animal("boytoy", "doggy", "gangganggang"
   );
   let chinnu = new Animal("Chinnu", "Billu", "Yummmmmm")
   
   //let them talk
   blackCat.talk();
   blackCat.express();
   
   chinnu.talk()
   chinnu.express()

}