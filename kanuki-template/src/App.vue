<template>
  <div id="testing">
    <web-template id="extended" :content="content" :user="user" :card="card" :edit="edit"></web-template>
    <div style="width: 30vw;">
      <web-template id="miniature" :content="content" :user="user" :card="card" isMiniature></web-template>
      <div :class="{'edit': !edit, 'save': edit}" @click="edit = !edit">{{ edit ? 'SAVE' : 'EDIT' }}</div>
      <pre id="data">{{content}}</pre>
    </div>

  </div>
</template>

<script>
import content from "../test/content.json"
import user from "../test/user.json"
import card from "../test/card.json"

export default {
  data() {
    return {
      content, user, card,
      edit: false
    }
  },

  components: {
    "web-template": () => import("./web-template")
  }
}</script>

<style>
  body {
    background-color: #FAFAFA;
    font-family: "Nunito", sans-serif;
  }

  #data {
    border-radius: 24px; 
    background-color: white; 
    margin-top: 12px; 
    padding: 12px
  }

  #extended {
    width: 60vw; 
    margin-right: 12px;
    border-radius: 24px;
  }

  #testing {
    display: flex; 
    justify-content: center; 
    width: 100%;
  }

  #miniature {
    height: 250px; 
    overflow-y: hidden; 
    border-radius: 24px;
  }

  .edit {
    display: flex;
    margin-top: 12px;
    margin-bottom: 12px;
    border-radius: 24px;
    color: white;
    cursor: pointer;
    justify-content: center;
    padding: 16px;
    background-color: green;
  }

  .save {
    display: flex;
    margin-top: 12px;
    margin-bottom: 12px;
    border-radius: 24px;
    color: white;
    cursor: pointer;
    justify-content: center;
    padding: 16px;
    background-color: black;
  }
</style>

