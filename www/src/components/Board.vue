<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="#">Home
                        <span class="sr-only">(current)</span>
                    </a>
                    <button type="button" class='btn btn-link' data-toggle="modal" data-target="#createBoardModal">Create List</button>
                </div>
            </div>
        </nav>
        <div>
            <div class="board-body">
                <h1>{{board.title}}</h1>
                <p>{{board.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Board',
        mounted() {
            this.$store.dispatch('viewBoard', this.$route.params.boardId)
        },
        data() {
            return {

            }
        },
        computed: {
            board() {
                return this.$store.state.activeBoard
            },
        },
        methods: {

        }
    }

</script>