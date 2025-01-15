const { express, prisma } = require("../common");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("I am in user.js");
});

router.get("/getAll", async (req, res) => {
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

router.get("/:id", async (req, res) => {
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

router.put("/:id", async (req, res) => {
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

router.post("/addUser", async (req, res) => {
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
module.exports = router;
