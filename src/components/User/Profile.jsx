import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import ProfileHeader from "../ProfileComponents/ProfileHeader";
import WebDesignList from "../List/WebDesignList";
import FontList from "../List/FontList";
import ImageList from "../List/ImageList";

export default function Profile() {
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <div>
      <ProfileHeader />
      <>
        <div className="w-3/5 max-w-[850px] min-w-[400px] aspect-square border-[8px] border-slate-200 rounded-full absolute -z-9 left-0 top-0 -translate-x-[50%] -translate-y-[50%]" />
        <div className="w-1/2 max-w-[200px] min-w-[100px] aspect-square border-[8px] border-slate-50 rounded-full absolute -z-10 left-[620px] top-10 translate-x-[50%] translate-y-[50%]" />
        <div className="w-1/2 max-w-[300px] min-w-[200px] aspect-square border-[8px] border-slate-100 rounded-full absolute z-0 right-80 top-20 translate-x-[50%] translate-y-[50%]" />
        <div className="w-1/2 max-w-[600px] min-w-[300px] aspect-square border-[8px] border-slate-200 rounded-full absolute z-0 right-0 bottom-0 translate-x-[50%] translate-y-[50%]" />
      </>

      <div className="my-14">
        <WebDesignList />
      </div>

      <div className="my-14">
        <FontList />
      </div>
      <>
        <div className="w-3/5 max-w-[850px] min-w-[400px] aspect-square border-[8px] border-slate-100 rounded-se-full absolute -z-10 left-20 top-100 -translate-x-[50%] -translate-y-[50%]" />
        <div className="w-1/2 max-w-[300px] min-w-[200px] aspect-square border-[8px] border-slate-100 rounded-full absolute z-0 right-80 top-100 translate-x-[50%] translate-y-[50%]" />
      </>

      <div className="my-14">
        <ImageList />
      </div>
    </div>
  );
}
