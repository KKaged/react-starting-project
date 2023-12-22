export default function TapButton({children, onSelect, isSelected}){
    return(
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    )
}