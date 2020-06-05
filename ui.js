class UI {
  constructor() {
    // UI vars
    this.UIprofile = document.querySelector('#profile');
    this.UIcontainer = document.querySelector('.searchContainer');
    this.UIsearch = document.querySelector('.search');
  }

  // Show profile
  showProfile(profile) {
    this.UIprofile.innerHTML = `
      <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img src="${profile.avatar_url}" alt="avatar" class="img-fluid mb-2">
          <a href="${profile.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary">Public Repos: ${profile.public_repos}</span>
          <span class="badge badge-secondary">Public Gists: ${profile.public_gists}</span>
          <span class="badge badge-success">Followers: ${profile.followers}</span>
          <span class="badge badge-info">Following: ${profile.following}</span>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item">Company: ${profile.company}</li>
            <li class="list-group-item">Website: ${profile.blog}</li>
            <li class="list-group-item">Location: ${profile.location}</li>
            <li class="list-group-item">Member Since: ${profile.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    `;
  }

  // Show alert message
  showAlert(msg, className) {
    // Clear any remaining alerts
    this.clearAlert();
    // Create and insert div
    const div = document.createElement('div');
    div.className = className;
    div.textContent = msg;
    this.UIcontainer.insertBefore(div, this.UIsearch);
  }

  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // Clear profile
  clearProfile() {
    this.UIprofile.innerHTML = '';
  }
}
