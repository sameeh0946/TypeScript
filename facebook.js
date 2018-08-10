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
var People = /** @class */ (function () {
    function People(name, age, education, city, gender, email, noOfPages, isFriend) {
        var _this = this;
        this.name = name;
        this.age = age;
        this.education = education;
        this.city = city;
        this.gender = gender;
        this.email = email;
        this.noOfPages = noOfPages;
        this.isFriend = isFriend;
        this.getPersonName = function () {
            return _this.name;
        };
        this.getPersonAge = function () {
            return _this.age;
        };
        this.getIfFriend = function () {
            if (_this.isFriend == true) {
                return console.log("FRIEND REQUEST ALREADY ACCEPTED ");
            }
            else {
                return console.log("NOT A FRIEND (REQUEST NOT ACCEPTED)");
            }
        };
        this.name = name;
        this.age = age;
        this.education = education;
        this.city = city;
        this.gender = gender;
        this.email = email;
        this.noOfPages = noOfPages;
        this.isFriend = isFriend;
    } //End of constructor
    return People;
}()); //End of person class
var Page = /** @class */ (function (_super) {
    __extends(Page, _super);
    function Page(pageName, members, numberOfPosts, likes) {
        var _this = _super.call(this, name) || this;
        _this.pageName = pageName;
        _this.members = members;
        _this.numberOfPosts = numberOfPosts;
        _this.likes = likes;
        _this.pageFollowers = function () {
            // METHOD to find names of people following the particular page.
        };
        _this.getDetailsofPosts = function () {
            return _this.numberOfPosts;
        };
        _this.getDetailsOfLikes = function () {
            return _this.likes;
        };
        _this.numberOfPosts = numberOfPosts;
        _this.members = members;
        _this.pageName = pageName;
        _this.likes - likes;
        return _this;
    } //End of constructor
    return Page;
}(People)); //End of class Pages
console.log("______FB________");
var person = new People("Sameeh Ahmed", 21, "Graduate", "Mumbai", "Male", "abdas@gmail.com", 12, true);
console.log(person.getPersonName());
var Ninegag = new Page("9Gag", 211, 22, 31);
console.log(Ninegag.getDetailsofPosts());
