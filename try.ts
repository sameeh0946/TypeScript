class Video {

constructor (private title?:string,private views?:number,private channel?:string,private dateOfUpload?:string,private desription?:string,private likes?:number,private dislikes?:number,private AddedToPlaylist?:boolean,private comments?:number,private duration?:number) {

this.title=title;
this.views=views;
this.channel=channel;
this.dateOfUpload=dateOfUpload;
this.desription=desription;
this.likes=likes;
this.dislikes=dislikes;
this.AddedToPlaylist=AddedToPlaylist;
this.comments=comments;
this.duration=duration;

} //End of constructor

getDetailsofTitle = () => { 
    return this.title;
}

getDetailsofViews = () => {
    return this.views;
}

getDetailsofChannel = () => {
    return this.channel;
}
getDetailsOfLikes = () => {
    return this.likes;
}

//Simmilar Functions to retrieve Data;

} //End of class Video


class Trending extends Video {

    constructor(title :string,views?:number, public noOfshares?:number,dateOfUpload ?:string){
    super(title,views,dateOfUpload);
    this.noOfshares = noOfshares;

    } //End of constructor for trending.
    
    selectTopTrending = () => {

// ALgorithm to find trending videos using parameters such as views, no. of shares according to the dateOfUpload;
    
    }


    getTitle = () => {
        return this.getDetailsofTitle();
    }
    getViews = () => {
        return this.getDetailsofViews();
    }
    getNoOfShares = () => {
        return this.getNoOfShares;
    }

    

} // End of class Trending.


class Music extends Video {
 
    constructor (title?:string,channel?:string,views?:number,public noOfSingers?:number,public songType?:string) {
    super (title,views);

    
    }//End of constructor


    
    titleOfSong = () => {
        return this.getDetailsofTitle();
    }
    channelOfSong = () => {
        return this.getDetailsofChannel;
    }
    getNoOfSingers = () => {

    }
    getSongType = () => {
        return this.songType;
    }

}

let YoutubeVideo = new Video("Sairat",21,"cahneel","21 feb","this is description of a lovely youtube video ",12,412,true,21,3)
console.log("_________YouTube_______")

console.log(YoutubeVideo.getDetailsofTitle());
let play = new Trending("Sairat",21,31,"4 feb");

console.log(play.getTitle());

let punjabi = new Music("Badnaam kar di","speed records",231213,2,"Hip-Hop")
console.log(punjabi.titleOfSong());

