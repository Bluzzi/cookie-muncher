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
This package has two separate modules:
- `httpCookie`: serialize and parse cookie from HTTP headers (`Cookie`, `Set-Cookie`)
- `domCookie`: manage cookies from browser DOM (set, remove, get)

### `httpCookie.serialize(cookie: Cookie, options?: CookieOptions): string`
Serialize a cookie into a HTTP `Set-Cookie` header string.

```ts
import type { Cookie, CookieOptions } from "cookie-muncher";
import { httpCookie, CookieMaxAge } from "cookie-muncher";

const cookie: Cookie = {
  name: "myCookie",
  value: "myValue",
};

const options: CookieOptions = {
  maxAge: CookieMaxAge.TwoWeeks,
  secure: true,
  sameSite: "Strict",
};

console.log(httpCookie.serialize(cookie, options));
// Output: "myCookie=myValue; Max-Age=3600; Path=/; Secure; SameSite=Strict"
```

### `httpCookie.parse(cookies: string): Cookie[]`
Parse a HTTP `Cookie` header string of cookies into an array of cookie objects.

```ts
import { httpCookie } from "cookie-muncher";

const cookies = "myCookie1=myValue1; myCookie2=myValue2";

console.log(httpCookie.parse(cookies));
// Output: [{ name: "myCookie1", value: "myValue1" }, { name: "myCookie2", value: "myValue2" }]
```

## License
This package is MIT licensed.