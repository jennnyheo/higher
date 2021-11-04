import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Jenny",
      email: "Jenny@sample.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: "true",
    },
    {
      name: "Tommy",
      email: "Tommy@sample.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: "false",
    },
    {
      name: "Tommy Lee",
      email: "TommyLee@sample.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: "false",
    },
  ],
};

export default data;
