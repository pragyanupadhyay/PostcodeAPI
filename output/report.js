$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("\u0027src\\test\\java\\FeatureFiles\\AddressValidation.feature\u0027");
formatter.feature({
  "line": 2,
  "name": "UK postcode validation",
  "description": "As a tester \r\nI want to validate the address of UK using postcodes\r\nso that postcode can be verified",
  "id": "uk-postcode-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TestUKPostCode"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Autocomplete a postcode partial",
  "description": "",
  "id": "uk-postcode-validation;autocomplete-a-postcode-partial",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "An input request for \"autocomplete\" with postcode \"NR13N\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "The API is called",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "response status code is \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "response has \"NR1 3NB\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "autocomplete",
      "offset": 22
    },
    {
      "val": "NR13N",
      "offset": 51
    }
  ],
  "location": "Stepdef.an_input_request(String,String)"
});
formatter.result({
  "duration": 392402494,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef.The_API_is_called()"
});
formatter.result({
  "duration": 4229222998,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 25
    }
  ],
  "location": "Stepdef.Response_status_code_is(String)"
});
formatter.result({
  "duration": 2873241,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NR1 3NB",
      "offset": 14
    }
  ],
  "location": "Stepdef.Response_has(String)"
});
formatter.result({
  "duration": 317694,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Get nearest postcode for postcode",
  "description": "",
  "id": "uk-postcode-validation;get-nearest-postcode-for-postcode",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "An input request for \"nearest\" with postcode \"NR13NS\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "The API is called",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "response status code is \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "response has \"NR1 1BN\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "nearest",
      "offset": 22
    },
    {
      "val": "NR13NS",
      "offset": 46
    }
  ],
  "location": "Stepdef.an_input_request(String,String)"
});
formatter.result({
  "duration": 240253,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef.The_API_is_called()"
});
formatter.result({
  "duration": 150877600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 25
    }
  ],
  "location": "Stepdef.Response_status_code_is(String)"
});
formatter.result({
  "duration": 222992,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NR1 1BN",
      "offset": 14
    }
  ],
  "location": "Stepdef.Response_has(String)"
});
formatter.result({
  "duration": 164212,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Lookup a postcode",
  "description": "",
  "id": "uk-postcode-validation;lookup-a-postcode",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "An input request for \"search\" with postcode \"0709\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "The API is called",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "response status code is \"404\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "response has \"Invalid postcode\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "search",
      "offset": 22
    },
    {
      "val": "0709",
      "offset": 45
    }
  ],
  "location": "Stepdef.an_input_request(String,String)"
});
formatter.result({
  "duration": 290170,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef.The_API_is_called()"
});
formatter.result({
  "duration": 102390776,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 25
    }
  ],
  "location": "Stepdef.Response_status_code_is(String)"
});
formatter.result({
  "duration": 309763,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid postcode",
      "offset": 14
    }
  ],
  "location": "Stepdef.Response_has(String)"
});
formatter.result({
  "duration": 395601,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "validate a postcode",
  "description": "",
  "id": "uk-postcode-validation;validate-a-postcode;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestUKPostCode"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "An input request for \"validate\" with postcode \"NR13NS\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "The API is called",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "response status code is \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "response has \"true\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "validate",
      "offset": 22
    },
    {
      "val": "NR13NS",
      "offset": 47
    }
  ],
  "location": "Stepdef.an_input_request(String,String)"
});
formatter.result({
  "duration": 340087,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef.The_API_is_called()"
});
formatter.result({
  "duration": 124745518,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 25
    }
  ],
  "location": "Stepdef.Response_status_code_is(String)"
});
formatter.result({
  "duration": 164679,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 14
    }
  ],
  "location": "Stepdef.Response_has(String)"
});
formatter.result({
  "duration": 438054,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "validate a postcode",
  "description": "",
  "id": "uk-postcode-validation;validate-a-postcode;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestUKPostCode"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "An input request for \"validate\" with postcode \"NR13N3\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "The API is called",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "response status code is \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "response has \"false\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "validate",
      "offset": 22
    },
    {
      "val": "NR13N3",
      "offset": 47
    }
  ],
  "location": "Stepdef.an_input_request(String,String)"
});
formatter.result({
  "duration": 1112163,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef.The_API_is_called()"
});
formatter.result({
  "duration": 101100407,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 25
    }
  ],
  "location": "Stepdef.Response_status_code_is(String)"
});
formatter.result({
  "duration": 313496,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 14
    }
  ],
  "location": "Stepdef.Response_has(String)"
});
formatter.result({
  "duration": 295301,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "validate a postcode",
  "description": "",
  "id": "uk-postcode-validation;validate-a-postcode;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestUKPostCode"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "An input request for \"validate\" with postcode \"NR13NB\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "The API is called",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "response status code is \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "response has \"true\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "validate",
      "offset": 22
    },
    {
      "val": "NR13NB",
      "offset": 47
    }
  ],
  "location": "Stepdef.an_input_request(String,String)"
});
formatter.result({
  "duration": 288770,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef.The_API_is_called()"
});
formatter.result({
  "duration": 121336722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 25
    }
  ],
  "location": "Stepdef.Response_status_code_is(String)"
});
formatter.result({
  "duration": 164211,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 14
    }
  ],
  "location": "Stepdef.Response_has(String)"
});
formatter.result({
  "duration": 170277,
  "status": "passed"
});
});