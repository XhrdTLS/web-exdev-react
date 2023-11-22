import { PropsWithChildren, FC } from "react";
import { Navbar } from "../components/ui/Navbar";

export const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div>{children}</div>
    </div>
  );
};
