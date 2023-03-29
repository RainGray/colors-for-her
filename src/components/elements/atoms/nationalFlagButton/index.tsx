import { useEffect, useState } from "react";

function parseFlagFromLocalStorage() {
    const icon = JSON.parse(localStorage.getItem('firstFlag') || '');
    return (icon ? icon : '🇬🇧')
}

export function NationalFlagButton(): JSX.Element {
    const [icon, setIcon] = useState(parseFlagFromLocalStorage());

    function ChangeFlag() {
        if (icon == '🇬🇧') {
            setIcon('🇷🇺')
        } else {
            setIcon('🇬🇧');
        } 
    }

    useEffect(() => {
        localStorage.setItem('firstFlag', JSON.stringify(icon));
    }, [icon])

    return (
        <div onClick={ChangeFlag} style={{cursor:'pointer'}}>
            {icon}
        </div>
    )
}