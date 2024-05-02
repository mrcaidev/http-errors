# @mrcaidev/http-errors

Utility classes for HTTP errors.

## 📦 Installation

```sh
npm i @mrcaidev/http-errors
```

## 🛠️ Usage

Default:

```ts
import { BadRequestError } from "@mrcaidev/http-errors";

throw new BadRequestError();
```

Customized error message:

```ts
import { BadRequestError } from "@mrcaidev/http-errors";

throw new BadRequestError("Malformed data");
```

Dynamic status code and error message:

```ts
import { HttpError } from "@mrcaidev/http-errors";

throw new HttpError(400, "Malformed data");
```

Hover the mouse over the error class to view its definition and RFC link.

![Hover information](assets/hover-info.jpg)

## 🔎 References

- [RFC 9110](https://www.rfc-editor.org/rfc/rfc9110)
- [RFC 8470](https://www.rfc-editor.org/rfc/rfc8470)
- [RFC 7725](https://www.rfc-editor.org/rfc/rfc7725)
- [RFC 6585](https://www.rfc-editor.org/rfc/rfc6585)
- [RFC 5842](https://www.rfc-editor.org/rfc/rfc5842)
- [RFC 4918](https://www.rfc-editor.org/rfc/rfc4918)
- [RFC 2774](https://www.rfc-editor.org/rfc/rfc2774)
- [RFC 2295](https://www.rfc-editor.org/rfc/rfc2295)

## 📜 License

[MIT](LICENSE)
