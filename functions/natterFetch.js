export {
  //user related query
  CreateNewUser,
};
let natter_api = "http://natter.epizy.com/app/";

// function CreateNewUser(e) {
//   var formdata = new FormData();
//   formdata.append("user_firstname", "asdasd");
//   formdata.append("user_lastname", "asdasd");
//   formdata.append("user_birthday", "asdsadsa");
//   formdata.append("user_password", "afs");
//   var requestOptions = {
//     method: "POST",
//     body: formdata,
//     redirect: "follow",
//   };
//   return fetch(
//     "http://natter.epizy.com/app/users/createNewUser",
//     requestOptions
// )
//     .then((response) => response.text())
//     .then((result) => {
//       return result;
//     })
//     .catch((error) => {
//       return error;
//     });
// }
function CreateNewUser() {
  var formdata = new FormData();
  formdata.append("user_firstname", "user_id");
  formdata.append("user_lastname", "name");
  formdata.append("user_birthday", "alue");
  formdata.append("user_password", "description");
  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  return fetch(natter_api + "users/createNewUser", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      throw error;
    });
}
