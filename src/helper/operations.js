import travel from "../store/travel";

export const purchaseOperation = (state, action) => {
  const existingTravels = state.travels;
  let selectedTravel = action.payload.selectedTravel;
  let purchasedSeats = action.payload.seats;

  const newSeatDatas = purchasedSeats.map((seat) => {
    let tmp = { ...seat };
    tmp.selected = 0;
    tmp.reserved = 1;
    return tmp;
  });

  //console.log("newSeatDatas: ", newSeatDatas);

  let oldSeats = [...selectedTravel.seats];

  let updatedArray = oldSeats.map((item) => {
    let item2 = newSeatDatas.find((i2) => i2.number === item.number);
    return item2 ? { ...item, ...item2 } : item;
  });

  let newTravel = { ...selectedTravel };
  newTravel.seats = [...updatedArray];

  const newTravels = updateTravelsArray(existingTravels, newTravel);

  state.travels = [...newTravels];
};

export const updatePassengerDataOperation = (state, action) => {
  let existingSeatData = [...state.selectedSeatData];
  const name = action.payload.name;
  const value = action.payload.value;
  const number = action.payload.number;

  existingSeatData.forEach((seat) => {
    if (seat.number === number) {
      seat.passenger[name] = value;
    }
  });
  return [...existingSeatData];
};

export const selectDeselectOperation = (state, action) => {
  console.log("secildi");
  const existingTravels = state.travels;
  let selectedTravel = { ...action.payload.selectedTravel };
  let clickedSeat = { ...action.payload.clickedSeat };
  if (clickedSeat.reserved == 0) {
    const existingSeat = getExistingSeat(
      existingTravels,
      selectedTravel.id,
      clickedSeat.number
    );
    if (existingSeat.selected === 1) {
      clickedSeat.selected = 0;
      removeSeatFromSelected(state, clickedSeat);
    } else {
      clickedSeat.selected = 1;
      addSeatToSelected(state, clickedSeat);
    }
    selectedTravel.seats = updateSeats(selectedTravel, clickedSeat);
    state.travels = updateTravelsArray(existingTravels, selectedTravel);
  } else {
    alert("Bu koltuk zaten secilmis!");
  }
};

const getExistingSeat = (arr, travelId, seatNumber) => {
  console.log("existing seat:", arr, travelId, seatNumber);
  return arr
    .find((x) => x.id === travelId)
    .seats.find((x) => x.number === seatNumber);
};

const removeSeatFromSelected = (state, clickedSeat) => {
  let tmpSeats = [...state.selectedSeatData];
  tmpSeats = tmpSeats.filter((x) => x.number !== clickedSeat.number);
  state.selectedSeatData = [...tmpSeats];
};

const addSeatToSelected = (state, clickedSeat) => {
  let tmpSeats = [...state.selectedSeatData];
  tmpSeats.push(clickedSeat);
  state.selectedSeatData = [...tmpSeats];
};

const updateSeats = (arr, clickedSeat) => {
  return arr.seats.map((x) => {
    if (x.number === clickedSeat.number) {
      let tmp = { ...x };
      tmp.selected = clickedSeat.selected;
      return tmp;
    }
    return x;
  });
};

const updateTravelsArray = (arr, newTravel) => {
  return arr.map((travel) => {
    if (travel.id === newTravel.id) {
      return newTravel;
    }
    return travel;
  });
};