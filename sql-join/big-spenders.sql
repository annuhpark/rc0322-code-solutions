select "firstName",
       "lastName"
  from "customers"
  join "payments" as "p" using ("customerId")
 order by "amount"
 limit 10;
