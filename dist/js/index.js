// Init Github request
const github = new Github();
// Init UI
const ui = new UI();
const user = 'nliebhartbellevue';

window.addEventListener('load', () => {
	github.getUser(user).then(data => {
		if (data.profile.message === 'Not Found') {
			console.log('Profile Not Found!');
		} else {
			ui.showFollowers(data.profile);
			ui.showFollowing(data.profile);
			ui.showRepoCount(data.profile);
			ui.displayWork(data.repos);
		}
	});
});
