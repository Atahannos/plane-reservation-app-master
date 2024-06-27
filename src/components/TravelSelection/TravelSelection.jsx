import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Select, DatePicker, Button } from 'antd';
import 'antd/dist/reset.css';
import "./TravelSelection.css";
import dayjs from 'dayjs';

const { Option } = Select;

const TravelSelection = () => {
  let navigate = useNavigate();

  const [travelData, setTravelData] = useState({
    from: "İstanbul",
    to: "Roma",
    date: dayjs().format('YYYY-MM-DD'),
  });

  const cities = [
    { value: "İstanbul", name: "İstanbul (İstanbul Havalimanı)" },
    { value: "New York", name: "New York Havalimanı" },
    { value: "Roma", name: "Roma (Fiumicino Havalimanı)" },
    { value: "Katar", name: "Katar (Hamad Havalimanı)" },
    { value: "Moskova", name: "Moskova (Zhukovsky Havalimanı)" },
  ];

  const onChangeHandler = (name, value) => {
    setTravelData((values) => {
      return { ...values, [name]: value };
    });
  };

  const onClick = () => {
    console.log("data", travelData);
    navigate(
      "/ticket/" + travelData.from + "/" + travelData.to + "/" + travelData.date
    );
  };

  return (
    <div className="travel-div">
      <Select
        
        value={travelData.from}
        onChange={(value) => onChangeHandler("from", value)}
      >
        {cities
          .filter((x) => x.value !== travelData.to)
          .map((x, index) => (
            <Option value={x.value} key={index}>
              {x.name}
            </Option>
          ))}
      </Select>

      <Select
        
        value={travelData.to}
        onChange={(value) => onChangeHandler("to", value)}
      >
        {cities
          .filter((x) => x.value !== travelData.from)
          .map((x, index) => (
            <Option value={x.value} key={index}>
              {x.name}
            </Option>
          ))}
      </Select>

      <DatePicker
        className="travel-select"
        value={dayjs(travelData.date)}
        onChange={(date, dateString) => onChangeHandler("date", dateString)}
      />
      <Button  onClick={onClick}>
        Ara
      </Button>
    </div>
  );
};

export default TravelSelection;
