import { Alert } from "@mui/material";
import IconCheck from "../icons/IconCheck";
import { ReactNode } from "react";

const AlertBox = ({
  status,
  message,
  icon,
}: {
  status: "success" | "error" | "info" | "warning";
  message: string;
  icon: ReactNode;
}) => {
  return (
    <Alert icon={icon} severity={status}>
      {message}
    </Alert>
  );
};

export default AlertBox;
