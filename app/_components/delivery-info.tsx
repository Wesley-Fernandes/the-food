import { Decimal } from "@prisma/client/runtime/library";
import { toMoney } from "../_helpers/price";

interface Props {
  fee: Decimal;
  time: number;
}
export const DeliveryInfo = ({ fee, time }: Props) => {
  return (
    <div className="flex h-14 items-center justify-around rounded-2xl border">
      <div className="flex flex-col">
        <span className="text-xs">Entrega</span>
        <strong className="text-sm">
          {Number(fee) === 0 ? "Grátis" : toMoney(fee)}
        </strong>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-xs">Tempo</span>
        <strong className="text-sm">{time} min</strong>
      </div>
    </div>
  );
};
