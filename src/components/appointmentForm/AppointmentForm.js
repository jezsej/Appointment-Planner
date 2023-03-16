import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const onChangeTitle = ({ target }) => {
    setTitle(target.value);
  };

  const onChangeDate = ({ target }) => {
    setDate(target.value);
  };

  const onChangeTime = ({ target }) => {
    setTime(target.value);
  };

  const onChangeContact = ({ target }) => {
    setContact(target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={onChangeTitle}
        placeholder="Title"
        required
      />
      <input
        type="date"
        value={date}
        min={getTodayString()}
        onChange={onChangeDate}
        placeholder="Date"
        required
      />
      <input
        type="time"
        value={time}
        onChange={onChangeTime}
        placeholder="Time"
        required
      />
      <ContactPicker contacts={contacts} onChangeContact={onChangeContact} />
      <button type="submit">Add</button>
    </form>
  );
};
