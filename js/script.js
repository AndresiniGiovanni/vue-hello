const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello world",
      myclass: "mywhite text-center pt-5 my-big-font",
      myImage: "./logo.png",
      myclassImage: "widthImage mt-3",
    };
  },
}).mount("#app");
