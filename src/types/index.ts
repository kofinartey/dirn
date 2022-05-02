export interface InvoiceInterface {
  _id?: string;
  id: string;
  createdAt: string;
  paymentDue: string;
  description?: string;
  paymentTerms: number;
  clientName?: string;
  clientEmail?: string;
  status: "paid" | "pending" | "draft" | string;
  senderAddress: AddressInterface;
  clientAddress: AddressInterface;
  items?: ItemInterface[];
  total: number;
}

export interface AddressInterface {
  street?: string;
  city?: string;
  postCode?: string;
  country?: string;
}
export interface ItemInterface {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export interface UserInterface {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  _id: string;
  avatar?: string;
}
