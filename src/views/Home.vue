<template>
  <div class="home">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-md navbar-dark bg-dark py-3">
      <div class="container">
          <a href="" class="navbar-brand">
            Bootstrap5 Bootcamp
          </a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
            <i class="navbar-toggler-icon"></i>
          </button>

          <div class="collapse navbar-collapse" id="navmenu">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a href="#learn" class="nav-link">What You'll Learn</a>
              </li>
              <li class="nav-item">
                <a href="#questions" class="nav-link">Questions</a>
              </li>
              <li class="nav-item">
                <a href="#instructors" class="nav-link">Instructors</a>
              </li>
            </ul>
          </div>
        </div>  
    </nav>

    <!-- Hero -->
    <section class="bg-dark text-light p-5 text-center text-md-start">
      <div class="container">
        <div class="d-md-flex justify-content-md-between align-items-md-center">
          <div>
            <h1>Become a <span class="text-warning">Dev</span></h1>
            <p class="lead my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos error corrupti dolorem nam, tempore officiis quisquam voluptatum magni possimus minima quasi odit odio voluptas sequi quae? Porro cupiditate corporis animi.</p>
            <button class="btn btn-primary btn-lg">Start Your Enrollment</button>
          </div>
          <img src="http://placehold.it/500x500" alt="Become a dev image" class="img-fluid w-50 d-none d-md-block ms-5">
        </div>
      </div>
    </section>
    
    <!-- Newsletter -->
    <section class="bg-primary text-light p-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-lg-6">
            <h2 class="mb-4 mb-lg-0">Sign up to our newsletter</h2>
          </div>
          <div class="col-12 col-lg-6">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Your email" aria-label="Your email" aria-describedby="button-addon2">
              <button class="btn btn-dark btn-lg" type="button" id="button-addon2">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </section>

   <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
//import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
//   components: {
//     HelloWorld
//   },
})
export default class Home extends Vue {}
</script>
