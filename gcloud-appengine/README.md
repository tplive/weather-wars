# Node.js / Express / Google cloud API
Dette er en implementering av API'et som bruker Express og Google cloud storage for å lagre data, samt API'et til yr.no for å finne værdata.

- [Google Cloud Free Tier](https://cloud.google.com/free/)
- [Google Maps Platform API](https://cloud.google.com/maps-platform/pricing/?hl=en_US)


Frontend skal implementeres i eget/egne prosjekt(er), eneste frontend her blir Swagger/OpenAPI dokumentasjonen.

## yr.no API
https://api.met.no/weatherapi/locationforecast/1.9/documentation

Eksempel på bruk: https://api.met.no/weatherapi/locationforecast/1.9/?lat=60.10&lon=9.58&msl=70

Ser at man ikke kan søke direkte etter vær for en geografisk lokasjon hos Yr. Derimot vil man få forslagene som "popper" opp når man skriver i søkefeltet, ved å spørre her: https://www.yr.no/_/websvc/jsonforslagsboks.aspx?s=o&s1t=&s1i=&s2t=&s2i=



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

