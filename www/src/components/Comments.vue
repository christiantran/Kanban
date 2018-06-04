<template>
    <div>
<nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="#">Home
                        <span class="sr-only">(current)</span>
                    </a>
                    <button type="button" class='btn btn-link' data-toggle="modal" data-target="#createListModal">Create List</button>

<!-- CREATE COMMENT -->
          <!-- Modal -->
<button type="button" class='btn btn-link' data-toggle="modal" data-target="#createBoardModal">Create Comment</button>
          <div class="modal fade" id="createCommentModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Create a New Comment</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form v-on:submit.prevent="newComment">
                    <div class="form-group">
                      <input type="text" name="commentBody" v-model="
                          comment.body" class="form-control" id="formGroupExampleInput" placeholder="Comment" required>
                    </div>
                    <div class="form-group">
                      <input type="text" name="commentDescription" v-model="
                              comment.description" class="form-control" id="formGroupExampleInput" placeholder="Description">
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                  <button type="button" @click="newComment" class="btn btn-primary" data-dismiss="modal">Create Comment</button>
                </div>
              </div>
            </div>
          </div>


<!-- VIEW COMMENT -->
<!-- <div>
      <div class="card" v-for="comment in comments" style="width: 20rem;">
        <div class="card-body">
          <h5>{{comment.body}}</h5>
          <h6 class="card-subtitle mb-2 text-muted"></h6>
          <p>{{comment.description}}</p>
          <router-link :to="'/Comments/'+comment._id">View Comment</router-link>
        </div>
      </div>
    </div> -->


<!-- DELETE COMMENT -->
<a href="#" class="card-link" @click="removeComment(comment)">Delete Comment</a>

                </div>
                </div>
</nav>
    </div>
</template>
