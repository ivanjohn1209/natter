export {
  //user related query
  CreateNewUser,
};
const natter_api = "http://natter.heliohost.org/app/";

function CreateNewUser(
  user_firstname,
  user_lastname,
  user_password,
  user_gender,
  user_mobile_number,
  user_birthday
) {
  var formdata = new FormData();
  formdata.append("user_firstname", user_firstname);
  formdata.append("user_lastname", user_lastname);
  formdata.append("user_password", user_password);
  formdata.append("user_gender", user_gender);
  formdata.append("user_mobile_number", user_mobile_number);
  formdata.append("user_birthday", user_birthday);
  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };
  return fetch(natter_api + "users/createUsers", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      throw error;
    });
}
