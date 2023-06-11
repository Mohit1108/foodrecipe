import React from "react";
import CtaImage from "../assets/CTA.jpg";
import appleBTN from "../assets/aivalable-on-the-app-store-2.jpg";
import GooglePlayBTN from "../assets/google-play-download-android-app (1).jpg";
export default function CTA() {
  return (
    <div className=" AppContainer">
      <div className="CTASection py-5">
        <div className=" d-flex mb-3 row align-items-center">
          <div className="col-md-6">
            <img src={CtaImage} className="img-fluid" alt="Wild Landscape" />
          </div>
          <div className="col-md-6">
            <h1>
              <span className="underLineText">Download</span> our app and join
              the <span className="underLineText"> contest!</span>
            </h1>
            <p className="secondaryPara">
              In order to improve our cooking skills, we do need a food
              photography
            </p>
            <div className=" playBtns gap-4 d-flex">
              <a className="" href="/">
                <img src={appleBTN}></img>
              </a>
              <a className="" href="/">
                <img src={GooglePlayBTN}></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
