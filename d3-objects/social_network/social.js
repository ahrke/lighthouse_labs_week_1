const sorter = function(a,b) {
  return a - b;
}

const twits = {
  data: {
    f01: {
      name: "Alice",
      age: 15,
      follows: ["f02", "f03", "f04"]
    },
    f02: {
      name: "Bob",
      age: 20,
      follows: ["f05", "f06"]
    },
    f03: {
      name: "Charlie",
      age: 35,
      follows: ["f01", "f04", "f06"]
    },
    f04: {
      name: "Debbie",
      age: 40,
      follows: ["f01", "f02", "f03", "f05", "f06"]
    },
    f05: {
      name: "Elizabeth",
      age: 45,
      follows: ["f04"]
    },
    f06: {
      name: "Finn",
      age: 25,
      follows: ["f05"]
    }
  },
  getUserByName: function(name) {
    let user = {};
    for (let i of Object.keys(this.data)) {
      if (this.data[i].name === name) user = this.data[i]
    }

    return user;
  },
  biggestFollower: function() {
    return Object.keys(this.data)
      .map(user => [this.data[user].follows.length,this.data[user].name])
      .sort(sorter())
      .reverse()[0][1];
  }, 
  getNumOfFollowers: function(name) {
    return Object.getOwnPropertyNames(this.data).values(name)
  },
  mostPopular: function() {
    let numberOfFollowersList = [];

    for (let user of Object.keys(this.data)) {
      this.data[user].follows.forEach(account => {
        numberOfFollowersList[account]
          ? numberOfFollowersList[account]++
          : numberOfFollowersList[account] = 1
      });
    }

    let mostFollowed = Object.entries(numberOfFollowersList).sort((a,b) => a[1] - b[1]).reverse()[0];
    return this.data[mostFollowed[0]].name;
  }
}

const printAll = function() {

}

const unrequitedFollowers = function() {

}

console.log(twits.biggestFollower());
console.log(twits.getUserByName('Debbie').follows);
console.log(twits.mostPopular())
console.log(twits.getNumOfFollowers('f02'))
// Identify who has the most followers over 30
// Identify who follows the most people over 30
// List everyone and their reach (sum of # of followers and # of followers of followers)