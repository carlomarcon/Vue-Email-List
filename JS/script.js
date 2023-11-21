const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      emailArray: [],
    };
  },
  methods: {
    generateEmail: function () {
      let i = 0;
      while (i < 10) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((resp) => {
            //   console.log(resp.data.response);
            //   bho = resp.data.response;
            this.emailArray.push(resp.data.response);
          });
        i++;
      }
    },
  },

  created() {
    this.generateEmail();
  },
}).mount("#app");
