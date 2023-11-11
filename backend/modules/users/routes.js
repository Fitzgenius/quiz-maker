module.exports = (app) => {

  app.get("/users", (req, res) => {
    res.json({ message: "another route" });
  })

}
