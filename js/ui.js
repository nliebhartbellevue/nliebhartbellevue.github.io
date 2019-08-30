class UI {
	constructor() {
		this.followers = document.getElementById('followers');
		this.following = document.getElementById('following');
		this.repo_count = document.getElementById('repo_count');
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
		let output = '';

		repos.forEach(repo => {
			output += `
				<div class="item">
					<div class="item-image">
						<img src="assets/img/items/code.jpg">
						
					</div>
					<div class="item-text">
						<div class="item-text-wrap">
							<p class="item-text-category">${repo.language}</p>
							<h2 class="item-text-title"><a href="${repo.html_url}">${repo.name}</a></h2>
							
						</div>
					</div>
					
				</div>
      `;
		});

		// Output repos
		document.getElementById('repos').innerHTML = output;
	}
}
