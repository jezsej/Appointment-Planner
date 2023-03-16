import React, { useEffect, useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !email) {
      alert("All feilds required");
    }

   

    if(duplicate){
      alert("Name Exists!")
      return
    }

     addContact({ name, phone, email })
     setName("")
     setEmail("")
     setPhone("")
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(() => {   
    contacts.filter((contact) => contact.name === name).length > 0
      ? setDuplicate(true)
      : setName(name);
  },[name]);



  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts}/>
      </section>
    </div>
  );
};
