<template>
    <div class="card1" style="width: 30rem">
        <div class="card-body ">
            <button type="button" class='btn btn-link' data-toggle="modal" :data-target="'#createCommentModal'+task._id">Create Comment</button>
            <div class="modal fade" :id="'createCommentModal'+task._id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Create New Comment</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form v-on:submit.prevent="newComment">
                                <div class="form-group">
                                    <input type="text" name="commentBody" v-model="
                                              comment.body" class="form-control" id="formGroupExampleInput" placeholder="Comment"
                                        required>
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
            <div>
                <div class="card card2" v-for="comment in comments" style="width: 25rem;">
                    <div class="card-body">
                        <h5>{{comment.body}}</h5>
                        <h6 class="card-subtitle mb-2 text-muted"></h6>
                        <a href="#" class="card-link" @click="removeComment(comment)">Delete Comment</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import router from "../router";

    export default {
        name: "Comments",
        props: ["taskId"],
        components: {

        },
        mounted() {
            this.$store.dispatch("getComments", this.taskId);
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
            comments() {
                return this.$store.state.comments[this.taskId];
            },
            user() {
                return this.$store.state.user;
            }
        },
        methods: {
            removeTask(task) {
                this.$store.dispatch("removeTask", task);
            },
            newComment() {
                this.comment.taskId = this.taskId
                this.comment.userId = this.user._id
                this.$store.dispatch("addComment", this.comment);
            },
            removeComment(comment) {
                this.$store.dispatch("removeComment", comment);
            },
            // viewTask() {
            //     this.$store.dispatch("viewTask");
            // },
            // viewComment() {
            //     this.$store.dispatch("viewComment");
            // }


        }
    }





</script>