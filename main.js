const express = require("express");

const friendsRouter = require("./routes/friends.routes");
const messagesRouter = require("./routes/messages.routes");


const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => console.log(`I'm listening on port: ${PORT}`))