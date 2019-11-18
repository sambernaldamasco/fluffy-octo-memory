//console.log("there");
const app = angular.module('BlogApp', []);
app.controller('MainController',['$http',function($http){
//index post
this.getPosts =() => {
  $http({
    method:'GET',
    url:'/posts'
  }).then((response) => {
    console.log(response);
  },(err) => {
    console.log(err);
  })
}
this.getPosts();
//create post

///edit post

//delete post





}]);
