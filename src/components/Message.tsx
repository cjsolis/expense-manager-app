import { FC } from "react";

export interface IMessageProps {
  message: string;
  type: string;
}

const Message: FC<IMessageProps> = ({ message, type }) => {
  return <div className={`alert ${type}`}>{message}</div>;
};

export default Message;
