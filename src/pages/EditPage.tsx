import * as React from 'react';
import {
  Tabs, Tab, Box, Typography
} from '@mui/material';

function TabPanel(props: {
  children?: React.ReactNode;
  index: number;
  value: number;
}) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography sx={{color: "black"}}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function EditPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{width: '100%'}}>
      <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="change callbacks" id="tab_0" value={0}/>
          <Tab label="unregister callbacks" id="tab_1" value={1}/>
          <Tab label="get current callbacks" id="tab_2" value={2}/>
          <Tab label="manual for current hooks" id="tab_3" value={3}/>
          <Tab label="change state" id="tab_4" value={4}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}> Item One </TabPanel>
      <TabPanel value={value} index={1}> Item Two </TabPanel>
      <TabPanel value={value} index={2}> Item Three </TabPanel>
      <TabPanel value={value} index={3}> Item 4 </TabPanel>
      <TabPanel value={value} index={4}> Item 5 </TabPanel>
    </Box>
  );
}
