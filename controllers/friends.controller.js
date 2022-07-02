const friends = require("../models/friends.models");

const getFriend = (req, res) => {
  const { id } = req.params;
  res.send(friends.find(friend => friend.id === Number(id)));
}

const getFriends = (req, res) => {
  res.send(friends);
}

const postFriend = (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({
      message: "Name not found"
    })
  } else if (friends.find((friend) => friend.name === name)) {
    res.status(400).json({
      message: "Friend already exists"
    })
  } else {
    const newFriend = {
      name,
      id: friends.length
    }
  
    friends.push(newFriend);
    res.status(200).json(newFriend);
  }
  
}

module.exports = {
  getFriends,
  getFriend,
  postFriend
}