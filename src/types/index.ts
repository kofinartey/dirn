export interface InvoiceInterface {
  id: string;
  createdAt: string;
  paymentDue: string;
  description?: string;
  paymentTerms: number;
  clientName?: string;
  clientEmail?: string;
  status: "paid" | "pendinig" | "draft" | string;
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
