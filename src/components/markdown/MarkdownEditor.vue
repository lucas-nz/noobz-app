<template>
  <mavon-editor
    v-bind="editor"
    v-model="editor.value"
    class="me-editor"
  ></mavon-editor>
</template>
<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  props: {
    editor: Object
  },
  data() {
    return {};
  },
  mounted() {},
  components: {
    mavonEditor
  }
};
</script>
<style>
.me-editor {
  z-index: 6 !important;
}
.v-note-wrapper .v-note-panel.shadow {
  border: none;
  box-shadow: none !important;
}
.v-note-wrapper .v-note-panel .v-note-show .v-show-content,
.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html {
  background: #fff !important;
}
</style>
