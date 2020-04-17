var app = new Vue({
  el: "#app",
  data: {
    title: "Cool Submissions",
    name: "",
    age: "",
    email: "",
    comments: "",
    nameValid: false,
    ageValid: false,
    mailValid: false,
    comntValid: true,
    submitmsg: "",
    namemsg: "",
    agemsg: "",
    mailmsg: "",
    cmntmsg: ""
  },
  methods: {
    ismailvalid: function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  },
computed: {
    cansubmit: function () {
      if (this.nameValid && this.ageValid && this.mailValid && this.comntValid) {
        return this.submitmsg = "Submission Successful";
      } else {
        return this.submitmsg = "Submission Unsuccessful"
      }
    }
  },
  watch: {
    name: function() {
      if (this.name.length < 2) {
        this.nameValid = false;
        this.namemsg = "At least 2 characters are required";
      } else {
        this.nameValid = true;
        this.namemsg = "Valid Name";
      }
    },
    age: function() {
      if (isNaN(this.age)) {
        this.ageValid = false;
        this.agemsg = "Only Numbers are accepted";
      } else {
        if (this.age <= 18) {
          this.ageValid = false;
          this.agemsg = "Age must be above 18";
        } else {
          this.ageValid = true;
          this.agemsg = "Valid Age";
        }
      }
    },
    email: function() {
      if(this.ismailvalid(this.email)) {
        this.mailmsg = "Valid Email";
      } else {
        this.mailmsg = "Invalid Email";
      }
      this.mailValid = this.ismailvalid(this.email);
    },
    comments: function() {
      if (this.comments.length > 250) {
        this.comntValid = false;
        this.cmntmsg = "You have Exceeded the Maximum Character Count \(250\)";
      } else {
        this.comntValid = true;
        this.cmntmsg = "Number of Characters : " + this.comments.length
      }
    }
  }
});