# Node.js / Express / Google cloud API
Dette er en implementering av API'et som bruker Express og Google cloud storage for å lagre data, samt API'et til yr.no for å finne værdata.

Frontend skal implementeres i eget/egne prosjekt(er), eneste frontend her blir Swagger/OpenAPI dokumentasjonen.

## API funksjoner for temperatursammenligning
Lister her en high-level overview over hvilke funksjoner API'et støtter. Full-detaljert dokumentasjon i Swagger.

### getPlace(searchString)
Returnerer en liste med søkeresultater som matcher søkestreng. Navn og koordinater (lat, lon).

### getTemperature(lat, lon)
Denne funksjonen søker opp gjeldende temperatur for et gitt koordinat.

### diffTemperature(a, b)
Returnerer differansen mellom to tall.

### saveMyLastResult()
Legger til ditt siste resultat til highscorelista. Tidspunkt for søk, navn på stedene, koordinater, temperaturforskjell.

