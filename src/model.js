export class Book {
  constructor(title, authors, isbn, subtitle = '', abstract = '') {
    this.title = title;
    this.authors = authors;
    this.isbn = isbn;
    this.subtitle = subtitle;
    this.abstract = abstract;
  }
}

export class User {
  get id() {
    return this._id;
  }

  get username() {
    return this._username;
  }

  get email() {
    return this._email;
  }

  set username(value) {
    this._username = value;
  }

  set email(value) {
    this._email = value;
  }

  set firstName(value) {
    this._firstName = value;
  }

  set lastName(value) {
    this._lastName = value;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get isConfirmed() {
    return this._isConfirmed;
  }
  constructor(id, username, email, firstName, lastName, isConfirmed) {


    this._id = id;
    this._username = username;
    this._email = email;
    this._firstName = firstName;
    this._lastName = lastName;
    this._isConfirmed = isConfirmed;
  }
}