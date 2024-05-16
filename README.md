

## System Requirements

It requires the following to be installed on your development machine;
* [nodejs](https://nodejs.org/en/download/) version 12 or above.
* A [git](https://git-scm.com/downloads) client.

## Installation
* Execute `npm install` in the terminal.

## Instructions

The challenge is to implement the `getArnieQuotes()` function, which is exported from `./src/get-arnie-quotes.ts`.

The `getArnieQuotes()` function accepts an array of strings, with each string containing a URL. 

The unit tests in `./src/get-arnie-quotes.spec.ts` will provide pre-defined URLs to the function and test your function's implementation. To run the unit tests, execute `npm test` in the terminal.

The goal is to write an implementation of `getArnieQuotes()` that meets all requirements and passes all unit tests.

## Requirements
`getArnieQuotes()` must perform the following on every passed in URL

1. Execute a HTTP GET
2. If the HTTP status code of the response is 200, push an object to the results array with a single key `"Arnie Quote"` and the HTTP response body's `message` property as the key's associated value.
3. If the HTTP status code of the response is not 200, push an object to the results array with a single key `"FAILURE"` and the HTTP response body's `message` property as the key's associated value.

Finally, the `getArnieQuotes()` function's return value must be a promise that resolves to the overall results array.

Note that for this challenge, the HTTP calls are mocked. You *must* use the provided `httpGet` function to perform your HTTP requests.


## Docs

### `getArnieQuotes(urls)`

```jsdoc
Executes a HTTP GET request on each of the URLs, transforms each of the HTTP responses according to the challenge instructions and returns the results.

@param {string[]} urls The urls to be requested
@return {Promise} A promise which resolves to a results array. 

An example results array:

[
  { 'Arnie Quote': 'Some cool quote' },
  { 'FAILURE': 'Your request has been terminated' },
]
```

### `httpGet(url)`

```jsdoc
Executes a faked HTTP GET request on the passed URL.

@param {string} url The url upon which to perform a HTTP GET
@return {Promise} A promise which resolves to a HTTP response. 

An example HTTP response:

{
  status: 200,
  body: "{ 'message': 'Some cool arnie quote' }" // JSON string
}

```
