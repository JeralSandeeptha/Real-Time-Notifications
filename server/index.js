const { Server } = require("socket.io");

const io = new Server({
    cors: {
        origin: "http://localhost:3000"
    }
});

let onlineUsers = [];

const addNewusers = (username, socketId) => {
    onlineUsers.some(user => user.uesrname === username) && onlineUsers.push({ username, socketId})
}

const removeUsers = (socketId) => {
    onlineUsers = onlineUsers.filter(user => user.socketId !== socketId);
}

const getUser = (username) => {
    return onlineUsers.find(user => user.user === username);
}

io.on("connection", (socket) => {
    console.log("Someone is connected");

    socket.on("newUser", (username) => {
        addNewusers(username, socket.id);
    })

    socket.on("disconnect", () => {
        removeUsers(socket.id);
    })

    socket.on("sendNotification", (senderName, recieverName, type) => {
        const receiver = getUser(recieverName);
        io.to(receiver.socketId).emit("getNotification", {
            senderName, type
        });
    })
});

io.listen(5000, () => {
    console.log("Server is running at port 4000");
});