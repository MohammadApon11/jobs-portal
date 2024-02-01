import axios from "axios";

export const saveUser = (user) => {
  console.log("from user hook", user);
  const currentUser = {
    email: user?.email,
    name: user?.displayName,
    image: user?.photoURL,
    role: user.role,
    companyName: user.companyName,
    companyLocation: user.companyAddress,
    contactPersonName: user.contactPersonName,
    contactPersonEmail: user.contactPersonEmail,
  };

  axios
    .put(`https://jobs-gonjo-server.vercel.app/users/${user?.email}`, currentUser, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
