# Cookie Muncher
A lightweight and typesafe package for manipulating cookies in NodeJS and the browser.

✅ Lightweight  
✅ Easy to use  
✅ Unit tested  
✅ Typesafe  
✅ Compatible with NodeJS & browsers  
✅ ES module & CommonJS compatible  

## Installation
You can install Cookie Muncher via NPM, Yarn or PNPM.

```sh
npm install cookie-muncher
```

```sh
yarn add cookie-muncher
```

```sh
pnpm install cookie-muncher
```

## Usage
### `serializeCookie(cookie: Cookie, options?: CookieOptions): string`
Serialize a cookie into a string.

```ts
import type { Cookie, CookieOptions } from "cookie-muncher";
import { serializeCookie, CookieMaxAge } from "cookie-muncher";

const cookie: Cookie = {
  name: "myCookie",
  value: "myValue",
};

const options: CookieOptions = {
  maxAge: CookieMaxAge.TwoWeeks,
  path: "/",
  secure: true,
  sameSite: "Strict",
};

const serializedCookie = serializeCookie(cookie, options);

console.log(serializedCookie);
// Output: "myCookie=myValue; Max-Age=3600; Path=/; Secure; SameSite=Strict"
```

### `parseCookies(cookies: string): Cookie[]`
Parse a string of cookies into an array of cookie objects.

```ts
import { parseCookies } from "cookie-muncher";

const cookies = "myCookie1=myValue1; myCookie2=myValue2";

const parsedCookies = parseCookies(cookies);

console.log(parsedCookies); 
// Output: [{ name: "myCookie1", value: "myValue1" }, { name: "myCookie2", value: "myValue2" }]
```

## License
This package is MIT licensed.