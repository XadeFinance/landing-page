import classNames from "classnames";

export const BentoGrid = ({
    className,
    children,
    description,
}: {
    className?: string;
    children?: React.ReactNode;
    description?: boolean;
}) => {
    return (
        <div
            className={classNames(
                `grid ${description === true ? ' laptop:auto-rows-[28vh] mobile:auto-rows-[30vh] tablet:auto-rows-[42vh] pad:auto-rows-[40vh]' : 'md:auto-rows-[22vh]'} grid-cols-1 laptop:grid-cols-2 gap-4 w-[40vw] mx-auto `,
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <div
            className={classNames(
                " row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 size-full",
                className
            )}
            style={{
                borderRadius: '20px',
                border: '1px solid #515151',
                background: 'linear-gradient(90deg, #0F0F0F 0%, #0F0F0F 100%)'
            }}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200 -mt-4">
                {icon}
                <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-600 text-xs">
                    {description}
                </div>
            </div>
        </div>
    );
};
