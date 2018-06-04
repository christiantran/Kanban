<template>
    <div>

<div>
      <div class="card" v-for="comment in comments" style="width: 20rem;">
        <div class="card-body">
          <h5>{{comment.body}}</h5>
          <h6 class="card-subtitle mb-2 text-muted"></h6>
          <p>{{comment.description}}</p>
          <router-link :to="'/Comments/'+comment._id">View Comment</router-link>
          <a href="#" class="card-link" @click="removeComment(comment)">Delete Comment</a>
        </div>
      </div>
    </div>

    </div>
</template>
