<template>
  <div class="hello">
    <form @submit.prevent="sendFile" enctype="multipart/form-data">
      <input type="file" ref="file" @change="selectFile" />
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",

  data() {
    return {
      file: "",
    };
  },
  methods: {
    selectFile() {
      console.log(this.file);
      this.file = this.$refs.file.files[0];
    },
    async sendFile() {
      console.log("Send");
      const formData = new FormData();
      formData.append("file", this.file);
      try {
        // const response = await axios.get("http://localhost:5000/test");
        const response = await axios.post(
          "http://localhost:5000/upload",
          formData
        );
        console.log(response);
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
