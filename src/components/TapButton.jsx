export default function TapButton({children, onSelect}){
    function handleClick(){
        console.log('clicked'); 
    }
    return(
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    )
}