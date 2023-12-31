import {
  ComponentProps,
  ForwardRefExoticComponent,
  RefAttributes,
  SVGProps,
  forwardRef,
} from "react";

export interface CardProps extends Omit<ComponentProps<"div">, "className"> {
  title: string;
  description: string;
  Icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
  >;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ title, description, Icon, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-white bg-opacity-5 rounded-md shadow p-4 relative overflow-hidden h-full mx-auto"
        {...rest}
      >
        <div>
          <span className="absolute right-3 bottom-3 flex items-center justify-center rounded-md opacity-10">
            <Icon className="h-12 w-12 text-white" aria-hidden="true" />
          </span>
        </div>
        <div className="flex flex-col h-full">
          <h3 className="text-2xl font-bold text-[#F61B1F]">{title}</h3>
          {description && (
            <p className="mt-2 text-base text-[#F1FAEE] flex-1">
              {description}
            </p>
          )}
          <div className="pt-6">{children}</div>
        </div>
      </div>
    );
  }
);

export default Card;
