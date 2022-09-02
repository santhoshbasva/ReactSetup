import React from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import {DotBox,OrangeBox,BlueBox} from "../Components/NewListBox";
import TextComponent from "../Components/TextComponent";
import { CheckButton } from "../Components/Create";
import { Filter } from "../Layouts/Image";


export const NewList = () => {
  return (
    <div>
      <Header />
      <div style={{display:"flex",directon:"row",marginTop:"10px",marginBottom:"-35px",marginLeft:"78%",opacity:"0.8"}}>
      <TextComponent label="Show Allocated"/>
      <CheckButton/>
      <TextComponent label="Filter" styleProps={{marginLeft:"10px"}}/>
      <Filter/></div>
      <div style={{display:"flex",direction:"row"}}>
      <DotBox />
      <OrangeBox />
      <BlueBox />
      </div>
      <div style={{display:"flex",direction:"row"}}>
      <div style={{marginLeft:"75px"}}><BlueBox /></div>
      <OrangeBox />
      <BlueBox />
      </div>
      <Footer />
    </div>
  );
};

export default NewList;
