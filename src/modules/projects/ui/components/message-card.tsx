import { Fragment, MessageRole, MessageType } from "@/generated/prisma";

interface Props {
  content: string;
  role: MessageRole;
  fragment: Fragment | null;
  createdAt: Date;
  isActiveFragment: boolean;
  onFragmentClick: (fragment: Fragment) => void;
  type: MessageType;
}

export const MessageCard = ({
  content,
  role,
  fragment,
  createdAt,
  isActiveFragment,
  onFragmentClick,
  type,
}) => {
  if (role === "ASSISTANT") {
    return <p className="">assistant</p>;
  }
  return <p>user</p>;
};
