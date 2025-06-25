import { useCountUp } from "../hooks/useCountUp";
import type { WidgetProps } from "../types/types";
import { formatNumber } from "../utilities/formatNumber";

export default function Widget(props: WidgetProps) {
  const count = useCountUp(props.number, 2000);

  return (
    <section className="widget">
      <div className="widget_image_wrapper">
        <img src={props.icon} alt="icon" className={props.className} />
      </div>
      <h4 className="widget_title">{props.title}</h4>
      <p className="widget_number">{formatNumber(count)}</p>
    </section>
  );
}
