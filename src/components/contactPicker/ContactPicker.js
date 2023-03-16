import React from "react";

export const ContactPicker = ({ onChangeContact, contacts }) => {
  return (
    <select onChange={onChangeContact} required>
      <option selected="selected">Select Contact</option>
      {contacts.map((contact, index) => {
        return (
          <option value={contact.name} key={index}>
            {contact.name}
          </option>
        );
      })}
    </select>
  );
};
