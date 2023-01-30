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
    columns: "25% auto",
    area: ` 
     "profileBar main"
     `,
  },
};

export const profileTemplate = {
  mobile: {
    rows: "70% auto",
    columns: "28% 27% auto",
    area: ` 
       "myphoto mysns myinfo"
       "myphoto mysns myinfo"
       "signin mysns myinfo"
       `,
  },
  tablet: {
    rows: "70% 30%",
    columns: "25% 25% auto",
    area: ` 
    "myphoto mysns myinfo"
    "signin signin myinfo"
       `,
  },
  desktop: {
    rows: "40% 20% 30% 10%",
    columns: "auto",
    area: ` 
       "myphoto" 
       "mysns" 
       "myinfo"
       "signin"
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
    columns: "70% 20% auto",
    area: ` 
     ". . mainContainer playlist"
     `,
  },
};
