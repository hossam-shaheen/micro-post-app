import easyHttp from "./easyFecth";
import ui from "./UI";


// Fetch Data when document loaded

window.addEventListener("DOMContentLoaded", getPosts);

function getPosts() {

  easyHttp.get("http://localhost:3000/posts").then(res => {

    ui.showPosts(res);

  });
}




document.querySelector(".post-submit").addEventListener("click", setPosts);

function setPosts(e) {
  const title = document.querySelector("#title"),
    body = document.querySelector("#body");
  if (title.value !== "" && body.value !== "") {

    const data = {
      title: title.value,
      body: body.value
    }

    easyHttp.post("http://localhost:3000/posts", data).then(res => {

      ui.addPost(res);

    });

    ui.clearFields();
    ui.setAlert("Post Added sucessfully", "alert alert-success");

  } else {
    ui.setAlert("Please set title and body", "alert alert-danger");
  }

  e.preventDefault();

}




document.querySelector("#posts").addEventListener("click", removePosts);

function removePosts(e) {

  if (e.target.classList.contains("fa-remove")) {
    const id = e.target.parentNode.getAttribute("data-id");

    easyHttp.delete(`http://localhost:3000/posts/${id}`).then(res => {
      getPosts();
    });
    ui.setAlert("Post removed sucessfully", "alert alert-danger");

  };

  e.preventDefault();

}




document.querySelector("#posts").addEventListener("click", editForm);

function editForm(e) {

  if (e.target.classList.contains("fa-edit")) {
    const id = e.target.parentNode.getAttribute("data-id");

    easyHttp.get("http://localhost:3000/posts").then(res => {

      const currentPost = res.filter(post => +post.id === +id);

      ui.fillForm(currentPost[0]);

    });

    ui.editMode();
  };

  e.preventDefault();

}




document.querySelector(".post-edit").addEventListener("click", editPost);

function editPost(e) {


  const title = document.querySelector("#title"),
    body = document.querySelector("#body"),
    id = document.querySelector("#id");

  const post = {
    title: title.value,
    body: body.value
  }

  if (post.title !== "" || post.body !== "") {

    easyHttp.put(`http://localhost:3000/posts/${id.value}`, post).then(res => {
      getPosts();
    })

    ui.clearFields();
    ui.setAlert("Post Updated sucessfully", "alert alert-success");
    ui.addMode();
  } else {
    ui.setAlert("Please set title and body", "alert alert-danger");
  }

  e.preventDefault();
}