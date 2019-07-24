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
  dataAsArray: function() {
    return Object.keys(this.data);
  },
  getUserByName: function(name) {
    let user = {};
    for (let i of this.dataAsArray()) {
      if (this.data[i].name === name) user = this.data[i];
    }

    return user;
  },
  getUserByAccount: function(account) {
    let acc = {};
    for (let i of this.dataAsArray()) {
      if (i === account) acc = this.data[i]
    }

    return acc;
  },
  biggestFollower: function() {
    return this.dataAsArray()
      .map(user => [this.data[user].follows.length,this.data[user].name])
      .sort(sorter())
      .reverse()[0][1];
  },
  getFollowers: function(account) {
    let followers = [];

    for (let i of this.dataAsArray()) {
      if (
        this.getUserByAccount(i).follows.includes(account) 
        && !followers.includes(this.getUserByAccount(i))
      ) {
        followers.push(this.getUserByAccount(i).name);
      }
    }

    return followers;
  },
  mostPopular: function() {
    let numberOfFollowersList = [];

    for (let user of this.dataAsArray()) {
      this.data[user].follows.forEach(account => {
        numberOfFollowersList[account]
          ? numberOfFollowersList[account]++
          : numberOfFollowersList[account] = 1
      });
    }

    let mostFollowed = Object.entries(numberOfFollowersList).sort((a,b) => a[1] - b[1]).reverse()[0];
    return this.data[mostFollowed[0]].name;
  },
  printAll: function() {
    // outputs a list of everyone and for each of them, the names of who they follow and who follows them
    this.dataAsArray().forEach(acc => {
      let user = this.data[acc]
      console.log(`${user.name}`)
      console.log(` Follows: ${user.follows}`)
      console.log(` Followed By: ${this.getFollowers(acc).join(', ')}`)
    })
  },
  unrequitedFollowers: function() {
    // returns a list of names for those who follow someone that doesn't follow them back
    let unrequited = [];

    this.dataAsArray().forEach(acc => {
      this.dataAsArray().forEach(innerAcc => {
        if(this.getUserByAccount(acc).follows.includes(innerAcc) 
          && !this.getUserByAccount(innerAcc).follows.includes(acc)
          && !unrequited.includes(this.getUserByAccount(acc).name)) {
            unrequited.push(this.getUserByAccount(acc).name)
          }
      })
    })

    return unrequited;
  }
}




console.log(twits.biggestFollower());
console.log(twits.getUserByName('Debbie').follows);
console.log(twits.mostPopular())
twits.printAll()
console.log(twits.getFollowers('f06'))
console.log(twits.unrequitedFollowers())
// Identify who has the most followers over 30
// Identify who follows the most people over 30
// List everyone and their reach (sum of # of followers and # of followers of followers)