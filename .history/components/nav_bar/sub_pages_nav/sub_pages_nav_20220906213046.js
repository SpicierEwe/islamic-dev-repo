import React from "react";

import styles from "./sub_pages_nav.module.css";
import { useState, useEffect } from "react";

export default function SubPagesNav(props) {
  /// this is the tab tracker displays the content for the selected tab

  const [selectedTab, setSelectedTab] = useState();
  //   this will be the initial selected tab when the page loads for the 1st time
  useEffect(() => {
    mainData[Object.keys(mainData)]["resources"].map((data, index) => {
      if (index == 0) {
        setSelectedTab(Object.keys(data)[0]);
      }
    });
    // setSelectedTab(selectedTab);
  }, [mainData]);
  const mainData = props.mainData;
  return ( );
}
