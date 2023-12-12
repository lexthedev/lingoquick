export const TaskList = (props: { width?: number, height?: number }) => {
    return <svg width={props.width || "60"} height={props.height || "60"} viewBox="0 0 48 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="39" height="49" stroke="currentcolor" />
        <rect className="makeMeWhite" x="1" y="1" width="39" height="49" fill="currentcolor" stroke="black" />
        <path d="M8.68345 11.5L6.78345 9.60003L7.25845 9.12503L8.68345 10.55L11.7418 7.4917L12.2168 7.9667L8.68345 11.5Z" fill="black" />
        <rect x="14.5" y="9" width="21" height="1" fill="black" />
        <path d="M8.68345 21.5L6.78345 19.6L7.25845 19.125L8.68345 20.55L11.7418 17.4917L12.2168 17.9667L8.68345 21.5Z" fill="black" />
        <rect x="14.5" y="19" width="21" height="1" fill="black" />
        <path d="M8.68345 31.5L6.78345 29.6L7.25845 29.125L8.68345 30.55L11.7418 27.4917L12.2168 27.9667L8.68345 31.5Z" fill="black" />
        <rect x="14.5" y="29" width="21" height="1" fill="black" />
        <path d="M8.68345 41.5L6.78345 39.6L7.25845 39.125L8.68345 40.55L11.7418 37.4917L12.2168 37.9667L8.68345 41.5Z" fill="black" />
        <rect x="14.5" y="39" width="21" height="1" fill="black" />
    </svg>
}
