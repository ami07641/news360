const VideoSection = () => {
  return (
    <div className="px-2 lg:px-0 my-5 bg-basicColor text-white pt-10 pb-8">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="col-span-2">
            <div className="aspect-w-16 aspect-h-9 ">
              <iframe
                className="rounded"
                width="990"
                height="500"
                src="https://www.youtube.com/embed/4IenX7OHumk?si=IOvHrn-cTXpMtHvW"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="my-5 space-y-4">
              <h1 className="font-bold text-3xl">
                Win or Die (Full Episode) | Savage Kingdom
              </h1>
              <p>
                Five rival animal clans battle it out for power in the remote
                wilderness of Botswana. Each will kill to protect their dynasty,
                each would kill to take the throne. The winners are rewarded
                with the richest hunting grounds in the kingdom, but the fate of
                the losers is brutal: exile or death. The only way to succeed is
                to build an army to steal power before the others cut them off
                at the knees. Fighting to survive, killing to succeed ...
                nothing will stop them trying to reign supreme over the Savage
                Kingdom.
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="grid grid-cols-2 gap-5">
              <div>
                <div>
                  <iframe
                    className="rounded"
                    width="235"
                    height="205"
                    src="https://www.youtube.com/embed/yb_jIFKZi3E?si=IMJcKPfKfkiVlgL2"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="my-5 font-semibold">
                  <h1>
                    Animals Of The African Savannah | Episode 1 | Short Wildlife
                    Documentary
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <iframe
                    className="rounded"
                    width="235"
                    height="205"
                    src="https://www.youtube.com/embed/SNRG7iQVKAQ?si=LgFnYH0ZHGbmxrcm"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="my-5 font-semibold">
                  <h1>WILD BIRDS from Australia</h1>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <div>
                  <iframe
                    className="rounded"
                    width="235"
                    height="205"
                    src="https://www.youtube.com/embed/kgrV3_g9rYY?si=Cx8kTVeR7foQFh-k"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="my-5 font-semibold">
                  <h1>World’s Grumpiest Cat I Frozen Planet II I BBC</h1>
                </div>
              </div>
              <div>
                <div>
                  <iframe
                    className="rounded"
                    width="235"
                    height="205"
                    src="https://www.youtube.com/embed/y8kTYCex8RU?si=fwI94zIesJdIpwTB"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="my-5 font-semibold">
                  <h1>Sand Cat: The King of the Desert</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
