class UI {
  constructor() {
    this.followers = document.getElementById("followers");
    this.following = document.getElementById("following");
    this.repo_count = document.getElementById("repo_count");
  }

  // Display followers
  showFollowers(user) {
    this.followers.innerHTML = `
		<span>${user.followers}</span>
	  `;
  }

  // Display following
  showFollowing(user) {
    this.following.innerHTML = `
		<span>${user.following}</span>
	  `;
  }

  // Display repo count
  showRepoCount(user) {
    this.repo_count.innerHTML = `
		<span>${user.public_repos}</span>
	  `;
  }

  // Display work
  displayWork(repos) {
    let output = "";

    repos.forEach(repo => {
      let imgSrc;
      let lang;
      let siteUrl;

      if (repo.language === null) {
        lang = "html";
      } else {
        lang = repo.language;
      }

      if (repo.name === "bioSite") {
        siteUrl = "https://nliebhartbellevue.github.io/bioSite/";
      } else {
        siteUrl = repo.html_url;
      }

      switch (repo.name) {
        case "portfolio-comments":
          imgSrc = "assets/img/items/comments.png";
          break;
        case "nliebhartbellevue.github.io":
          imgSrc = "assets/img/items/nliebhartbellevue.png";
          break;
        case "group-black-beard":
          imgSrc = "assets/img/items/black-beard.png";
          break;
        case "web-340":
          imgSrc = "assets/img/items/node-js.png";
          break;
        case "web-330":
          imgSrc = "assets/img/items/javascript2.png";
          break;
        case "web-231":
          imgSrc = "assets/img/items/javascript1.png";
          break;
        case "bioSite-prototypes":
          imgSrc = "assets/img/items/color-palette.jpg";
          break;
        case "personal-portfolio-prototypes":
          imgSrc = "assets/img/items/portfolio-prototypes.PNG";
          break;
        case "web-200":
          imgSrc = "assets/img/items/web-200.JPEG";
          break;
        case "bioSite":
          imgSrc = "assets/img/items/bioSite.png";
          break;
        default:
          imgSrc = "assets/img/items/code.jpg";
      }

      output += `
				  <div class="item col-md-4">
					  <div class="item-image">
						  <img src=${imgSrc}>
						  
					  </div>
					  <div class="item-text">
						  <div class="item-text-wrap">
							  <p class="item-text-category">${lang}</p>
							  <h2 class="item-text-title"><a target="_blank" href="${siteUrl}">${repo.name}</a></h2>
							  
						  </div>
					  </div>
					  
				  </div>
		`;
    });

    // Output repos
    document.getElementById("repos").innerHTML = output;
  }
}
