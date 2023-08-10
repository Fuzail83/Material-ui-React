import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

function CustomTabPanel(props) {
  const { children, value, index } = props;
  return <>{value === index && <h3> {children}</h3>}</>;
}

const TabsMui = () => {
  const [tabs, setTabs] = useState(0);
  const handleTabChange = (e, newValue) => {
    setTabs(newValue);
    console.log(newValue);
  };
  return (
    <>
      <Tabs
        value={tabs}
        onChange={handleTabChange}
        aria-label="basic tabs example"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
      <CustomTabPanel value={tabs} index={0}>
        First
      </CustomTabPanel>
      <CustomTabPanel value={tabs} index={1}>
        Second
      </CustomTabPanel>
      <CustomTabPanel value={tabs} index={2}>
        Third
      </CustomTabPanel>
    </>
  );
};

export default TabsMui;
