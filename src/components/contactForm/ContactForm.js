import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  const onChangeName = ({ target }) => {
    setName(target.value);
  };

  const onChangPhone = ({ target }) => {
    setPhone(target.value);
  };

  const onChangeEmail = ({ target }) => {
    setEmail(target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={onChangeName}
        placeholder="Name"
        required
      />
      <input
        type="text"
        value={phone}
        onChange={onChangPhone}
        placeholder="Phone"
        required
      />
      <input
        type="text"
        value={email}
        onChange={onChangeEmail}
        placeholder="Email"
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};
