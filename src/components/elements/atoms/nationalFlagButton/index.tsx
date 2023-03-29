import { useEffect, useState } from "react";

function parseFlagFromLocalStorage(languageSlot: string) {
    try {
        const icon = JSON.parse(localStorage.getItem(languageSlot) || '');
        return (icon ? icon : '🇬🇧')
    } catch {
        return '🇬🇧'
    }
    
}

export function NationalFlagButton(props: {languageSlot: string}): JSX.Element {
    const [icon, setIcon] = useState(parseFlagFromLocalStorage(props.languageSlot));

    function ChangeFlag() {
        if (icon == '🇬🇧') {
            setIcon('🇷🇺')
        } else {
            setIcon('🇬🇧');
        } 
    }

    useEffect(() => {
        localStorage.setItem(props.languageSlot, JSON.stringify(icon));
    }, [icon])

    return (
        <div className="flagButton" onClick={ChangeFlag}>
            {icon}
        </div>
    )
}