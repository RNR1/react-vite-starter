// Declare your server responses here
type GeneralResponse = {
  field: string;
};

// Add all responses here to make the axios client aware of them
type Responses = GeneralResponse | void | unknown;

export type { Responses };
export default null;
