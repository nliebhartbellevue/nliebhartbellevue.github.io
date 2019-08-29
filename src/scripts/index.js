import "../styles/index.scss";
import "./typewriter";
import "./navbar";
import "./github";
import "./ui";
import apiCall from "./github";
import uI from "./ui";

class Index {
  constructor() {
    this.$user = "nliebhartbellevue";
  }

  getUser() {
    debugger;
    console.log("start api call");
    apiCall(
      `/${this.user}?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}`
    )
      .then(response => {
        if (response.profile.message === "Not Found") {
          console.log("Profile Not Found!");
        } else {
          uI.showProfile(response.profile);
        }
      })
      .catch(() => {
        console.log("An Error Ocurred!");
      });
  }
}

window.addEventListener("load", () => {
  new Index();
});
