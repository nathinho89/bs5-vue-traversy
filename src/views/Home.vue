<template>
  <div class="home">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-md navbar-dark bg-dark py-3 fixed-top">
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

    <!-- Learning Options -->
    <section class="p-5">
      <div class="container">
        <h2 class="visually-hidden">Learning Options</h2>
        <div class="row justify-content-md-between text-center g-4">
          <div class="col-md">
            <div class="card bg-dark text-light">
              <div class="card-body">
                <div class="h1">
                  <i class="bi bi-laptop"></i>
                </div>
                <h3 class="card-title my-3">Virtual</h3>
                <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, quia? Culpa cumque eos sit quasi.</p>
                <a href="#" class="btn btn-primary mt-3">Read more</a>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card bg-secondary text-light">
              <div class="card-body">
                <div class="h1">
                  <i class="bi bi-person-square"></i>
                </div>
                <h3 class="card-title my-3">Hybrid</h3>
                <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, quia? Culpa cumque eos sit quasi.</p>
                <a href="#" class="btn btn-dark mt-3">Read more</a>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card bg-dark text-light">
              <div class="card-body">
                <div class="h1">
                  <i class="bi bi-people"></i>
                </div>
                <h3 class="card-title my-3">In Person</h3>
                <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, quia? Culpa cumque eos sit quasi.</p>
                <a href="#" class="btn btn-primary mt-3">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Content Slides -->
    <section class="p-5 bg-light" id="learn">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md">
            <img src="http://placehold.it/500x500" alt="Placeholder" class="img-fluid d-none d-md-block">
          </div>
          <div class="col-md p-5-md">
            <h2>Learn The Fundamentals</h2>
            <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium qui consequuntur fuga obcaecati beatae quo.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus adipisci rem beatae, eum quo ut a recusandae suscipit, mollitia et reprehenderit corrupti dolor quidem debitis numquam laboriosam laborum odit quasi.</p>

            <a href="#" class="btn btn-outline-primary mt-3">
              Read more <i class="bi bi-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    
    <section class="p-5 bg-dark text-light" id="learn">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md order-1 d-none d-md-block">
            <img src="http://placehold.it/500x500" alt="Placeholder" class="img-fluid">
          </div>
          <div class="col-md p-5-md order-0">
            <h2>Learn The Fundamentals</h2>
            <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium qui consequuntur fuga obcaecati beatae quo.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus adipisci rem beatae, eum quo ut a recusandae suscipit, mollitia et reprehenderit corrupti dolor quidem debitis numquam laboriosam laborum odit quasi.</p>

            <a href="#" class="btn border border-white text-white mt-3">
              Read more <i class="bi bi-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="p-5" id="questions" aria-label="Frequently Asked Questions">
      <div class="container">
        <h2 class="mb-4 text-center">Frequently Asked Questions</h2>
        <div class="accordion accordion-flush" id="accordion-questions">
          <div class="accordion-item">
            <h3 class="accordion-header" id="question-headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question-collapseOne" aria-expanded="false" aria-controls="question-collapseOne">
                Question Title #1
              </button>
            </h3>
            <div id="question-collapseOne" class="accordion-collapse collapse" aria-labelledby="question-headingOne" data-bs-parent="#accordion-questions">
              <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h3 class="accordion-header" id="question-headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question-collapseTwo" aria-expanded="false" aria-controls="question-collapseTwo">
                Question Title #2
              </button>
            </h3>
            <div id="question-collapseTwo" class="accordion-collapse collapse" aria-labelledby="question-headingTwo" data-bs-parent="#accordion-questions">
              <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h3 class="accordion-header" id="question-headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question-collapseThree" aria-expanded="false" aria-controls="question-collapseThree">
                Question Title #3
              </button>
            </h3>
            <div id="question-collapseThree" class="accordion-collapse collapse" aria-labelledby="question-headingThree" data-bs-parent="#accordion-questions">
              <div class="accordion-body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ad ab doloremque asperiores rerum iusto ipsa consectetur dignissimos perferendis et distinctio autem neque, cupiditate adipisci dolorum? Iure perspiciatis modi amet.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="p-5 bg-primary" id="instructors">
      <div class="container">
          <h2 class="text-center text-white">Our Instructors</h2>
          <p class="lead text-center text-white mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consequuntur.</p>
          
        <div class="row g-4">
          <div class="col-md-6 col-lg-3">
            <div class="card bg-light">
              <div class="card-body text-center">
                <img src="http://randomuser.me/api/portraits/men/11.jpg" alt="Random" class="rounded-circle">
                <h3 class="h4 card-title my-3">User Name</h3>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet dignissimos molestiae consectetur quod consequuntur.</p>
               
                <a href="">
                    <i class="bi-twitter text-dark mx-2"></i>
                </a>
                <a href="">
                    <i class="bi-linkedin text-dark mx-2"></i>
                </a>
                <a href="">
                    <i class="bi-instagram text-dark mx-2"></i>
                </a>                
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="card bg-light">
              <div class="card-body text-center">
                <img src="http://randomuser.me/api/portraits/women/11.jpg" alt="Random" class="rounded-circle">
                <h3 class="h4 card-title my-3">User Name</h3>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet dignissimos molestiae consectetur quod consequuntur.</p>
               
                <a href="">
                    <i class="bi-twitter text-dark mx-2"></i>
                </a>
                <a href="">
                    <i class="bi-linkedin text-dark mx-2"></i>
                </a>
                <a href="">
                    <i class="bi-instagram text-dark mx-2"></i>
                </a>                
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="card bg-light">
              <div class="card-body text-center">
                <img src="http://randomuser.me/api/portraits/men/12.jpg" alt="Random" class="rounded-circle">
                <h3 class="h4 card-title my-3">User Name</h3>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet dignissimos molestiae consectetur quod consequuntur.</p>
               
                <a href="">
                    <i class="bi-twitter text-dark mx-2"></i>
                </a>
                <a href="">
                    <i class="bi-linkedin text-dark mx-2"></i>
                </a>
                <a href="">
                    <i class="bi-instagram text-dark mx-2"></i>
                </a>                
              </div>
            </div>
          </div>
          
          <div class="col-md-6 col-lg-3">
            <div class="card bg-light">
              <div class="card-body text-center">
                <img src="http://randomuser.me/api/portraits/women/12.jpg" alt="Random" class="rounded-circle">
                <h3 class="h4 card-title my-3">User Name</h3>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet dignissimos molestiae consectetur quod consequuntur.</p>
               
                <a href="">
                    <i class="bi-twitter text-dark mx-2"></i>
                </a>
                <a href="">
                    <i class="bi-linkedin text-dark mx-2"></i>
                </a>
                <a href="">
                    <i class="bi-instagram text-dark mx-2"></i>
                </a>                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Map -->
    <section class="p-5">
      <div class="container">
        <div class="row g-4 align-items-md-center">
          <div class="col-md">
            <h2 class="mb-4">Contact Info</h2>
            <ul class="list-group">
              <li class="list-group-item"><strong>E:</strong> email@emailaddress.com</li>
              <li class="list-group-item"><strong>T:</strong> email@emailaddress.com</li>
              <li class="list-group-item">
                <strong>Company name</strong>
                <br>Line One,<br>Line Two<br>Postcode
              </li>
            </ul>
          </div>
          <div class="col-md">
            <img src="http://placehold.it/500x300&text=Map" alt="Map" class="w-100">
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="p-5 bg-dark text-white text-center position-relative">
      <div class="container">
        <p class="lead">Copyright &copy; 2021 Frontend Bootcamp</p>
        <a href="#" class="position-absolute bottom-0 end-0 p-5">
          <i class="bi-arrow-up-circle h1"></i>
        </a>
      </div>
    </footer>
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
