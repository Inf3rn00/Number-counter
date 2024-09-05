function Message() {
    function clickMe(){
       console.log("welcome")
    }
    return ( <div className="flex justify-center mt-10">
        <button className="border-solid border-4 p-2" onClick={clickMe}>Click Here to get a message</button>
    </div> );
}

export default Message;