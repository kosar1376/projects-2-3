export const validation = (data) => {
  const errors = {};

  if (!data.name.trim()) {
    errors.name = "name is reqired !";
  } else {
    delete errors.name;
  }

  if (!data.lastname.trim()) {
    errors.lastname = "Last Name is required !";
  } else {
    delete errors.lastname;
  }

  if (!data.password) {
    errors.password = "Password must be entered !";
  } else if (data.password.length < 6) {
    errors.password = "password must be at least 6 characters";
  } else {
    delete errors.password;
  }

  if (!data.confirmpassword) {
    errors.confirmpassword = "You must confirm your password !";
  } else if (data.confirmpassword !== data.password) {
    errors.confirmpassword = "Error !";
  } else {
    delete errors.confirmpassword;
  }

  if (!data.code) {
    errors.code = "Idcode is required !";
  } else if (data.code.length < 5) {
    errors.code = "Idcode is not completed";
  } else {
    delete errors.code;
  }

  if (!data.email) {
    errors.email = "Email is required !";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email is not valid !";
  } else {
    delete errors.email;
  }

  if (!data.ischecked) {
    errors.ischecked = "Accept the Rules";
  } else {
    delete errors.ischecked;
  }

  return errors;
};
