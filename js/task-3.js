const profile = {
    username: "Jacob",
    playTime: 300,
    changeUsername(newName) {
        this.username.push(newName);
    },
    updatePlayTime(hours) {
        const newPlayTime = hours + this.playTime;
        profile.playTime.push(newPlayTime);
    },
    getInfo() {
        return `${profile.username} has ${profile.playTime} active hours!`
    }

};


console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"