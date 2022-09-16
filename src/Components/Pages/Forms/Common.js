export  const defaultData = {
   
   
    // Vehicle Details

     vRegistration: '',
     vApproxValueCar:'',
    vModification: [
        {By : "Yes"},
        { By : "No"}
    ],


    //Vehicle Usage
    vDatePurchase: '',
    vUseCarFor: [
        { key : 1 ,By : "Social domestic, pleasure, commuting(SDPC)"},
        { key : 2 ,By : "Social domestic, pleasure only(SDP)"},
        { key : 3 ,By : "SDPC and business use (proposer/spouse only"},
        { key : 4 ,By : "SDPC and business use (any named driver)"},
        { key : 5 ,By : "SDPC and business use (proposer only)"}
    ],
    vKeptTheDay: 
   [
        { key : 1 ,By : "At Home"},
        { key : 2 ,By : "Office or Factory Car Park"},
        { key : 3 ,By : "Open public car park"},
        { key : 4 ,By : "Secure public car park"},
        { key : 5 ,By : "Steet away from home"}

   
    ],
    vKeptOvernight: 
    [
         { key : 1 ,By : "Garaged"},
         { key : 2 ,By : "Public Road"},
         { key : 3 ,By : "Drive"},
         { key : 4 ,By : "Private Properties"},
         { key : 5 ,By : "Car Park"},
         { key : 6 ,By : "Locked Compound"}
 
    
     ],

     vKeptSameAddress:[
        { key : 1 ,By : "Yes"},
        { key : 2 ,By : "No"}
    ],

    VRegKepper:   [
        { key : 1 ,By : "Policy Holder"},
        { key : 2 ,By : "Spouse"},
        { key : 3 ,By : "Other Driver"},
        { key : 4 ,By : "Parent"},
        { key : 5 ,By : "Common Law"},
        { key : 6 ,By : "Private Leased"},
        { key : 7 ,By : "Company"},
        { key : 8 ,By : "Company(Leased)"},
        { key : 9 ,By : "Limited Compony"},
        { key : 10 ,By : "Society Club"}

    ],

    vLegalOwner:[
        { key : 1 ,By : "Policy Holder"},
        { key : 2 ,By : "Spouse"},
        { key : 3 ,By : "Other Driver"},
        { key : 4 ,By : "Parent"},
        { key : 5 ,By : "Common Law"},
        { key : 6 ,By : "Private Leased"},
        { key : 7 ,By : "Company"},
        { key : 8 ,By : "Company(Leased)"},
        { key : 9 ,By : "Limited Compony"},
        { key : 10 ,By : "Society Club"}

    ],
    vAnnualmileage: "",
    vTypeCover: [
        { key : 1 ,By : "Comprehensive"},
        { key : 2 ,By : "The Party Fire And Theft"},
        { key : 3 ,By : "Third Party Only"},
      
    ],
    vAnyNoDiscount:[
        { key : 1 ,By : "No NCD"},
        { key : 2 ,By : "1 Year"},
        { key : 3 ,By : "2 Years"},
        { key : 4 ,By : "3 Years"},
        { key : 5 ,By : "4 Years"},
        { key : 7 ,By : "5 Yeas"},
        { key : 8 ,By : "6 Years"},
        { key : 9 ,By : "7 Years"},
        { key : 10 ,By : "8 Years"},
        { key : 11 ,By : "9 Years"},
        { key : 12 ,By : "10 Years"},
        { key : 13 ,By : "11 Years"},
        { key : 14,By : "12 Years"},
        { key : 15,By : "13 Yeas"},
        { key : 16 ,By : "14 Years"},
        { key : 17 ,By : "15 Years"},

    ],
    
    vNCDEarned:[
        { key : 1 ,By : "Yes"},
        { key : 2 ,By : "NO, earned in the European Union",},
        { key : 2 ,By : "NO, earned in the Rest Of The World",}
    ],

    vProtectNCD:[
        { key : 1 ,By : "Yes"},
        { key : 2 ,By : "No"}
    ],
    vVoluntaryAccess:[
        { key : 1 ,By : "None"},
        { key : 2 ,By : "£ 50 "},
        { key : 3 ,By : "£ 100 "},
        { key : 4 ,By : "£ 150 "},
        { key : 5 ,By : "£ 200 "},
        { key : 7 ,By : "£ 250 "},
        { key : 8 ,By : "£ 300 "},
        { key : 9 ,By : "£ 350 "},
        { key : 10 ,By : "£ 400 "},
        { key : 11 ,By : "£ 450 "},
        { key : 12 ,By : "£ 500 "},
        { key : 13 ,By : "£ 550 "},
        { key : 14,By : "£ 650 "},
        { key : 15,By : "£ 750 "},
        { key : 16 ,By : "£ 1000 "},

    ],
    vPayInsu:[
        { key : 1 ,By : "Monthly",},
        { key : 2 ,By : "In-Full",},
    ],
    vPolicyStart: "",

    
 //personal before
 pHearUs: [
    {key:1 , By: "Walk In"},
    {key:2 , By: "Word Of Mouth"},
    {key:3 , By: "Any Customer"},
    {key:4 , By: "Friends/Family"}
],
pReferrer:"",
pAnyDriver: [
    { key : 1 ,By : "Yes"},
    { key : 2 ,By : "No"}
],


//personal start

pTitle:"",
pFirstName: "",
pLastName: "",
pBrith: "",
PHousNam: "",
pAddress: "",
pPostCode: "",
pMaStatus: [
    { key : 1 ,By : "Single",},
    { key : 2 ,By : "Married",}
],
pEmStatus: "",
pOcuupation: "",
pBusiness: "",
pHomeowner: [
    { key : 1 ,By : "Yes"},
    { key : 2 ,By : "No"}
],
pAnyChild: [
    { key : 1 ,By : "Yes"},
    { key : 2 ,By : "No"}
],

 //personal contuct start

 cEmail: '',
 cMoble: '',
 cTelephone:'',
cContact: [
    { key : 1 ,By : "email",},
    { key : 2 ,By : "phone",}
],



    //Driving History

    dTypeLicense: [
        { key : 1 ,By : "Full UK Manual"},
        { key : 2 ,By : "Full UK Automatic"},
        { key : 3 ,By : "Provisional UK"},
        { key : 4 ,By : "Full Euro EEC"},
        { key : 5 ,By : "Full UK-Pass Plus"},
        { key : 6 ,By : "Full UK-IAM"},
        { key : 7 ,By : "International Licence( non-exchangeable)"},
        { key : 8 ,By : "International Licence( exchangeable)"},

    ],
    dPeriodLicense: [
        { key : 1 ,By : "Less then 1 year"},
        { key : 2 ,By : "1 Year"},
        { key : 3 ,By : "2 Years"},
        { key : 4 ,By : "3 Years"},
        { key : 5 ,By : "4 Years"},
        { key : 6 ,By : "5 Years"},
        { key : 7 ,By : "6 Years"},
        { key : 8 ,By : "7 Years"},
        { key : 9 ,By : "8 Years"},
        { key : 10 ,By : "9 Years"},
        { key : 11 ,By : "10 Years"},
        { key : 12 ,By : "11 Years"},
        { key : 13 ,By : "12 Years"},
        { key : 14,By : "13 Years"},
        { key : 15 ,By : "14 Years"},
        { key : 16 ,By : "15 Years"},
        { key : 17 ,By : "16 Years"},
        { key : 18 ,By : "17 Years"},
        { key : 19,By : "18 Years"},

    ],
    dYearsLicenceObtained:'',
    d16DeivingLicence: '',
    dMedicalConditon: [
        { key : 1 ,By : "No"},
        { key : 2 ,By : "DVLA aware -No restrictions"},
        { key : 3 ,By : "DVLA aware - 1 year restricted Licence"},
        { key : 4 ,By : "DVLA aware - 2 year restricted Licence"},
        { key : 5 ,By : "DVLA aware - 3 year restricted Licence"},
        { key : 6 ,By : "DVLA Unaware"},

    ],
    dAddDrivingqualify: [
        { key : 1 ,By : "Yes"},
        { key : 2 ,By : "No"}
    ],
    dDateQualified: '',
    dWhreBornUk:[
        { key : 1 ,By : "Yes"},
        { key : 2 ,By : "No"}
    ],
    dLastUkResident:'',
    dUseOtherVehicle:[
        { key : 1 ,By : "No Access to any other vehicle"},
        { key : 2 ,By : "Own another van or car"},
        { key : 3 ,By : "Named driver on other van or car"},
        { key : 4 ,By : "Have use of another car"},
        { key : 5 ,By : "Company car (including personal use)"},
        { key : 6 ,By : "Company car (excluding personal use)"},
    
    ],
    ayAnyAccident: [
        { key : 1 ,By : "Yes"},
        { key : 2 ,By : "No"}
    ],
    ayMotorConviction: [
        { key : 1 ,By : "Yes"},
        { key : 2 ,By : "No"}
    ],
    
    dNonMoorCriminal:[
        { key : 1 ,By : "Yes"},
        { key : 2 ,By : "No"}
    ],
    dAnyMotorAccident:
    [
        { key : 1 ,By : "Yes"},
        { key : 2 ,By : "No"}
    ],
    // [
    //     { key : 1 ,By : "Yes"},
    //     { key : 2 ,By : "No"}
    // ],

    // deType One
deType :[
    { key : 1 ,By : "Accident"},
    { key : 2 ,By : "Explosion"},
    { key : 3 ,By : "Fire Damage"},
    { key : 4 ,By : "Lightnin Damage"},
    { key : 5 ,By : "Riot Damage"},
    { key : 6 ,By : "Theft Accessories"},
    { key : 7 ,By : "Theft Personal Effects"},
    { key : 8 ,By : "Theft Sound Effects"},
    { key : 9 ,By : "Theft of Vehicles"},
    { key : 10 ,By : "Theft Related Damage"},
    { key : 11 ,By : "WideScreen Only"},
],
deDate: '',
deDamage: [
    { key : 1 ,By : "Damaged - Amount Known"},
    { key : 2 ,By : "No Damage"},
    { key : 3 ,By : "UnknownWrite-Off"},
],
deCost:'',

deFaults:[
    { key : 1 ,By : "Both Parties"},
    { key : 2 ,By : "Othe Parties"},
    { key : 3 ,By : "Our Driver"},
    { key : 4 ,By : "Unoccupied Vehicle"},

],
deInjuries :[
    { key : 1 ,By : "Yes"},
    { key : 2 ,By : "No"}
],


//deType  two


deType2 :[
    { key : 1 ,By : "Accident"},
    { key : 2 ,By : "Explosion"},
    { key : 3 ,By : "Fire Damage"},
    { key : 4 ,By : "Lightnin Damage"},
    { key : 5 ,By : "Riot Damage"},
    { key : 6 ,By : "Theft Accessories"},
    { key : 7 ,By : "Theft Personal Effects"},
    { key : 8 ,By : "Theft Sound Effects"},
    { key : 9 ,By : "Theft of Vehicles"},
    { key : 10 ,By : "Theft Related Damage"},
    { key : 11 ,By : "WideScreen Only"},
],
deDate2: '',
deDamage2: [
    { key : 1 ,By : "Damaged - Amount Known"},
    { key : 2 ,By : "No Damage"},
    { key : 3 ,By : "UnknownWrite-Off"},
],
deCost2:'',

deFaults2:[
    { key : 1 ,By : "Both Parties"},
    { key : 2 ,By : "Othe Parties"},
    { key : 3 ,By : "Our Driver"},
    { key : 4 ,By : "Unoccupied Vehicle"},

],
deInjuries2 :[
    { key : 1 ,By : "Yes"},
    { key : 2 ,By : "No"}
],


// deType three
deType3 :[
    { key : 1 ,By : "Accident"},
    { key : 2 ,By : "Explosion"},
    { key : 3 ,By : "Fire Damage"},
    { key : 4 ,By : "Lightnin Damage"},
    { key : 5 ,By : "Riot Damage"},
    { key : 6 ,By : "Theft Accessories"},
    { key : 7 ,By : "Theft Personal Effects"},
    { key : 8 ,By : "Theft Sound Effects"},
    { key : 9 ,By : "Theft of Vehicles"},
    { key : 10 ,By : "Theft Related Damage"},
    { key : 11 ,By : "WideScreen Only"},
],
deDate3: '',
deDamage3: [
    { key : 1 ,By : "Damaged - Amount Known"},
    { key : 2 ,By : "No Damage"},
    { key : 3 ,By : "UnknownWrite-Off"},
],
deCost3:'',

deFaults3:[
    { key : 1 ,By : "Both Parties"},
    { key : 2 ,By : "Othe Parties"},
    { key : 3 ,By : "Our Driver"},
    { key : 4 ,By : "Unoccupied Vehicle"},

],
deInjuries3 :[
    { key : 1 ,By : "Yes"},
    { key : 2 ,By : "No"}
],


    dMonitorigOffences:[
        { key : 1 ,By : "Yes"},
        { key : 2 ,By : "No"}
    ],




    deConvection :[
        { key : 1 ,By : "AC10"},
        { key : 2 ,By : "AC20"},
        { key : 3 ,By : "AC30"},
        { key : 4 ,By : "AC99"},
        { key : 5 ,By : "BA10"},
        { key : 6 ,By : "BA20"},
        { key : 7 ,By : "BA30"},
        { key : 8 ,By : "BA99"},
        { key : 9 ,By : "CD10"},
        { key : 10 ,By : "CD20"},
        { key : 11 ,By : "CD30"},
        { key : 12 ,By : "CD40"},
        { key : 14 ,By : "CD50"},
        { key : 14 ,By : "CD60"},
        { key : 15 ,By : "CD70"},
        { key : 16 ,By : "CD80"},
        { key : 17 ,By : "CD90"},
        { key : 18 ,By : "CD99"},
        { key : 19 ,By : "CU10"},
        { key : 20,By : "CU20"},
        { key : 21 ,By : "CU30"},
        { key : 22 ,By : "CU40"},
        { key : 23 ,By : "CU60"},
        { key : 24 ,By : "CU70"},
        { key : 26,By : "CU80"},
        { key : 26,By : "DD10"},
        { key : 17,By : "DD20"},
        { key : 28,By : "DD30"},
        { key : 29,By : "DD40"},
        { key : 30 ,By : "DD60"},
        { key : 31 ,By : "DD70"},
        { key : 32,By : "DD80"},
        { key : 33,By : "DR10"},
        { key : 34 ,By : "DR20"},
        { key : 35,By : "DR30"},
        { key : 36 ,By : "DR40"},
        { key : 37 ,By : "DR60"},
        { key : 38 ,By : "DR70"},
        { key : 39 ,By : "DR80"},
        { key : 40 ,By : "IN10"},
        { key : 41 ,By : "LC10"},
        { key : 42,By : "LC20"},
        { key : 43,By : "LC30"},
        { key : 44 ,By : "LC40"},
        { key : 45 ,By : "LC60"},
        { key : 46 ,By : "MS10"},
        { key : 47 ,By : "MS20"},
        { key : 48 ,By : "MS30"},
        { key : 49 ,By : "MS40"},
        { key : 50 ,By : "MS50"},
        { key : 51,By : "MS60"},
        { key : 52 ,By : "MS70"},
        { key : 53 ,By : "MS80"},
        { key : 54 ,By : "MW10"},
        { key : 55 ,By : "PC10"},
        { key : 56 ,By : "PC20"},
        { key : 57 ,By : "PC30"},
        { key : 58 ,By : "PL10"},
        { key : 59 ,By : "PL20"},
        { key : 60 ,By : "PL30"},
        { key : 61 ,By : "PL40"},
        { key : 62 ,By : "PL50"},
        { key : 63 ,By : "SP10"},
        { key : 64 ,By : "SP20"},
        { key : 65 ,By : "Sp30"},
        { key : 66 ,By : "SP40"},
        { key : 67 ,By : "SP50"},
        { key : 68 ,By : "SAC"},
        { key : 69 ,By : "TS10"},
        { key : 70 ,By : "TS20"},
        { key : 71 ,By : "TS30"},
        { key : 72 ,By : "TS40"},
        { key : 73 ,By : "TS50"},
        { key : 74 ,By : "TS60"},
        { key : 75 ,By : "TS70"},
        { key : 76 ,By : "TS99"},
        { key : 77 ,By : "UT10"},
        { key : 78,By : "UT20"},
        { key : 79 ,By : "UT30"},
        { key : 80 ,By : "UT40"},
        { key : 81 ,By : "UT50"},

        
       
    ],
    deDateConvection: "",
    dePoints: [
        { key : 1 ,By : "1"},
        { key : 2 ,By : "2"},
        { key : 3 ,By : "3"},
        { key : 4 ,By : "4"},
        { key : 5 ,By : "5"},
        { key : 6 ,By : "6"},
        { key : 7 ,By : "7"},
        { key : 8 ,By : "8"},
        { key : 9 ,By : "9"},
        { key : 10 ,By : "10"},
        { key : 11 ,By : "11"},
        { key : 12 ,By : "None"},
    ],

    deFine: "",
    deBan : "",

    
    // extra motor conviction 2
    deConvection2 :[
        { key : 1 ,By : "AC10"},
        { key : 2 ,By : "AC20"},
        { key : 3 ,By : "AC30"},
        { key : 4 ,By : "AC99"},
        { key : 5 ,By : "BA10"},
        { key : 6 ,By : "BA20"},
        { key : 7 ,By : "BA30"},
        { key : 8 ,By : "BA99"},
        { key : 9 ,By : "CD10"},
        { key : 10 ,By : "CD20"},
        { key : 11 ,By : "CD30"},
        { key : 12 ,By : "CD40"},
        { key : 14 ,By : "CD50"},
        { key : 14 ,By : "CD60"},
        { key : 15 ,By : "CD70"},
        { key : 16 ,By : "CD80"},
        { key : 17 ,By : "CD90"},
        { key : 18 ,By : "CD99"},
        { key : 19 ,By : "CU10"},
        { key : 20,By : "CU20"},
        { key : 21 ,By : "CU30"},
        { key : 22 ,By : "CU40"},
        { key : 23 ,By : "CU60"},
        { key : 24 ,By : "CU70"},
        { key : 26,By : "CU80"},
        { key : 26,By : "DD10"},
        { key : 17,By : "DD20"},
        { key : 28,By : "DD30"},
        { key : 29,By : "DD40"},
        { key : 30 ,By : "DD60"},
        { key : 31 ,By : "DD70"},
        { key : 32,By : "DD80"},
        { key : 33,By : "DR10"},
        { key : 34 ,By : "DR20"},
        { key : 35,By : "DR30"},
        { key : 36 ,By : "DR40"},
        { key : 37 ,By : "DR60"},
        { key : 38 ,By : "DR70"},
        { key : 39 ,By : "DR80"},
        { key : 40 ,By : "IN10"},
        { key : 41 ,By : "LC10"},
        { key : 42,By : "LC20"},
        { key : 43,By : "LC30"},
        { key : 44 ,By : "LC40"},
        { key : 45 ,By : "LC60"},
        { key : 46 ,By : "MS10"},
        { key : 47 ,By : "MS20"},
        { key : 48 ,By : "MS30"},
        { key : 49 ,By : "MS40"},
        { key : 50 ,By : "MS50"},
        { key : 51,By : "MS60"},
        { key : 52 ,By : "MS70"},
        { key : 53 ,By : "MS80"},
        { key : 54 ,By : "MW10"},
        { key : 55 ,By : "PC10"},
        { key : 56 ,By : "PC20"},
        { key : 57 ,By : "PC30"},
        { key : 58 ,By : "PL10"},
        { key : 59 ,By : "PL20"},
        { key : 60 ,By : "PL30"},
        { key : 61 ,By : "PL40"},
        { key : 62 ,By : "PL50"},
        { key : 63 ,By : "SP10"},
        { key : 64 ,By : "SP20"},
        { key : 65 ,By : "Sp30"},
        { key : 66 ,By : "SP40"},
        { key : 67 ,By : "SP50"},
        { key : 68 ,By : "SAC"},
        { key : 69 ,By : "TS10"},
        { key : 70 ,By : "TS20"},
        { key : 71 ,By : "TS30"},
        { key : 72 ,By : "TS40"},
        { key : 73 ,By : "TS50"},
        { key : 74 ,By : "TS60"},
        { key : 75 ,By : "TS70"},
        { key : 76 ,By : "TS99"},
        { key : 77 ,By : "UT10"},
        { key : 78,By : "UT20"},
        { key : 79 ,By : "UT30"},
        { key : 80 ,By : "UT40"},
        { key : 81 ,By : "UT50"},
        
       
    ],
    deDateConvection2: "",
    dePoints2: [
        { key : 1 ,By : "1"},
        { key : 2 ,By : "2"},
        { key : 3 ,By : "3"},
        { key : 4 ,By : "4"},
        { key : 5 ,By : "5"},
        { key : 6 ,By : "6"},
        { key : 7 ,By : "7"},
        { key : 8 ,By : "8"},
        { key : 9 ,By : "9"},
        { key : 10 ,By : "10"},
        { key : 11 ,By : "11"},
        { key : 12 ,By : "None"},
    ],

    deFine2: "",
    deBan2 : "",

    // extra motor coviction 3
    deConvection3 :[
        { key : 1 ,By : "AC10"},
        { key : 2 ,By : "AC20"},
        { key : 3 ,By : "AC30"},
        { key : 4 ,By : "AC99"},
        { key : 5 ,By : "BA10"},
        { key : 6 ,By : "BA20"},
        { key : 7 ,By : "BA30"},
        { key : 8 ,By : "BA99"},
        { key : 9 ,By : "CD10"},
        { key : 10 ,By : "CD20"},
        { key : 11 ,By : "CD30"},
        { key : 12 ,By : "CD40"},
        { key : 14 ,By : "CD50"},
        { key : 14 ,By : "CD60"},
        { key : 15 ,By : "CD70"},
        { key : 16 ,By : "CD80"},
        { key : 17 ,By : "CD90"},
        { key : 18 ,By : "CD99"},
        { key : 19 ,By : "CU10"},
        { key : 20,By : "CU20"},
        { key : 21 ,By : "CU30"},
        { key : 22 ,By : "CU40"},
        { key : 23 ,By : "CU60"},
        { key : 24 ,By : "CU70"},
        { key : 26,By : "CU80"},
        { key : 26,By : "DD10"},
        { key : 17,By : "DD20"},
        { key : 28,By : "DD30"},
        { key : 29,By : "DD40"},
        { key : 30 ,By : "DD60"},
        { key : 31 ,By : "DD70"},
        { key : 32,By : "DD80"},
        { key : 33,By : "DR10"},
        { key : 34 ,By : "DR20"},
        { key : 35,By : "DR30"},
        { key : 36 ,By : "DR40"},
        { key : 37 ,By : "DR60"},
        { key : 38 ,By : "DR70"},
        { key : 39 ,By : "DR80"},
        { key : 40 ,By : "IN10"},
        { key : 41 ,By : "LC10"},
        { key : 42,By : "LC20"},
        { key : 43,By : "LC30"},
        { key : 44 ,By : "LC40"},
        { key : 45 ,By : "LC60"},
        { key : 46 ,By : "MS10"},
        { key : 47 ,By : "MS20"},
        { key : 48 ,By : "MS30"},
        { key : 49 ,By : "MS40"},
        { key : 50 ,By : "MS50"},
        { key : 51,By : "MS60"},
        { key : 52 ,By : "MS70"},
        { key : 53 ,By : "MS80"},
        { key : 54 ,By : "MW10"},
        { key : 55 ,By : "PC10"},
        { key : 56 ,By : "PC20"},
        { key : 57 ,By : "PC30"},
        { key : 58 ,By : "PL10"},
        { key : 59 ,By : "PL20"},
        { key : 60 ,By : "PL30"},
        { key : 61 ,By : "PL40"},
        { key : 62 ,By : "PL50"},
        { key : 63 ,By : "SP10"},
        { key : 64 ,By : "SP20"},
        { key : 65 ,By : "Sp30"},
        { key : 66 ,By : "SP40"},
        { key : 67 ,By : "SP50"},
        { key : 68 ,By : "SAC"},
        { key : 69 ,By : "TS10"},
        { key : 70 ,By : "TS20"},
        { key : 71 ,By : "TS30"},
        { key : 72 ,By : "TS40"},
        { key : 73 ,By : "TS50"},
        { key : 74 ,By : "TS60"},
        { key : 75 ,By : "TS70"},
        { key : 76 ,By : "TS99"},
        { key : 77 ,By : "UT10"},
        { key : 78,By : "UT20"},
        { key : 79 ,By : "UT30"},
        { key : 80 ,By : "UT40"},
        { key : 81 ,By : "UT50"},

        
       
    ],
    deDateConvection3: "",
    dePoints3: [
        { key : 1 ,By : "1"},
        { key : 2 ,By : "2"},
        { key : 3 ,By : "3"},
        { key : 4 ,By : "4"},
        { key : 5 ,By : "5"},
        { key : 6 ,By : "6"},
        { key : 7 ,By : "7"},
        { key : 8 ,By : "8"},
        { key : 9 ,By : "9"},
        { key : 10 ,By : "10"},
        { key : 11 ,By : "11"},
        { key : 12 ,By : "None"},
    ],

    deFine3: "",
    deBan3 : "",






    //Additional Drivers


    //  step 4

    adAddAnoterDriver: [
        { key : 1 ,By : "Yes"},
        { key : 2 ,By : "No"}
    ],
    adAddComents: '',
    adGiveConsentTerm: [
        { key : 1 ,By : "Yes"},
        { key : 2 ,By : "No"}
    ],


    //Addional Driver Yes
 ayTitle :  [
    { key : 1 ,By : "Mr"},
    { key : 2 ,By : "Miss"},
    { key : 2 ,By : "Mrs"}
],

ayName : '',
aySurName: '',
ayRealation: [
    { key : 1 ,By : "Spouse"},
    { key : 2 ,By : "Civil Partner"},
    { key : 3 ,By : "Son/Daughter"},
    { key : 4 ,By : "Brother/Sister"},
    { key : 5 ,By : "Common Law Partner"},
    { key : 6 ,By : "Parent"},
    { key :7 ,By : "Our Family"},
    { key : 8 ,By : "Employee"},
    { key : 9 ,By : "Employer"},
    { key : 10 ,By : "Business Partner"},
],
ayBirthDate: '',
ayMarital:[
    { key : 1 ,By : "Single",},
    { key : 2 ,By : "Married",}
],
ayEmployStatus: [
    { key : 1 ,By : "Employed"},
    { key : 2 ,By : "Unemployed"},
    { key : 3 ,By : "Self Employed"},
    { key : 4 ,By : "House Person"},
    { key : 5 ,By : "Education"},
    { key : 6 ,By : "Retired"},
  
],
 ayEmployedOccupation: '',
 ayEmployedBusiness: '',
 ayTypeLicence : [
    { key : 1 ,By : "Full UK Manual"},
    { key : 2 ,By : "Full UK Automatic"},
    { key : 3 ,By : "Provisional UK"},
    { key : 4 ,By : "Full Euro EEC"},
    { key : 5 ,By : "Full UK-Pass Plus"},
    { key : 6 ,By : "Full UK-IAM"},
    { key : 7 ,By : "International Licence( non-exchangeable)"},
    { key : 8 ,By : "International Licence( exchangeable)"},

],

ayPeriodLicence: [
    { key : 1 ,By : "Less then 1 year"},
    { key : 2 ,By : "1 Year"},
    { key : 3 ,By : "2 Years"},
    { key : 4 ,By : "3 Years"},
    { key : 5 ,By : "4 Years"},
    { key : 6 ,By : "5 Years"},
    { key : 7 ,By : "6 Years"},
    { key : 8 ,By : "7 Years"},
    { key : 9 ,By : "8 Years"},
    { key : 10 ,By : "9 Years"},
    { key : 11 ,By : "10 Years"},
    { key : 12 ,By : "11 Years"},
    { key : 13 ,By : "12 Years"},
    { key : 14,By : "13 Years"},
    { key : 15 ,By : "14 Years"},
    { key : 16 ,By : "15 Years"},
    { key : 17 ,By : "16 Years"},
    { key : 18 ,By : "17 Years"},
    { key : 19,By : "18 Years"},

],

ay3yearLicenceObtain: '',
ayDrivingLicence: '',
ayMedicalCondition:
[
    { key : 1 ,By : "No"},
    { key : 2 ,By : "DVLA aware -No restrictions"},
    { key : 3 ,By : "DVLA aware - 1 year restricted Licence"},
    { key : 4 ,By : "DVLA aware - 2 year restricted Licence"},
    { key : 5 ,By : "DVLA aware - 3 year restricted Licence"},
    { key : 6 ,By : "DVLA Unaware"},

],

ayBorkUk: [
    { key : 1 ,By : "Yes"},
    { key : 2 ,By : "No"}
],


ayWhereResidentUk: '',

ayUseOtherVehicle:[
    { key : 1 ,By : "No Access to any other vehicle"},
    { key : 2 ,By : "Own another van or car"},
    { key : 3 ,By : "Named driver on other van or car"},
    { key : 4 ,By : "Have use of another car"},
    { key : 5 ,By : "Company car (including personal use)"},
    { key : 6 ,By : "Company car (excluding personal use)"},

],
ayMotoAciedent:[
    { key : 1 ,By : "Yes"},
    { key : 2 ,By : "No"}
],
ayMotorDisqualification: [
    { key : 1 ,By : "Yes"},
    { key : 2 ,By : "No"}
],



  // aydeType One
  aydeType :[
    { key : 1 ,By : "Acciaydent"},
    { key : 2 ,By : "Explosion"},
    { key : 3 ,By : "Fire Damage"},
    { key : 4 ,By : "Lightnin Damage"},
    { key : 5 ,By : "Riot Damage"},
    { key : 6 ,By : "Theft Accessories"},
    { key : 7 ,By : "Theft Personal Effects"},
    { key : 8 ,By : "Theft Sound Effects"},
    { key : 9 ,By : "Theft of Vehicles"},
    { key : 10 ,By : "Theft Related Damage"},
    { key : 11 ,By : "WiaydeScreen Only"},
],
aydeDate: '',
aydeDamage: [
    { key : 1 ,By : "Damaged - Amount Known"},
    { key : 2 ,By : "No Damage"},
    { key : 3 ,By : "UnknownWrite-Off"},
],
aydeCost:'',

aydeFaults:[
    { key : 1 ,By : "Both Parties"},
    { key : 2 ,By : "Othe Parties"},
    { key : 3 ,By : "Our Driver"},
    { key : 4 ,By : "Unoccupied Vehicle"},

],
aydeInjuries :[
    { key : 1 ,By : "Yes"},
    { key : 2 ,By : "No"}
],


//aydeType  two


aydeType2 :[
    { key : 1 ,By : "Acciaydent"},
    { key : 2 ,By : "Explosion"},
    { key : 3 ,By : "Fire Damage"},
    { key : 4 ,By : "Lightnin Damage"},
    { key : 5 ,By : "Riot Damage"},
    { key : 6 ,By : "Theft Accessories"},
    { key : 7 ,By : "Theft Personal Effects"},
    { key : 8 ,By : "Theft Sound Effects"},
    { key : 9 ,By : "Theft of Vehicles"},
    { key : 10 ,By : "Theft Related Damage"},
    { key : 11 ,By : "WiaydeScreen Only"},
],
aydeDate2: '',
aydeDamage2: [
    { key : 1 ,By : "Damaged - Amount Known"},
    { key : 2 ,By : "No Damage"},
    { key : 3 ,By : "UnknownWrite-Off"},
],
aydeCost2:'',

aydeFaults2:[
    { key : 1 ,By : "Both Parties"},
    { key : 2 ,By : "Othe Parties"},
    { key : 3 ,By : "Our Driver"},
    { key : 4 ,By : "Unoccupied Vehicle"},

],
aydeInjuries2 :[
    { key : 1 ,By : "Yes"},
    { key : 2 ,By : "No"}
],


// aydeType three
aydeType3 :[
    { key : 1 ,By : "Acciaydent"},
    { key : 2 ,By : "Explosion"},
    { key : 3 ,By : "Fire Damage"},
    { key : 4 ,By : "Lightnin Damage"},
    { key : 5 ,By : "Riot Damage"},
    { key : 6 ,By : "Theft Accessories"},
    { key : 7 ,By : "Theft Personal Effects"},
    { key : 8 ,By : "Theft Sound Effects"},
    { key : 9 ,By : "Theft of Vehicles"},
    { key : 10 ,By : "Theft Related Damage"},
    { key : 11 ,By : "WiaydeScreen Only"},
],
aydeDate3: '',
aydeDamage3: [
    { key : 1 ,By : "Damaged - Amount Known"},
    { key : 2 ,By : "No Damage"},
    { key : 3 ,By : "UnknownWrite-Off"},
],
aydeCost3:'',

aydeFaults3:[
    { key : 1 ,By : "Both Parties"},
    { key : 2 ,By : "Othe Parties"},
    { key : 3 ,By : "Our Driver"},
    { key : 4 ,By : "Unoccupied Vehicle"},

],
aydeInjuries3 :[
    { key : 1 ,By : "Yes"},
    { key : 2 ,By : "No"}
],


//Any motor convictions fixed penalitst or disqualification in the last 5 years? step 4

aydeConvection :[
    { key : 1 ,By : "AC10"},
    { key : 2 ,By : "AC20"},
    { key : 3 ,By : "AC30"},
    { key : 4 ,By : "AC99"},
    { key : 5 ,By : "BA10"},
    { key : 6 ,By : "BA20"},
    { key : 7 ,By : "BA30"},
    { key : 8 ,By : "BA99"},
    { key : 9 ,By : "CD10"},
    { key : 10 ,By : "CD20"},
    { key : 11 ,By : "CD30"},
    { key : 12 ,By : "CD40"},
    { key : 14 ,By : "CD50"},
    { key : 14 ,By : "CD60"},
    { key : 15 ,By : "CD70"},
    { key : 16 ,By : "CD80"},
    { key : 17 ,By : "CD90"},
    { key : 18 ,By : "CD99"},
    { key : 19 ,By : "CU10"},
    { key : 20,By : "CU20"},
    { key : 21 ,By : "CU30"},
    { key : 22 ,By : "CU40"},
    { key : 23 ,By : "CU60"},
    { key : 24 ,By : "CU70"},
    { key : 26,By : "CU80"},
    { key : 26,By : "DD10"},
    { key : 17,By : "DD20"},
    { key : 28,By : "DD30"},
    { key : 29,By : "DD40"},
    { key : 30 ,By : "DD60"},
    { key : 31 ,By : "DD70"},
    { key : 32,By : "DD80"},
    { key : 33,By : "DR10"},
    { key : 34 ,By : "DR20"},
    { key : 35,By : "DR30"},
    { key : 36 ,By : "DR40"},
    { key : 37 ,By : "DR60"},
    { key : 38 ,By : "DR70"},
    { key : 39 ,By : "DR80"},
    { key : 40 ,By : "IN10"},
    { key : 41 ,By : "LC10"},
    { key : 42,By : "LC20"},
    { key : 43,By : "LC30"},
    { key : 44 ,By : "LC40"},
    { key : 45 ,By : "LC60"},
    { key : 46 ,By : "MS10"},
    { key : 47 ,By : "MS20"},
    { key : 48 ,By : "MS30"},
    { key : 49 ,By : "MS40"},
    { key : 50 ,By : "MS50"},
    { key : 51,By : "MS60"},
    { key : 52 ,By : "MS70"},
    { key : 53 ,By : "MS80"},
    { key : 54 ,By : "MW10"},
    { key : 55 ,By : "PC10"},
    { key : 56 ,By : "PC20"},
    { key : 57 ,By : "PC30"},
    { key : 58 ,By : "PL10"},
    { key : 59 ,By : "PL20"},
    { key : 60 ,By : "PL30"},
    { key : 61 ,By : "PL40"},
    { key : 62 ,By : "PL50"},
    { key : 63 ,By : "SP10"},
    { key : 64 ,By : "SP20"},
    { key : 65 ,By : "Sp30"},
    { key : 66 ,By : "SP40"},
    { key : 67 ,By : "SP50"},
    { key : 68 ,By : "SAC"},
    { key : 69 ,By : "TS10"},
    { key : 70 ,By : "TS20"},
    { key : 71 ,By : "TS30"},
    { key : 72 ,By : "TS40"},
    { key : 73 ,By : "TS50"},
    { key : 74 ,By : "TS60"},
    { key : 75 ,By : "TS70"},
    { key : 76 ,By : "TS99"},
    { key : 77 ,By : "UT10"},
    { key : 78,By : "UT20"},
    { key : 79 ,By : "UT30"},
    { key : 80 ,By : "UT40"},
    { key : 81 ,By : "UT50"},

    
   
],
aydeDateConvection: "",
aydePoints: [
    { key : 1 ,By : "1"},
    { key : 2 ,By : "2"},
    { key : 3 ,By : "3"},
    { key : 4 ,By : "4"},
    { key : 5 ,By : "5"},
    { key : 6 ,By : "6"},
    { key : 7 ,By : "7"},
    { key : 8 ,By : "8"},
    { key : 9 ,By : "9"},
    { key : 10 ,By : "10"},
    { key : 11 ,By : "11"},
    { key : 12 ,By : "None"},
],

aydeFine: "",
aydeBan : "",


// extra motor conviction 2
aydeConvection2 :[
    { key : 1 ,By : "AC10"},
    { key : 2 ,By : "AC20"},
    { key : 3 ,By : "AC30"},
    { key : 4 ,By : "AC99"},
    { key : 5 ,By : "BA10"},
    { key : 6 ,By : "BA20"},
    { key : 7 ,By : "BA30"},
    { key : 8 ,By : "BA99"},
    { key : 9 ,By : "CD10"},
    { key : 10 ,By : "CD20"},
    { key : 11 ,By : "CD30"},
    { key : 12 ,By : "CD40"},
    { key : 14 ,By : "CD50"},
    { key : 14 ,By : "CD60"},
    { key : 15 ,By : "CD70"},
    { key : 16 ,By : "CD80"},
    { key : 17 ,By : "CD90"},
    { key : 18 ,By : "CD99"},
    { key : 19 ,By : "CU10"},
    { key : 20,By : "CU20"},
    { key : 21 ,By : "CU30"},
    { key : 22 ,By : "CU40"},
    { key : 23 ,By : "CU60"},
    { key : 24 ,By : "CU70"},
    { key : 26,By : "CU80"},
    { key : 26,By : "DD10"},
    { key : 17,By : "DD20"},
    { key : 28,By : "DD30"},
    { key : 29,By : "DD40"},
    { key : 30 ,By : "DD60"},
    { key : 31 ,By : "DD70"},
    { key : 32,By : "DD80"},
    { key : 33,By : "DR10"},
    { key : 34 ,By : "DR20"},
    { key : 35,By : "DR30"},
    { key : 36 ,By : "DR40"},
    { key : 37 ,By : "DR60"},
    { key : 38 ,By : "DR70"},
    { key : 39 ,By : "DR80"},
    { key : 40 ,By : "IN10"},
    { key : 41 ,By : "LC10"},
    { key : 42,By : "LC20"},
    { key : 43,By : "LC30"},
    { key : 44 ,By : "LC40"},
    { key : 45 ,By : "LC60"},
    { key : 46 ,By : "MS10"},
    { key : 47 ,By : "MS20"},
    { key : 48 ,By : "MS30"},
    { key : 49 ,By : "MS40"},
    { key : 50 ,By : "MS50"},
    { key : 51,By : "MS60"},
    { key : 52 ,By : "MS70"},
    { key : 53 ,By : "MS80"},
    { key : 54 ,By : "MW10"},
    { key : 55 ,By : "PC10"},
    { key : 56 ,By : "PC20"},
    { key : 57 ,By : "PC30"},
    { key : 58 ,By : "PL10"},
    { key : 59 ,By : "PL20"},
    { key : 60 ,By : "PL30"},
    { key : 61 ,By : "PL40"},
    { key : 62 ,By : "PL50"},
    { key : 63 ,By : "SP10"},
    { key : 64 ,By : "SP20"},
    { key : 65 ,By : "Sp30"},
    { key : 66 ,By : "SP40"},
    { key : 67 ,By : "SP50"},
    { key : 68 ,By : "SAC"},
    { key : 69 ,By : "TS10"},
    { key : 70 ,By : "TS20"},
    { key : 71 ,By : "TS30"},
    { key : 72 ,By : "TS40"},
    { key : 73 ,By : "TS50"},
    { key : 74 ,By : "TS60"},
    { key : 75 ,By : "TS70"},
    { key : 76 ,By : "TS99"},
    { key : 77 ,By : "UT10"},
    { key : 78,By : "UT20"},
    { key : 79 ,By : "UT30"},
    { key : 80 ,By : "UT40"},
    { key : 81 ,By : "UT50"},
    
   
],
aydeDateConvection2: "",
aydePoints2: [
    { key : 1 ,By : "1"},
    { key : 2 ,By : "2"},
    { key : 3 ,By : "3"},
    { key : 4 ,By : "4"},
    { key : 5 ,By : "5"},
    { key : 6 ,By : "6"},
    { key : 7 ,By : "7"},
    { key : 8 ,By : "8"},
    { key : 9 ,By : "9"},
    { key : 10 ,By : "10"},
    { key : 11 ,By : "11"},
    { key : 12 ,By : "None"},
],

aydeFine2: "",
aydeBan2 : "",

// extra motor coviction 3
aydeConvection3 :[
    { key : 1 ,By : "AC10"},
    { key : 2 ,By : "AC20"},
    { key : 3 ,By : "AC30"},
    { key : 4 ,By : "AC99"},
    { key : 5 ,By : "BA10"},
    { key : 6 ,By : "BA20"},
    { key : 7 ,By : "BA30"},
    { key : 8 ,By : "BA99"},
    { key : 9 ,By : "CD10"},
    { key : 10 ,By : "CD20"},
    { key : 11 ,By : "CD30"},
    { key : 12 ,By : "CD40"},
    { key : 14 ,By : "CD50"},
    { key : 14 ,By : "CD60"},
    { key : 15 ,By : "CD70"},
    { key : 16 ,By : "CD80"},
    { key : 17 ,By : "CD90"},
    { key : 18 ,By : "CD99"},
    { key : 19 ,By : "CU10"},
    { key : 20,By : "CU20"},
    { key : 21 ,By : "CU30"},
    { key : 22 ,By : "CU40"},
    { key : 23 ,By : "CU60"},
    { key : 24 ,By : "CU70"},
    { key : 26,By : "CU80"},
    { key : 26,By : "DD10"},
    { key : 17,By : "DD20"},
    { key : 28,By : "DD30"},
    { key : 29,By : "DD40"},
    { key : 30 ,By : "DD60"},
    { key : 31 ,By : "DD70"},
    { key : 32,By : "DD80"},
    { key : 33,By : "DR10"},
    { key : 34 ,By : "DR20"},
    { key : 35,By : "DR30"},
    { key : 36 ,By : "DR40"},
    { key : 37 ,By : "DR60"},
    { key : 38 ,By : "DR70"},
    { key : 39 ,By : "DR80"},
    { key : 40 ,By : "IN10"},
    { key : 41 ,By : "LC10"},
    { key : 42,By : "LC20"},
    { key : 43,By : "LC30"},
    { key : 44 ,By : "LC40"},
    { key : 45 ,By : "LC60"},
    { key : 46 ,By : "MS10"},
    { key : 47 ,By : "MS20"},
    { key : 48 ,By : "MS30"},
    { key : 49 ,By : "MS40"},
    { key : 50 ,By : "MS50"},
    { key : 51,By : "MS60"},
    { key : 52 ,By : "MS70"},
    { key : 53 ,By : "MS80"},
    { key : 54 ,By : "MW10"},
    { key : 55 ,By : "PC10"},
    { key : 56 ,By : "PC20"},
    { key : 57 ,By : "PC30"},
    { key : 58 ,By : "PL10"},
    { key : 59 ,By : "PL20"},
    { key : 60 ,By : "PL30"},
    { key : 61 ,By : "PL40"},
    { key : 62 ,By : "PL50"},
    { key : 63 ,By : "SP10"},
    { key : 64 ,By : "SP20"},
    { key : 65 ,By : "Sp30"},
    { key : 66 ,By : "SP40"},
    { key : 67 ,By : "SP50"},
    { key : 68 ,By : "SAC"},
    { key : 69 ,By : "TS10"},
    { key : 70 ,By : "TS20"},
    { key : 71 ,By : "TS30"},
    { key : 72 ,By : "TS40"},
    { key : 73 ,By : "TS50"},
    { key : 74 ,By : "TS60"},
    { key : 75 ,By : "TS70"},
    { key : 76 ,By : "TS99"},
    { key : 77 ,By : "UT10"},
    { key : 78,By : "UT20"},
    { key : 79 ,By : "UT30"},
    { key : 80 ,By : "UT40"},
    { key : 81 ,By : "UT50"},

    
   
],
aydeDateConvection3: "",
aydePoints3: [
    { key : 1 ,By : "1"},
    { key : 2 ,By : "2"},
    { key : 3 ,By : "3"},
    { key : 4 ,By : "4"},
    { key : 5 ,By : "5"},
    { key : 6 ,By : "6"},
    { key : 7 ,By : "7"},
    { key : 8 ,By : "8"},
    { key : 9 ,By : "9"},
    { key : 10 ,By : "10"},
    { key : 11 ,By : "11"},
    { key : 12 ,By : "None"},
],

aydeFine3: "",
aydeBan3 : "",

  };



