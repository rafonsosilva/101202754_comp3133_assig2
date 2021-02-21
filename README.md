## Graphql queries and mutations

```
mutation addHotel{
  addHotel(
    hotel_name: "Shelton Inn Hotel 2", 
    street:"123 Some Street", 
    city: "Montreal",
  	postal_code: "M9A0A4",
    price: 5000,
    email: "shelton@plaza.com"
  ){
    hotel_name
  }
}

query getHotels{
  getHotels{
    id
    hotel_name
    street
    city
    postal_code
    price
    email
  }
}

query getHotelByName{
  getHotelByName(hotel_name: "Plaza Hotel"){
    id
    hotel_name
    street
    city
    postal_code
    price
    email
  }
}

query getHotelByCity{
  getHotelByCity(city: "Toronto"){
    id
    hotel_name
    street
    city
    postal_code
    price
    email
  }
}

mutation addUser{
  addUser(
    username: "rsilva",
    email: "rs@rs.com",
    password: "1234"
  ){
    username
  }
}

mutation newBooking{
  addBooking(
    hotel_id: "6031cfb0accbe16ecccd8490",
    user_id:"6031ce580dd07061b8abfdb2",
    booking_start: "2022-01-01"
    booking_end: "2022-05-01"
  ){
    id
    hotel{
      hotel_name
    }
    createdAt
  }
}

query getBookings{
  getBookings{
    id
    createdAt
    hotel{
      id
    }
    user{
      id
    }
  }
}

query getUsers{
  getUsers{
    id
    username
  }
}
```