export default function uI() {
  const profile = document.getElementById("profile");

  function showProfile(user) {
    this.profile.innerHTML = `
            <div class="container">
                <img src="${user.avatar_url}">
            </div>
        `;
  }
}
