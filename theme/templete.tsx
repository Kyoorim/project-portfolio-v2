export const template = {
  mobile: {
    rows: "25% 75%",
    columns: "100% 100%",
    area: ` 
     "profileBar"
     "main"

     `,
  },
  tablet: {
    rows: "30% 68%",
    columns: "100% 100%",
    area: ` 
    "profileBar"
    "main"
     `,
  },
  desktop: {
    rows: "auto",
    columns: "30% auto",
    area: ` 
     "profileBar main"
     `,
  },
};

export const profileTemplate = {
  mobile: {
    rows: "auto",
    columns: "28% 27% auto",
    area: ` 
       "myphoto"
       "mysns"
       "myinfo"
  
       `,
  },
  tablet: {
    rows: "auto",
    columns: "40% 20% auto",
    area: ` 
    "myphoto"
    "mysns"
    "myinfo"
       `,
  },
  desktop: {
    rows: "40% 30% 30%",
    columns: "auto",
    area: ` 
       "myphoto" 
       "mysns" 
       "myinfo"
       `,
  },
};

export const mainTemplate = {
  mobile: {
    rows: "90% 10%",
    columns: "auto",
    area: ` 
    "playlist"
     "mainContainer"
     `,
  },
  tablet: {
    rows: "90% 10%",
    columns: "auto",
    area: ` 
    "playlist"
    "mainContainer"
     `,
  },
  desktop: {
    rows: "auto",
    columns: "80% auto",
    area: ` 
     "mainContainer playlist"
     `,
  },
};
