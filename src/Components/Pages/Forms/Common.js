export  const defaultData = {
   
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
    pFullName: "",
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


    // Vehicle Details

     vRegistration: '',
     vApproxValueCar:'',
    vModification: [
        { key : 1 ,By : "Yes"},
        { key : 2 ,By : "No"}
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
    dAnyMotorAccident:[
        { key : 1 ,By : "Yes"},
        { key : 2 ,By : "No"}
    ],
    dMonitorigOffences:[
        { key : 1 ,By : "Yes"},
        { key : 2 ,By : "No"}
    ],


    //Additional Drivers
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

  };