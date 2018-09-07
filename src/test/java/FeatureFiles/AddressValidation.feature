@TestUKPostCode
Feature: UK postcode validation
  As a tester 
  I want to validate the address of UK using postcodes
	so that postcode can be verified

Scenario: Autocomplete a postcode partial
Given An input request for "autocomplete" with postcode "NR13N"
When The API is called 
Then response status code is "200" 
And response has "NR1 3NB"

Scenario: Get nearest postcode for postcode
Given An input request for "nearest" with postcode "NR13NS" 
When The API is called
Then response status code is "200" 
And response has "NR1 1BN"

Scenario: Lookup a postcode 
Given An input request for "search" with postcode "0709"
When The API is called
Then response status code is "404"
And response has "Invalid postcode"

Scenario Outline: validate a postcode 
Given An input request for "validate" with postcode "<POSTCODE>"
When The API is called
Then response status code is "<STATUS>"
And response has "<RESULT>"
Examples: 
|POSTCODE|STATUS|RESULT| 
|NR13NS|200|true|
|NR13N3|200|false|
|NR13NB|200|true|


