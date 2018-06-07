<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="#">Home
                        <span class="sr-only">(current)</span>
                    </a>

                    <!-- CREATE LIST -->
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
        <div>
            <div class="headline">
                <h1>{{board.title}}</h1>
                <p>{{board.description}}</p>
            </div>
        </div>
        <div>
            <list :list="list" v-for="list in lists" :key="list.id"></list>
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
            this.$store.dispatch("getLists", this.$route.params.boardId);
        },

        data() {
            return {
                list: {
                    title: ""
                },
                task: {
                    body: ""
                },
                comment: {
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
            newList() {
                this.list.boardId = this.$route.params.boardId
                this.list.userId = this.user._id
                this.$store.dispatch("addList", this.list);
            },
        }
    };
</script>

<style>
    .card1 {
        background-color: lightgrey;
        border-style: solid;
        border-color: black;
    }
</style>