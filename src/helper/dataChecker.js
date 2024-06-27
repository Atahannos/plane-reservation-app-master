export const passengersDataChecker = (passengers) => {
  let err = false;

  console.log(passengers);

  passengers.forEach((x) => {
    if (
      x.passenger.name == "" ||
      x.passenger.surname == "" ||
      x.passenger.gender == "" ||
      x.passenger.gender == "none" ||
      x.passenger.tcNo.length != 11
    ) {
      err = true;
    }
  });

  console.log("passenger error: ", err);
  return err;
};

export const purchaseDataChecker = (
  name,
  surname,
  email,
  cardNumber,
  cvc,
  expireDate
) => {
  if (
    name == "" ||
    surname == "" ||
    email == "" ||
    cvc == "" ||
    cardNumber == "" ||
    expireDate == ""
  ) {
    return true;
  }
  return false;
};

export const newTravelDataChecker = (data) => {
  if (data.price == "" || data.duration == "" || data.plate == "") {
    return true;
  }
  return false;
};
