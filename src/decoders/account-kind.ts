import { AccountKind, UnknownEnumValue } from "~/models";

export const decodeAccountKind = (kind: any): AccountKind => {
  switch (String(kind)) {
    case "E":
    case "1":
      return AccountKind.STUDENT;
    default:
      throw new UnknownEnumValue("AccountKind", kind);
  }
};
