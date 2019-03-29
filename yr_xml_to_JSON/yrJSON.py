import urllib3
import xmltodict
import json


def xml_to_JSON(yr_url):
    http = urllib3.PoolManager()
    response = http.request('GET', yr_url)

    parsed = json.dumps(xmltodict.parse(response.data), indent=4, sort_keys=True)

    # Uncomment this to write JSON to txt file.
    #file1 = open('yr_i_JSON.txt', 'w+')
    #file1.write(parsed)

    return parsed


if __name__ == '__main__':
    print(xml_to_JSON('https://api.met.no/weatherapi/nowcast/0.9/?lat=60.389444&lon=5.33')) # Tester med været i Bergen fra Nowcast APIet.

