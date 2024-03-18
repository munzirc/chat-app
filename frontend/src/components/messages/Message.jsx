const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full ">
          <img src="" alt="user" />
        </div>
      </div>
      <div className={`chat-bubble text-white pb-2 bg-blue-500`}>Hello!</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:41
      </div>
    </div>
  );
};

export default Message;
