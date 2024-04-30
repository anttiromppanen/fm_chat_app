export interface MessageType {
  id: number;
  message: string | string[];
  type: "message" | "invoice" | "multimedia";
  sender: "received" | "sent";
  amount: undefined | number;
}
