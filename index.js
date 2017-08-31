const models = require("./models");

// userId for Todo is required, which means we need a User first before we can
// make a Todo. In your application, you'll probably do a findById to get the
// user id rather than creating one every time you create a todo.
models.User.create({
  name: "Edwin",
  email: "edwin.marshall@theironyard.com",
  bio: "Lead instructor at The Iron Yard.",
  createdAt: Date.now(),
  updatedAt: Date.now()
}).then(function(user) {
  // We return here instead of immediately using `.then` so that indentation
  // doesn't get out of hand. That is, had we immediately used `.then`, we'd
  // need another level of indentation. Good old stair-stepping effect.
  // promise
  //    .then(function(x) {
  //      x.then(function(y) {
  //        y.then(function(z) {
  //           etc
  //         })
  //      })
  //    });
  //
  // This is better:
  // promise
  //  .then(function(x) {
  //    return x;
  //  }).then(function(y) {
  //    return y;
  //  }).then(function(z) {
  //    etc
  // });
  return models.Todo.create({
    title: "Learn about associations",
    done: false,
    userId: user.get("id")
  });
}).then(function(todo) {
  console.log(todo.get("title"));
});
