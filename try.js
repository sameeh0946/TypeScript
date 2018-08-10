var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Video = /** @class */ (function () {
    function Video(title, views, channel, dateOfUpload, desription, likes, dislikes, AddedToPlaylist, comments, duration) {
        var _this = this;
        this.title = title;
        this.views = views;
        this.channel = channel;
        this.dateOfUpload = dateOfUpload;
        this.desription = desription;
        this.likes = likes;
        this.dislikes = dislikes;
        this.AddedToPlaylist = AddedToPlaylist;
        this.comments = comments;
        this.duration = duration;
        this.getDetailsofTitle = function () {
            return _this.title;
        };
        this.getDetailsofViews = function () {
            return _this.views;
        };
        this.getDetailsofChannel = function () {
            return _this.channel;
        };
        this.getDetailsOfLikes = function () {
            return _this.likes;
        };
        this.title = title;
        this.views = views;
        this.channel = channel;
        this.dateOfUpload = dateOfUpload;
        this.desription = desription;
        this.likes = likes;
        this.dislikes = dislikes;
        this.AddedToPlaylist = AddedToPlaylist;
        this.comments = comments;
        this.duration = duration;
    } //End of constructor
    return Video;
}()); //End of class Video
var Trending = /** @class */ (function (_super) {
    __extends(Trending, _super);
    function Trending(title, views, noOfshares, dateOfUpload) {
        var _this = _super.call(this, title, views, dateOfUpload) || this;
        _this.noOfshares = noOfshares;
        _this.selectTopTrending = function () {
            // ALgorithm to find trending videos using parameters such as views, no. of shares according to the dateOfUpload;
        };
        _this.getTitle = function () {
            return _this.getDetailsofTitle();
        };
        _this.getViews = function () {
            return _this.getDetailsofViews();
        };
        _this.getNoOfShares = function () {
            return _this.getNoOfShares;
        };
        _this.noOfshares = noOfshares;
        return _this;
    } //End of constructor for trending.
    return Trending;
}(Video)); // End of class Trending.
var Music = /** @class */ (function (_super) {
    __extends(Music, _super);
    function Music(title, channel, views, noOfSingers, songType) {
        var _this = _super.call(this, title, views) || this;
        _this.noOfSingers = noOfSingers;
        _this.songType = songType;
        _this.titleOfSong = function () {
            return _this.getDetailsofTitle();
        };
        _this.channelOfSong = function () {
            return _this.getDetailsofChannel;
        };
        _this.getNoOfSingers = function () {
        };
        _this.getSongType = function () {
            return _this.songType;
        };
        return _this;
    } //End of constructor
    return Music;
}(Video));
var YoutubeVideo = new Video("Sairat", 21, "cahneel", "21 feb", "this is description of a lovely youtube video ", 12, 412, true, 21, 3);
console.log("_________YouTube_______");
console.log(YoutubeVideo.getDetailsofTitle());
var play = new Trending("Sairat", 21, 31, "4 feb");
console.log(play.getTitle());
var punjabi = new Music("Badnaam kar di", "speed records", 231213, 2, "Hip-Hop");
console.log(punjabi.titleOfSong());
