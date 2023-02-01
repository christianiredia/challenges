# Days Of The Week Exercise

Write a function called _returnDay_. this function takes in one parameter _(a number from 1-7)_ and returns the day of the week _(1 is Monday, 2 is Tuesday, etc.)_ If the number is _less than_ **1** or _greater than_ **7**, the function should return _null_. In some countries Sunday is treated as the first day of the week, but for this exercise we will use _Monday as the first day_.

**Hint:**
Store the days of the week in an array, or use an object with numerical keys. When the function is called, plug the number into the array/object you've created to retrieve the corresponding day name and then return that value.

- returnDay(1) // "Monday"
- returnDay(7) // "Sunday"
- returnDay(4) // "Thursday"
- returnDay(0) // null
