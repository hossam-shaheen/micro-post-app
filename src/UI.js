class UI {

    constructor() {
        this.title = document.querySelector("#title");
        this.body = document.querySelector("#body");
        this.posts = document.querySelector("#posts");
        this.id = document.querySelector("#id");
        this.postSubmit = document.querySelector(".post-submit");
        this.postEdit = document.querySelector(".post-edit");
    }
    showPosts(posts) {
        let postElement = "";
        posts.forEach(post => {

            postElement += `<div class="list-group">
            <div class="list-group-item">
            <span style=" width: 93%;float: left;">
            <h1 >${post.title}</h1>
            <p>${post.body}</p>
            </span>
    
            <span class="badge badge-pill">
    
            <a href="" data-id="${post.id}">  
                    <i class="fa fa-edit" style="font-size:20px;"></i></span>
                </a>
    
                <a href="" data-id="${post.id}">  
                    <i class="fa fa-remove" style="font-size:20px;"></i></span>
                </a>
            </div>   
          </div>`;

        });

        this.posts.innerHTML = postElement;
    }


    addPost(post) {

        this.posts.innerHTML += `<div class="list-group">
        <div class="list-group-item">
        <span style=" width: 93%;float: left;">
        <h1 >${post.title}</h1>
        <p>${post.body}</p>
        </span>

        <span class="badge badge-pill">

        <a href="" data-id="${post.id}">  
                <i class="fa fa-edit" style="font-size:20px;"></i></span>
            </a>

            <a href="" data-id="${post.id}">  
                <i class="fa fa-remove" style="font-size:20px;"></i></span>
            </a>
        </div>   
      </div>`;
    }

    clearFields() {
        this.title.value = "";
        this.body.value = "";

    }

    setAlert(alertMessage, alertClass) {

        const alert = document.createElement("div");
        alert.className = alertClass;
        alert.textContent = alertMessage;
        const postsContainer = document.querySelector(".postsContainer")
        const card = document.querySelector(".card");
        postsContainer.insertBefore(alert, card);

        this.removeAlert()
    }

    removeAlert() {
        const alertElement = document.querySelector(".alert");

        if (alertElement) {
            setTimeout(_ => alertElement.remove(), 3000);
        }
    }

    addMode() {
        this.postSubmit.style.display = "block";
        this.postEdit.style.display = "none";
    }

    editMode() {
        this.postSubmit.style.display = "none";
        this.postEdit.style.display = "block";
    }

    fillForm(currentPost) {

        this.title.value = currentPost.title;
        this.body.value = currentPost.body;
        this.id.value = currentPost.id;
    }
}

const ui = new UI();

export default ui;