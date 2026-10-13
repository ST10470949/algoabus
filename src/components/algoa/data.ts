export const places = ['Gqeberha CBD','Summerstrand','Walmer','Airport','Motherwell','Korsten','Veeplaas','Uitenhage','Kwadwesi','Newton Park','Humewood','Kwazakhele','Despatch'];
export const sampleRoutes = [
 {number:'12', name:'Summerstrand',from:'Gqeberha CBD',to:'Summerstrand',depot:'Perl',departure:'08:15',arrival:'08:42',duration:27,days:['Weekday','Saturday'],stops:['Gqeberha CBD','Humewood','Summerstrand']},
 {number:'5',name:'Walmer',from:'Gqeberha CBD',to:'Walmer',depot:'Bay',departure:'08:28',arrival:'09:02',duration:34,days:['Weekday','Saturday'],stops:['Gqeberha CBD','Walmer']},
 {number:'20',name:'Airport',from:'Gqeberha CBD',to:'Airport',depot:'Perl',departure:'08:45',arrival:'09:20',duration:35,days:['Weekday'],stops:['Gqeberha CBD','Walmer','Airport']},
 {number:'M1',name:'Motherwell connection',from:'Motherwell',to:'Korsten',depot:'Motherwell',departure:'09:00',arrival:'09:40',duration:40,days:['Weekday','Sunday','Public holiday'],stops:['Motherwell','Kwazakhele','Korsten']},
 {number:'U1',name:'Uitenhage connection',from:'Uitenhage',to:'Gqeberha CBD',depot:'Uitenhage',departure:'09:15',arrival:'10:05',duration:50,days:['Weekday','Saturday'],stops:['Uitenhage','Despatch','Gqeberha CBD']},
 {number:'K1',name:'Veeplaas connection',from:'Veeplaas',to:'Gqeberha CBD',depot:'Kwadwesi',departure:'09:30',arrival:'10:10',duration:40,days:['Weekday','Sunday','Public holiday'],stops:['Veeplaas','Kwadwesi','Korsten','Gqeberha CBD']},
];
export const depots = [
 {name:'Perl',address:'85 Perl Road, Korsten, Port Elizabeth',phone:'041 404 1200',hire:'041 404 1313',hours:'08:00–15:00'},
 {name:'Bay',address:'Struan Way, Struandale, Port Elizabeth',phone:'',hire:'041 404 1287',hours:'08:00–15:00'},
 {name:'Uitenhage',address:'Mitchell Street, Uitenhage',phone:'',hire:'041 992 4419',hours:'08:00–15:00'},
 {name:'Motherwell',address:'Maku Street, Motherwell, Port Elizabeth',phone:'',hire:'041 404 1246',hours:'09:30–14:30'},
 {name:'Kwadwesi',address:'Ziyabuya Centre, Kwadwesi, Port Elizabeth',phone:'',hire:'',hours:''},
];
export const managers = [
 {code:'M',names:'Ntsikelelo Mate; Wiseman Magaba',numbers:['041 404-1324','082 885 8105','041 404-1326','082 885 8107']},
 {code:'P',names:'Terence Mnyila',numbers:['041 404-1286','082 885 8103']},
 {code:'B',names:'Nomajwara Masekwana; Sivuyile Zondani',numbers:['041 404-1273','082 889 9018','041 404-1273','082 889 9018']},
 {code:'K',names:'Siziwe Nelson; Noxolo Runeli',numbers:['041 404-1271','082 885 8106','041 404-1269','063 6838 600']},
 {code:'U',names:'Nwabisa Nyongo',numbers:['041 404-1227','082 904 8377']},
];
export const tel = (number:string) => `tel:${number.replace(/[^\d+]/g,'')}`;
export const pageMeta = (title:string,description:string) => ({meta:[{title:`${title} | Algoa Bus Redesign Concept`},{name:'description',content:description},{property:'og:title',content:`${title} | Algoa Bus Redesign Concept`},{property:'og:description',content:description},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]});
export const days = ['Weekday','Saturday','Sunday','Public holiday'];
