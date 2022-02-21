import { useState } from "react";


const style = {
    wrapper: `px-4 flex flex-row border-b border-[#38444d] pb-4`,
    tweetBoxLeft: `mr-4`,
    tweetBoxRight: `flex-1`,
    profileImage: `height-12 w-12 rounded-full`,
    inputField: `w-full h-full outline-none bg-transparent text-lg`,
};

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');

    return (
        <div className={style.wrapper}>
            <div className={style.tweetBoxLeft}>
                <img
                    src="https://yt3.ggpht.com/yti/APfAmoGIsZ-358bP5JOtViPECnnkyEQGn_E_-j8f3LmfwA=s88-c-k-c0x00ffffff-no-rj-mo"
                    alt="profile-image"
                    className={style.profileImage}
                />
            </div>
            <div className={style.tweetBoxRight}>
                <form>
                    <textarea
                        className={style.inputField}
                        placeholder="What's Poppin?"
                        value={tweetMessage}
                        onChange={(e) => setTweetMessage(e.target.value)}
                    />
                </form>
            </div>
        </div>
    )
};

export default TweetBox;