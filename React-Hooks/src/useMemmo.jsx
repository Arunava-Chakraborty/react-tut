import { useState , useMemo , useEffect } from "react";

export default function UseMemo(){
    const [number , setNumber] = useState(0);
    const [dark , setDark] = useState(false);
    const doubleNumber = useMemo(()=>{
        return slowFunction(number)
    } , [number])
    const themeStyle = useMemo(() =>{
        return {
            backgroundColor : dark ? 'black' : 'white',
            color : dark ? 'white' : 'black'
        }
    } , [dark])

    useEffect(()=>{
        console.log('Theme changed')
    }, [themeStyle])

    return (
        <>
            <input type="number"
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))}
            />

            <button onClick={()=>{
                setDark(prevDark => !prevDark)
            }}>Change Theme</button>
            <div style={themeStyle}>{doubleNumber}</div>
        </>
    )
}

function slowFunction(num){
    for(let i=0; i<=10000000000; i++){
        return num*2
    }
}