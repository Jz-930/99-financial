interface IconListItemProps {
    icon: string;
    iconColor?: string;
    children: React.ReactNode;
    className?: string;
}

export default function IconListItem({
    icon,
    iconColor = 'text-brand-gold',
    children,
    className = 'text-slate-700',
}: IconListItemProps) {
    return (
        <li className={`flex items-start ${className}`}>
            <i className={`${icon} ${iconColor} mt-1.5 mr-3`}></i>
            <span>{children}</span>
        </li>
    );
}
