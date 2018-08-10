class People {
    constructor(private name?:string,private age?:number,private education?:string,private city?:string,private gender?:string,private email?:string,private noOfPages?:number,private isFriend?:boolean){
    this.name=name;
    this.age=age;
    this.education=education;
    this.city=city
    this.gender=gender    
    this.email=email
    this.noOfPages=noOfPages
    this.isFriend=isFriend
}//End of constructor

getPersonName = () => {
    return this.name;
   
}
getPersonAge = () =>{
    return this.age;
}

getIfFriend = () => {
    if(this.isFriend==true){
        return console.log("FRIEND REQUEST ALREADY ACCEPTED ")
    }
    else{
        return console.log("NOT A FRIEND (REQUEST NOT ACCEPTED)");
    }
}





//Functions for friends.




}//End of person class

class Page extends People{
    constructor(private pageName:string,private members:number,private numberOfPosts:number,private likes:number ){
        super(name);

        this.numberOfPosts=numberOfPosts;
        this.members=members;
        this.pageName=pageName;
        this.likes-likes;
    }//End of constructor

 
 pageFollowers = () => {
    // METHOD to find names of people following the particular page.
 }    

 getDetailsofPosts = () => {
     return this.numberOfPosts;
 }
 getDetailsOfLikes = () => {
  return this.likes;
 }

}//End of class Pages

console.log("______FB________")
let person = new People ("Sameeh Ahmed",21,"Graduate","Mumbai","Male","abdas@gmail.com",12,true);
console.log(person.getPersonName());

let Ninegag = new Page ("9Gag",211,22,31);
console.log(Ninegag.getDetailsofPosts())