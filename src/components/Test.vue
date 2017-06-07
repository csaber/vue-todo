<template>
  <div class="todo">
  <input type="text" v-model="newData" v-on:keyup.enter="enTer" />
    <ul>
      <li v-for="(itme, i) in msgs" :class="{ 'click':itme.comN }" @click="plus(itme)" >{{itme.pathDum}} ----- <span v-on:click="remove(i)">X</span></li>
    </ul>
    <button v-on:click="removeall">删除选中</button>
  </div>
</template>

<script>
let STORAGE_KEY = 'todos-vuejs'

export default {
  name: 'Test',
  data () {
    return {
      msgs: this.getData(),
      newData: ''
    }
  },
  methods: {
    plus (itme) {
      itme.comN = !itme.comN
    },
    enTer () {
      this.msgs.push({pathDum: this.newData, comN: false})
      this.newData = ''
      this.saveData = this.msgs
    },
    getData () {
      return JSON.parse(window.localStorage.getItem(STORAGE_KEY || '[]'))
    },
    remove (i) {
      this.msgs.splice(i, 1)
    },
    removeall () {
      let bmp = []
      this.msgs.forEach((e, i) => {
        if (!e.comN) {
          bmp.push(e)
        }
      })
      this.msgs = bmp
    }
  },
  mounted () {
    this.$nextTick(function () {
      //
    })
  },
  watch: {
    msgs: {
      handler: function (msgs) { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(msgs)) },
      deep: true
    }
  }
}
</script>
<style>
  .todo{ text-align: center; }
  ul{ width:120px; margin:0 auto; padding:0 }
  ul li{ list-style: none; border: 1px solid #CCC; margin:2px 0}
  ul li.click{ background: #ccc;}
</style>
