const models = require("./models");

models.User.create({
  name: "Edwin",
  email: "edwin.marshall@theironyard.com",
  bio: "Lead instructor at The Iron Yard.",
  createdAt: Date.now(),
  updatedAt: Date.now()
}).then(function(user) {
  return models.Todo.create({
    title: "Learn about associations",
    done: false,
    userId: user.get("id")
  })
}).then(function(todo) {
  console.log(todo.get("title"));
});
