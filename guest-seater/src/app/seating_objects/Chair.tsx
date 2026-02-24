
interface chairProps{
    visible:boolean;
    rotation: number;
    xDisplace: number;
    yDisplace: number
}

export default function Chair(props:chairProps){
    const styles =`rotate=[${props.rotation}deg] translate-x-[${props.xDisplace}px] translate-y-[${props.yDisplace}px]
     ${props.visible?'visible':'invisible'} border-black border-2 bg-gray-200 w-6 h-6`;

    return(
        <div className={styles}>
            Chair
        </div>
    );
}