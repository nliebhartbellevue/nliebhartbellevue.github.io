// Init Github request
const github = new Github();
const user = "nliebhartbellevue";

const showProfile = user => {
  const $profile = document.querySelector("#profile");
  $profile.innerHTML = `
    <div>
      <img src="${user.avatar_url}">
    </div>
  `;
};

window.addEventListener("load", () => {
  github.getUser(user).then(data => {
    if (data.profile.message === "Not Found") {
      console.log("Profile Not Found!");
    } else {
      showProfile(data.profile);
    }
  });
});
