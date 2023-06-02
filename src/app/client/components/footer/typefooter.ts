import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

type TypeFooter =
  {
    title: string;
    item: Array<string>;
  }
type TypeBank = {
  icon: IconDefinition,
  name: string
}
type TypeaddressFooter = {
  title: string;
  address: string
}
export {
  TypeFooter,
  TypeBank,
  TypeaddressFooter
}
