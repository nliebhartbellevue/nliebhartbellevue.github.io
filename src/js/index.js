import apiCall from "./services/api/apiCall";
const client_id = process.env.GITHUB_CLIENT_ID;
const client_secret = process.env.GITHUB_CLIENT_SECRET;
const route = "/nliebhartbellevue";

class Index {
  constructor() {
    this.$profile = document.querySelector("#profile");
  }

  getProfile() {
    apiCall(route, client_id, client_secret)
      .then(response => {
        if (response.profile.message === "Not Found") {
          console.log("Profile Not Found");
        } else {
          showProfile(response.profile);
        }
      })
      .catch(() => {
        console.log("Error!");
      });
  }

  showProfile(user) {
    this.$profile.innerHTML = `
        <div>
            <img src="${user.avatar_url}">
        </div>
      `;
  }
}

window.addEventListener("load", () => {
  new Index();
});
