select "line1",
       "c"."name",
       "district"
  from "addresses" as "a"
  join "cities" as "c" using ("cityId")
