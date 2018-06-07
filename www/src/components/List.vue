<template>
    <div class="card1" style="width: 30rem">
        <div class="card-body ">
            <h5>{{list.title}}</h5>
            <h6 class="card-subtitle mb-2 text-muted"></h6>
            <!-- <router-link :to="'/Lists/'+list._id">View List</router-link> -->
            <a href="#" class="card-link" @click="removeList(list)">Delete List</a>
            <!-- <a href="#" class="card-link" @click="newTask(task)">Create Task</a> -->

            <!-- TASK STUFF -->
            <button type="button" class='btn btn-link' data-toggle="modal" :data-target="'#createTaskModal'+list._id">Create Task</button>
            <div class="modal fade" :id="'createTaskModal'+list._id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                <div class="card card2" v-for="task in tasks" style="width: 25rem;">
                    <div class="card-body">
                        <h5>{{task.body}}</h5>
                        <h6 class="card-subtitle mb-2 text-muted"></h6>
                        <!-- <router-link :to="'/Tasks/'+task._id">View Task</router-link> -->
                        <!-- <router-link :to="'/Comments/'+comment._id">View Comment</router-link> -->

                        <!-- pull data from comment and display here.  No router link -->
                        <button type="button" class='btn btn-link' data-toggle="modal" :data-target="'#createCommentModal'+task._id">Create Comment</button>
                        <a href="#" class="card-link" @click="removeTask(task)">Delete Task</a>
                    </div>
                </div>
            </div>


        </div>
    </div>

</template>
<script>
    import router from "../router";
    //import home from "../Home";


    export default {
        name: "Board",
        props: ["list"],
        components: {

        },
        mounted() {
            this.$store.dispatch("getTasks", this.list._id);
        },

        data() {
            return {
                task: {
                    body: ""
                },
                comment: {
                    body: ""
                }
            };
        },
        computed: {
            tasks() {
                return this.$store.state.tasks[this.list._id];
            },
            user() {
                return this.$store.state.user;
            }
        },
        methods: {
            removeList(list) {
                this.$store.dispatch("removeList", list);
            },
            newTask() {
                this.task.listId = this.list._id
                this.task.userId = this.user._id
                this.$store.dispatch("addTask", this.task);
            },
            removeTask(task) {
                this.$store.dispatch("removeTask", task);
            },
            // viewTask() {
            //     this.$store.dispatch("viewTask");
            // },
            // viewComment() {
            //     this.$store.dispatch("viewComment");
            // }
        }
    };
</script>