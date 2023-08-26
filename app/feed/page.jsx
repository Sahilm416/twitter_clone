import Style from "../font.module.css";
import InputTweet from "../compos/InputTweet";
import PostedTweet from "../compos/postedTweet";
import { auth } from "../config/firebase";
const Feed = () => {
  return (
    <>
      <div id={Style.feed} className="flex flex-col justify-start overflow-y-scroll items-center h-screen bg-black w-[500px]">
        
          <InputTweet />
          <PostedTweet
            profileImage={auth?.currentUser?.photoURL}
            content="This is a sample tweet content."
            likes={42}
            replies={12}
          />
      
      </div>
    </>
  );
};

export default Feed;
