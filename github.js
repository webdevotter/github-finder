class GitHub {
  constructor() {
    this.client_id = '04f806582c0dbba0ed18';
    this.client_secret = 'bce83e816c78d856b7380a8edbaddf2e7deec77f';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}