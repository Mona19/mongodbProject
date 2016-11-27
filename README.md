# mongodbProject
Transit Application Database in Mongodb


Business statement:
We are a cab service provider and have to store information related to company’s drivers, Customers, each trip the customer takes and the car which the driver drives. Following are the business rules and rationale for the model:
Business Rules & Rationale:
For simplicity, Cab services are limited to Atlanta region.
Cab service provides cars to the drivers.
Customer can take an individual or shared ride.
Car can be shared between maximum of 4 customers. 
Customer can only book for himself in case of shared ride.
There is only one type of car (eg. Sedan) available for booking.
We store each customer’s name, Unique customer ID, address, contact number, Email ID, password.
Each customer has only 1 unique credit/debit card associated with it.
Payment mode for a trip is through credit/debit card only.
We will be keeping track of payment made for a trip.
Card details comprises of Card Id, Card number, CVV, Expiry date, zip code, Name on Card.
A customer can book a single trip at a time. He may book trips as many times as he wants.
A Route can have multiple cars but a car can be selected only for one route at a time.
A route comprises of one or many trips.
A trip will have a source location, a destination location, distance between source and destination and a fare.
Fare for a trip = base fare + (distance travelled * cost/mile)
Where, Base fare (Non-Shared Trip) = $ 5 
	Base fare(Shared Trip)	       = $ 3
	Cost/mile (constant value)   = $ 1 
A driver can drive any car and a car can be driven by any driver.
A driver can take none or many trips.
Each driver will have a unique driver ID, driver name, password, Driving License number, Contact number, Email ID.
Each car has a unique VIN (vehicle identification number), Registration number, car color, car model name.
A route has a unique Car ID and a unique Driver ID










