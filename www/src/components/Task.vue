template>
    <div>
<nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="#">Home
                        <span class="sr-only">(current)</span>
                    </a>
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
                </div>
            </div>
        </nav>