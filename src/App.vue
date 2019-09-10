<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 offset-sm-3">
          <h1 class="title">Dailytask App</h1>
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import '~bootstrap/dist/css/bootstrap.min.css';
body {
  padding: 60px 0;
}

.title {
  font-size: 1.5rem;
}
</style>
