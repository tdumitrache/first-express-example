const getMessages = (req, res) => {
  res.send("<h1>Hello Theodor</h1>");
}

const postMessages = (req, res) => {
  console.log("Updating messages...");
}

module.exports = {
  getMessages,
  postMessages
}