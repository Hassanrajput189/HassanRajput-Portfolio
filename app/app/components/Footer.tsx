const Footer = () => {
    return (
      <div className=" w-full flex flex-col justify-center items-center py-1 text-sm bg-gray-200">
        <div>
          <span>© 2024 Muhammad Hassan Rajput. All rights reserved.</span>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex items-center justify-center">
            <span>Created with</span>
            <img width={30} className="mx-1" src="/heart.png" alt="heart icon" />
            <span>by Hassan Rajput</span>      
          </div>
        </div>
      </div>
    );
  };
   export default Footer;