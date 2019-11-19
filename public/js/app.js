//console.log("there");
const app = angular.module('BlogApp', []);
app.controller('MainController', ['$http', function($http) {
  this.indexOfEditForm = null;
  this.createNewPost = false;

///to toggle betwen showing and hiding details on clicking title
this.showDetails= false;
this.toggleDetails =() => {
  this.showDetails=!this.showDetails;
}
/////////////////////////

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
      this.author = ''
      this.title = ''
      this.description = ''
      this.createNewPost = false
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
        author: post.author,
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


  this.addLikes = (post) => {
    post.likes++

    $http({
      method: 'PUT',
      url: '/posts/' + post._id,
      data: {
        likes: post.likes
      }
    }).then((response) => {
      console.log(response);
      this.getPosts();
    }, (err) => {
      console.log('error');
    });
  }

  this.getPosts();

}]);
