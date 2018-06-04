<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="#">Home
                        <span class="sr-only">(current)</span>
                    </a>
                    <button type="button" class='btn btn-link' data-toggle="modal" data-target="#createListModal">Create List</button>
                    <div class="modal fade" id="createListModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Create New List</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form v-on:submit.prevent="newList">
                                        <div class="form-group">
                                            <input type="text" name="listTitle" v-model="
                                          list.title" class="form-control" id="formGroupExampleInput" placeholder="Title"
                                                required>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" name="listDescription" v-model="
                                              list.description" class="form-control" id="formGroupExampleInput" placeholder="Description">
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                    <button type="button" @click="newList" class="btn btn-primary" data-dismiss="modal">Create List</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        
            <span class="board-body">
                <h1>{{board.title}}</h1>
                <p>{{board.description}}</p>
            </span>
        
        <div>
            <div class="card" v-for="list in lists" style="width: 30rem;">
                <div class="card-body">
                    <h5>{{list.title}}</h5>
                    <h6 class="card-subtitle mb-2 text-muted"></h6>
                    <!-- <router-link :to="'/Lists/'+list._id">View List</router-link> -->
                    <a href="#" class="card-link" @click="removeList(list)">Delete List</a>
                    <!-- <a href="#" class="card-link" @click="newTask(task)">Create Task</a> -->

<!-- TASK STUFF -->
<button type="button" class='btn btn-link' data-toggle="modal" data-target="#createTaskModal">Create Task</button>
                    <div class="modal fade" id="createTaskModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Create New Task</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
<div class="modal-body">
                                    <form v-on:submit.prevent="newTask">
                                        <div class="form-group">
                                            <input type="text" name="taskTitle" v-model="
                                          task.body" class="form-control" id="formGroupExampleInput" placeholder="Task"
                                                required>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" name="taskDescription" v-model="
                                              task.description" class="form-control" id="formGroupExampleInput" placeholder="Description">
                                        </div>
                                    </form>
                                </div>
<div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                    <button type="button" @click="newTask" class="btn btn-primary" data-dismiss="modal">Create Task</button>
                                </div>
                            </div>
                        </div>
                    </div>

<!-- TASK BODY -->
<div>
            <div class="card" v-for="task in tasks" style="width: 30rem;">
                <div class="card-body">
                    <h5>{{task.body}}</h5>
                    <h6 class="card-subtitle mb-2 text-muted"></h6>
                    <router-link :to="'/Tasks/'+task._id">View Task</router-link>
                    <a href="#" class="card-link" @click="removeTask(task)">Delete Task</a>
                </div>
            </div>
        </div>



                </div>
            </div>
        </div>

    </div>
</template>

<script>
import router from "../router";
//import home from "../Home";
import list from "./List";

export default {
  name: "Board",
  components: {
    list
  },
  mounted() {
    this.$store.dispatch("getLists");
    // this.$store.dispatch("getTasks");
  },

  data() {
    return {
      list: {
        title: ""
      },
      task: {
        body: ""
      }
    };
  },
  computed: {
    board() {
      return this.$store.state.activeBoard;
    },
    lists() {
      return this.$store.state.lists;
    },
        tasks() {
      return this.$store.state.tasks;
    },
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    getList() {
      this.$store.dispatch("getLists");
    },
    newList() {
      this.$store.dispatch("addList", this.list);
    },
    removeList(list) {
      this.$store.dispatch("removeList", list);
    },
    viewList() {
      this.$store.distpatch("viewList");
    },
        getTask() {
      this.$store.dispatch("getTasks");
    },
    newTask() {
      this.$store.dispatch("addTask", this.task);
    },
    removeTask(task) {
      this.$store.dispatch("removeTask", task);
    },
    viewTask() {
      this.$store.distpatch("viewTask");
    }
  }
};
</script>