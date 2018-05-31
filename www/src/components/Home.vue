<template>
  <div class="hello">
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="#">Home
            <span class="sr-only">(current)</span>
          </a>
          <button type="button" class='btn btn-link' data-toggle="modal" data-target="#createBoardModal">Create Board</button>
          <!-- Modal -->
          <div class="modal fade" id="createBoardModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Create a New Board</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form v-on:submit.prevent="newBoard">
                    <div class="form-group">
                      <input type="text" name="boardTitle" v-model="
                          board.title" class="form-control" id="formGroupExampleInput" placeholder="Title" required>
                    </div>
                    <div class="form-group">
                      <input type="text" name="boardDescription" v-model="
                              board.description" class="form-control" id="formGroupExampleInput" placeholder="Description">
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                  <button type="button" @click="newBoard" class="btn btn-primary" data-dismiss="modal">Create Board</button>
                </div>
              </div>
            </div>
          </div>
          <button @click="logout" type="button" class='btn btn-link'>Logout</button>
        </div>
      </div>
    </nav>
    <h1>
      <span class="headline">My Boards</span>
    </h1>
    <div>
      <div class="card" v-for="board in boards" style="width: 20rem;">
        <div class="card-body">
          <h5>{{board.title}}</h5>
          <h6 class="card-subtitle mb-2 text-muted"></h6>
          <p>{{board.description}}</p>
          <a href="#" class="card-link">View Board</a>
          <a href="#" class="card-link" @click="removeBoard(board)">Delete Board</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import router from '../router'
  //import boards from '../boards'
  export default {
    name: 'Home',
    mounted() {
      if (!this.$store.state.user._id) {
        router.push({ name: 'login' })
      }
      this.$store.dispatch('getBoards')
    },

    data() {
      return {
        board: {
          title: '',
          description: '',
          creator: ''

        }
      }
    },
    computed: {
      boards() {
        return this.$store.state.boards
      },
      user() {
        return this.$store.state.user
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('logout')
      },
      newBoard() {
        // this.board.parentId = this.user._id
        this.$store.dispatch('addBoard', this.board)
      },
      getBoard() {
        this.$store.dispatch('getBoards')
      },
      removeBoard(board){
        this.$store.dispatch('removeBoard', board)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .headline {
    border-bottom: 1px solid;
    width: 100%;
    color: black
  }
</style>