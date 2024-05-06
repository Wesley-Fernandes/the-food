import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "../../ui/button";

type Props = {
  downgrade: () => void;
  upgrade: () => void;
};
export const Value = () => {
  return (
    <div className="flex items-center gap-2">
      <Button size="icon" variant="outline">
        <ChevronLeftIcon size={16} />
      </Button>
      <span>1</span>
      <Button size="icon" variant="destructive">
        <ChevronRightIcon size={16} />
      </Button>
    </div>
  );
};
