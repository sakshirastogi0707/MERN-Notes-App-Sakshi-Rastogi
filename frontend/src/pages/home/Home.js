import React from "react";
import AppBanner from "../../components/banner/appBanner";
import AppBar from "../../layouts/header/AppBar";
import homeBannerImg from "../../assets/images/banner_two.avif";
export default function Home() {
  return (
    <div className="HomePageContainner">
      <AppBar />
      <AppBanner
        title="NOTES+1"
        subHeading="Keep Your Notes Online And Save + 24 Hours."
        image={homeBannerImg}
      />
    </div>
  );
}
