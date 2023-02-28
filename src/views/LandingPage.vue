<template>
  <div class="flex flex-row">
    <section
      class="flex flex-row items-center justify-center w-full px-6 py-8 lg:w-1/2 md:w-1/2"
    >
      <article class="container px-6 mx-auto lg:px-20 md:px-6">
        <div class="text-center lg:text-left md:text-left">
          <p class="mb-1 title">Welcome back</p>
          <p class="mb-2 subtitle">Welcome back! Please enter your details</p>
        </div>
        <form class="py-4">
          <div class="signup-input">
            <label for="Username">Email</label>
            <input type="text" required placeholder="Enter your email" />
          </div>
          <div class="signup-input">
            <label for="Password">Password</label>
            <input
              type="password"
              required
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
            />
          </div>
          <div class="flex flex-row justify-between pb-5">
            <div>
              <input type="checkbox" />
              <label class="inline-block" for="signup-remember"
                >Remember me</label
              >
            </div>
            <div>
              <router-link to="/">Forgot password</router-link>
            </div>
          </div>
          <div class="pb-3">
            <button
              class="w-full px-3 py-2 border-2 border-transparent rounded-md btn-primary"
            >
              Sign in
            </button>
          </div>
          <div class="pb-6">
            <button class="w-full px-3 py-2 border-2 rounded-md btn-google">
              <img
                class="inline-block"
                src="/img/google-logo.png"
                alt="Google Logo"
              />
              Sign in with Google
            </button>
          </div>
          <div class="text-center account-cover">
            Don't have an account? <router-link to="/">Sign up</router-link>
          </div>
        </form>
      </article>
    </section>
    <section
      id="signup-image-cover"
      class="hidden w-1/2 px-6 py-64 lg:block md:block"
    >
      <div class="flex flex-row items-center justify-center">
        <img
          class="rounded"
          src="/img/signup-icon.png"
          alt="signup Image"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
input[type="text"],
input[type="password"] {
  @apply w-full px-3 py-2 mr-3 mt-1 leading-tight border rounded-md appearance-none;
}

input[type="checkbox"] {
  @apply mr-2;
}

.signup-input {
  @apply pb-5;
}
.account-cover {
  color: #969699;
}
img {
  height: 250px;
  width: 250px;
}
#signup-image-cover {
  background-color: var(--gray);
}

.btn-google {
  background-color: var(--white);
  color: var(--black);
}
.btn-google img {
  height: 30px;
  width: 30px;
}
</style>
