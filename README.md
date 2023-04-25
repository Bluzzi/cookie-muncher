# Cookie Muncher
A lightweight and typesafe package for manipulating cookies in NodeJS and the browser.

- 🚀 Lightweight
- 🌏 Works in all browsers
- 🧪 Unit tested  
- 🔷 Typesafe
- 📦 Support ESM & CJS  
- ✅ [RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265) compliant
- 📖 Well documented

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

### `httpCookie.serialize(cookie: Cookie, options?: HttpCookieOptions): string`
Serialize a cookie into a HTTP `Set-Cookie` header string.

```ts
import type { Cookie, HttpCookieOptions } from "cookie-muncher";
import { httpCookie, CookieMaxAge } from "cookie-muncher";

const cookie: Cookie = {
  name: "foo",
  value: "bar",
};

const options: HttpCookieOptions = {
  maxAge: CookieMaxAge.TwoWeeks,
  secure: true,
  sameSite: "Strict",
};

console.log(httpCookie.serialize(cookie, options));
// Output: "foo=bar; Max-Age=3600; Path=/; Secure; SameSite=Strict"
```

### `httpCookie.parse(cookies: string): Cookie[]`
Parse a HTTP `Cookie` header string of cookies into an array of cookie objects.

```ts
import { httpCookie } from "cookie-muncher";

const cookies = "foo=bar; equation=E%3Dmc%5E2";

console.log(httpCookie.parse(cookies));
// Output: [{ name: "foo", value: "bar" }, { name: "equation", value: "E=mc^2" }]
```

### `domCookie.set(cookie: Cookie, options?: DomCookieOptions): void`
Create an edit cookie. 

To be able to edit a cookie, you must define the same `Domain` and `Path` as the cookie.

You cannot create or edit `HttpOnly` cookies.

You may not create more than 50 cookies for a single `Domain` and each cookie must not exceed 4096 bytes. If it does, an error will be thrown by this function.

```ts
import { domCookie } from "cookie-muncher";

domCookie.set({ name: "foo", value: "bar" });
domCookie.set({ name: "bar", value: "foo" }, { path: "/bar" });

```

### `domCookie.get(name: string): Cookie | null`
Get the value of a cookie. 

You cannot get the value of an `HttpOnly` cookie. 

Make sure the `Path` of the cookie is accessible in the current context.

```ts
import { domCookie } from "cookie-muncher";

console.log(domCookie.get("foo")); 
// Ouput: { name: "foo", value: "bar" }
```

### `domCookie.getAll(): Cookie[]`
Get all existing cookies. With the same limitations as the `domCookie.get(name: string)` function.

```ts
import { domCookie } from "cookie-muncher";

console.log(domCookie.getAll());
// Output: [{ name: "foo", value: "bar" }, { name: "bar", value: "foo" }]
```

### `domCookie.remove(name: string, options?: DomCookieOptions): void`
Delete a cookie, make sure to set the same `Domain` and `Path` of the cookie you wish to delete.

```ts
import { domCookie } from "cookie-muncher";

domCookie.remove("foo", { path: "/bar" });
```

### `HttpCookieOptions` & `DomCookieOptions`
```ts
import type { HttpCookieOptions, DomCookieOptions } from "cookie-muncher";
```

#### `domain`
Indicates the input for the [Domain Set-Cookie attribute](https://datatracker.ietf.org/doc/html/rfc6265#section-5.2.3). The cookie is typically applied to only the current domain when no domain is set by default, and this is recognized by most clients.

#### `expires`
Specifies the Date object to be used as the value for the [Expires Set-Cookie attribute](https://datatracker.ietf.org/doc/html/rfc6265#section-5.2.1). By default, the cookie has no expiration, which is recognized by most clients as a "non-persistent cookie" that gets deleted upon a certain condition, such as closing the web browser application.

#### `maxAge`
Specifies the `number` (in seconds) to be used as the value for the [Max-Age Set-Cookie attribute](https://datatracker.ietf.org/doc/html/rfc6265#section-5.2.2). The given number will be rounded down to an integer. By default, the cookie has no maximum age.

According to the [cookie storage model specification](https://datatracker.ietf.org/doc/html/rfc6265#section-5.3), if both `expires` and `maxAge` are set, then `maxAge` takes precedence. However, it is possible that not all clients will obey this rule, so if both are set, they should point to the same date and time to ensure proper functionality.

#### `httpOnly`
Specifies the `boolean` value to be used for the [HttpOnly Set-Cookie attribute](https://datatracker.ietf.org/doc/html/rfc6265#section-5.2.6). The `HttpOnly` attribute is set if the value is truthy; otherwise, it is not set. By default, the `HttpOnly` attribute is not set.

It's important to exercise caution when setting this attribute to `true` because compliant clients will restrict client-side JavaScript from accessing the cookie via `document.cookie`.

It's worth noting that `HttpOnly` cookies are inaccessible to client-side JavaScript, which also means that you cannot create an `HttpOnly` cookie using client-side JavaScript.

> **Note**
> This parameter is disabled on the `DomCookieOptions` type.

#### `path`
Indicates the input for the [Path Set-Cookie attribute](https://datatracker.ietf.org/doc/html/rfc6265#section-5.2.4). By default, the path is set to the ["default-path"](https://datatracker.ietf.org/doc/html/rfc6265#section-5.1.4).

#### `sameSite`
Indicates the input for the [SameSite Set-Cookie attribute](tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis-09#section-5.4.7) :
- lax: sets the `SameSite` attribute to `Lax` for lax same-site enforcement
- none: sets the `SameSite` attribute to `None` for explicit cross-site cookies
- strict: sets the `SameSite` attribute to `Strict` for strict same-site enforcement

For more information about the different enforcement levels, refer to [the specification](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis-09#section-5.4.7).

It's important to note that the SameSite attribute is not yet fully standardized and may change in the future. As a result, many clients may ignore this attribute until they understand it.

#### `secure`
Specifies the `boolean` value for the [Secure Set-Cookie attribute](https://datatracker.ietf.org/doc/html/rfc6265#section-5.2.5). When truthy, the `Secure` attribute is set, otherwise it is not. By default, the `Secure` attribute is not set.

Be careful when setting this to `true`, as compliant clients will not send the cookie back to the server in the future if the browser does not have an HTTPS connection.


This method specifies the `boolean` value for the [Secure Set-Cookie attribute](https://datatracker.ietf.org/doc/html/rfc6265#section-5.2.5). Setting it to `true` will enable the `Secure` attribute, which is not set by default. It's important to note that if you set this to `true`, the cookie will only be sent back to the server in the future if the browser has an HTTPS connection. Therefore, you should be careful when using this attribute to ensure that your application works as intended in all scenarios.

## License
This package is MIT licensed.