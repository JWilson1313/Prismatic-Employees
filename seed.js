const { prisma } = require("./common");
const seed = async () => {
  const userObj = [
    {
      name: "Employee 1",
    },
    {
      name: "Employee 2",
    },
    {
      name: "Employee 3",
    },
    {
      name: "Employee 4",
    },
    {
      name: "Employee 5",
    },
    {
      name: "Employee 6",
    },
    {
      name: "Employee 7",
    },
    {
      name: "Employee 8",
    },
    {
      name: "Employee 9",
    },
    {
      name: "Employee 10",
    },
  ];
  await prisma.user.createMany({
    data: userObj,
  });
};

seed();
