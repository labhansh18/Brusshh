class cat extends Animal{
   //overwrite parent contructor
  contructor(){
    //create a clone of parent
    super("Cat", name, "Mewww"); //calls parents creation
  }
  
  //personal function
  talk(){
    print('Helooooo, mewww')
  }
}