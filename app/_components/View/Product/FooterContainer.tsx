import type { ReactNode } from "react";

interface props {
  children: ReactNode;
}
export const FooterContainer = ({ children }: props) => {
  return (
    <div className="relative -top-12 z-10 flex min-h-[calc(100vh-300px)] flex-1 flex-col overflow-hidden rounded-tl-2xl rounded-tr-2xl bg-white px-4 pt-4">
      {children}
    </div>
  );
};
