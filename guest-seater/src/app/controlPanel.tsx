export default function ControlPanel(){
    return(
        <div className="border-2 rounded-t-md p-1 bg-gray-400 flex flex-row gap-5 flex-grow-0">
            <h2 className="font-bold">Guest Seater</h2>
            <div>Number of attendees: <input type="text" className="bg-gray-300 border"/></div>
            <div>Upload Guest List <input type="file" className="bg-gray-300 border" /> </div>
        </div>
    );
}