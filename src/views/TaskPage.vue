<template>
  <div class="task">
    <form @submit.prevent="addTask">
      <div class="form-group row">
        <div class="col-sm-9 pr-0">
          <input type="text" name="nama" id="nama" class="form-control" placeholder="Nama Tugas" v-model="nama">
        </div>
        <div class="col-sm-3">
          <button type="submit" class="btn btn-primary btn-block pl-1">Tambah</button>
        </div>
      </div>
    </form>

    <ul class="list-group">
      <template v-if="tasks.length > 0">
        <li class="list-group-item" v-for="(task, index) in tasks" :key="index">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" :id="index" @click="setCompletedTask(index)">
            <label :class="[{'is-done': task.status}, 'form-check-label']" :for="index">{{task.nama}}</label>
            <a href="#" class="float-right" @click.prevent="deleteTask(index)">Hapus</a>
          </div>
        </li>
      </template>
      <li class="list-group-item text-center" v-else>Belum ada tugas</li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      nama: '',
      tasks: [
        {nama: 'Membuat mockup Dailytask', status: false},
        {nama: 'Slicing HTML & Styling CSS Dailytask', status: false},
        {nama: 'Integrasi dengan vuejs', status: false},
        {nama: 'Testing Dailytask app', status: false},
      ]
    }
  },
  methods: {
    addTask: function () {
      this.tasks.push({
        nama: this.nama,
        status: false
      })

      this.nama = ''
    },
    deleteTask: function (index) {
      this.tasks.splice(index, 1)
    },
    setCompletedTask: function (index) {
      this.tasks[index].status = !this.tasks[index].status
    }
  }
}
</script>

<style>
.is-done {
  text-decoration: line-through
}
</style>