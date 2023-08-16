import * as Yup from "yup";

import constants from "../helpers/constants";

const addProductSchema = Yup.object({
  name: Yup.string().max(20).required(constants.REQUIRED_FIELD),
  category: Yup.string().required(constants.REQUIRED_FIELD),
  price: Yup.string().required(constants.REQUIRED_FIELD),
  unit: Yup.string().max(15).required(constants.REQUIRED_FIELD),
  info: Yup.string().max(100),
});

export default addProductSchema;
