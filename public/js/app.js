//console.log("there");
const app = angular.module('BlogApp', []);
app.controller('MainController', ['$http', function($http) {
  this.indexOfEditForm = null;
  //index post
  this.getPosts = () => {
    $http({
      method: 'GET',
      url: '/posts'
    }).then((response) => {
      console.log(response);
      this.posts = response.data.reverse();
    }, (err) => {
      console.log(err);
    })
  }

  //create post
  this.createPosts = () => {
    $http({
      method: 'POST',
      url: '/posts',
      data: {
        author: this.author,
        title: this.title,
        description: this.description
      }
    }).then((response) => {
      console.log(response);
      this.posts = response.data;
      this.getPosts();
    }, (err) => {
      console.log(err);
    })
  }


  ///edit post

  //delete post
  this.deletePosts = (id) => {
    $http({
      method: 'DELETE',
      url: '/posts/' + id
    }).then(
      (response) => {
        console.log(response);
        this.getPosts();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  //edit postS
  this.editPosts = (post) => {
    //console.log(post,this.updatedTitle);
    $http({
      method: 'PUT',
      url: '/posts/' + post._id,
      data: {
        author: this.author,
        title: this.updatedTitle,
        description: this.updatedDescription
      }
    }).then((response) => {
      console.log(response);
      this.getPosts();
      this.updatedTitle = "";
      this.updatedDescription = "";
      this.indexOfEditForm = null;
    }, (err) => {
      console.log('error');
    });
  }

  this.getPosts();

}]);
