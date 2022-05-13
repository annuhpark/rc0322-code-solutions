select "countries"."name" as "country",
       count("cities".*) as "totalNumberOfCities"
  from "countries"
  join "cities" using ("countryId")
 group by "countries"."countryId";
