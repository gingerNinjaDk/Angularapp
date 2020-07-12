export interface User {

  firstName: string,
  lastName: string,
  age?: number,   // ? Means optional
  address: {
    street?: string,
    city?: string,
    state?: string
  }

 }
