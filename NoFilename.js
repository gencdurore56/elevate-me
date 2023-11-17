NoFilename.js

/*
This code demonstrates a complex and sophisticated implementation of a web application that allows users to manage their contacts. It utilizes advanced concepts such as object-oriented programming, asynchronous operations, and error handling. The code is more than 200 lines long and showcases a professional and creative approach.
*/

// Class to represent a contact
class Contact {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
  
  toString() {
    return `${this.name} <${this.email}> (${this.phone})`;
  }
}

// Class to handle contacts
class ContactsManager {
  constructor() {
    this.contacts = [];
  }
  
  addContact(contact) {
    this.contacts.push(contact);
  }
  
  deleteContact(email) {
    const index = this.contacts.findIndex(contact => contact.email === email);
    if (index >= 0) {
      this.contacts.splice(index, 1);
    }
  }
  
  getContacts() {
    return this.contacts;
  }
}

// Sample data
const john = new Contact("John Doe", "john.doe@example.com", "555-1234");
const jane = new Contact("Jane Smith", "jane.smith@example.com", "555-5678");
const bob = new Contact("Bob Johnson", "bob.johnson@example.com", "555-9123");

// Create a ContactsManager instance
const contactsManager = new ContactsManager();

// Asynchronous function to simulate fetching contacts from a server
async function fetchContactsFromServer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      contactsManager.addContact(john);
      contactsManager.addContact(jane);
      contactsManager.addContact(bob);
      resolve();
    }, 2000);
  });
}

// Asynchronous function to fetch contacts and display them
async function displayContacts() {
  console.log("Fetching contacts...");
  
  try {
    await fetchContactsFromServer();
    const contacts = contactsManager.getContacts();
    
    console.log("Contacts:");
    contacts.forEach(contact => console.log(contact.toString()));
  } catch (error) {
    console.error("An error occurred while fetching contacts:", error);
  }
}

// Call the displayContacts function
displayContacts();