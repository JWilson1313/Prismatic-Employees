const { express, prisma } = require("../common");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Welcome to the Prismatic Employees API");
});

router.get("/employees", async (req, res) => {
  try {
    const result = await prisma.user.findMany();
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(200).json("nothing found");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/employees/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await prisma.user.findFirst({
      where: {
        id,
      },
    });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(200).json("User not found");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put("/employees/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { name } = req.body;
    const result = await prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(200).json("User not found");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/addEmployee", async (req, res) => {
  try {
    const { email, name } = req.body;
    const response = await prisma.user.create({
      data: {
        email,
        name,
      },
    });
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(200).json("User not added");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

$(".delete-todo").on("click", function (e) {
  e.preventDefault();
  var id = $(this).parent().data("id");
  $.ajax({
    url: "/products/" + id,
    type: "DELETE",
    success: function (data) {
      // your success response data here in data variable
      console.log("result ", data);
    },
  });
});
apiRouter.delete("/users/:user_id", function (req, res) {
  User.Remove({ id: req.params.user_id }, function (err) {
    if (!err) {
      return res.send("User deleted!");
    } else {
      return res.send("Error deleting user!");
    }
  });
});
module.exports = router;
