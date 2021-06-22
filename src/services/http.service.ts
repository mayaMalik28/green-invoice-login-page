import Axios from 'axios';
const BASE_URL = '//jupiter.d.greeninvoice.co.il/api/v1'

const userExample = {
    "id": "3606cec19144119e4e34e77621165f67",
    "firstName": "Maya",
    "lastName": "Malik",
    "idNumber": "204439582",
    "email": "maya28892@gmail.com",
    "phone": "0525014031",
    "picture": "https://cdn.d.greeninvoice.co.il/files/images/f/1/0/f1035274169f44d5a93b5df5562a5ef1.png",
    "type": 0,
    "cycleId": 0,
    "subscriptionExpirationDate": 1626642000,
    "signUpDate": 1624129445,
    "activationDate": 1624129492,
    "packageId": 0,
    "packageProducts": [
        1020
    ],
    "activeBusinessCount": 1,
    "businessId": "ff6ee049-6d55-4842-9cfe-61ce13a78f61",
    "billingBusinessId": "ff6ee049-6d55-4842-9cfe-61ce13a78f61",
    "billingBusinessName": "מאיה",
    "billingEmail": "maya28892@gmail.com",
    "inboundEmail": "fe5dde274a22140e57a91b68bc3017e9@inbound.jupiter.d.greeninvoice.co.il",
    "businesses": [
        {
            "id": "ff6ee049-6d55-4842-9cfe-61ce13a78f61",
            "type": 1,
            "taxId": "204439582",
            "name": "מאיה",
            "title": "",
            "address": "פרץ חיות",
            "cityId": 5000,
            "city": "תל אביב - יפו",
            "nameEn": "Maya",
            "titleEn": "",
            "category": "1",
            "subCategory": 101,
            "addressEn": "",
            "cityEn": "Tel Aviv - Yafo",
            "zip": "",
            "phone": "",
            "fax": "",
            "mobile": "",
            "website": "",
            "email": "",
            "templateId": 10,
            "skinId": 9,
            "logo": "https://cdn.d.greeninvoice.co.il/files/images/f/1/0/f1035274169f44d5a93b5df5562a5ef1.png",
            "signature": "https://cdn.d.greeninvoice.co.il/files/images/e/4/2/e42de30e43fe44dd936be0410bcf39a5.png",
            "bankDisplay": false,
            "bankDisplayEn": false,
            "accountantEmails": [],
            "accountantDocsEmailSettings": 0,
            "accountantReportEmailSettings": 0,
            "senderEmailSettings": 2,
            "documentsEmailSettings": 13,
            "incomeReportEmailSettings": 1,
            "incomeReportFormatType": 1,
            "emailSubjectType": 1,
            "reportSendingDay": 5,
            "accountingType": 0,
            "deductionRate": 0,
            "advanceTaxRate": 0,
            "advanceNationalInsuranceRate": 0,
            "active": true,
            "accountEmail": "maya28892@gmail.com",
            "documentCount": 0,
            "settings": {
                "documentCurrency": "ILS",
                "documentLang": "he",
                "documentRounding": false,
                "documentQuantityNearPrice": false,
                "documentCopyCurrencyRates": true,
                "documentVatType": 0,
                "rowVatType": 0,
                "mixedVatEnabled": false,
                "receiptIncomeEnabled": false,
                "unsignedEnabled": false,
                "externalCertificateEnabled": false,
                "attachmentEnabled": false,
                "depositDocumentsEnabled": false,
                "selectedPaymentChannels": [],
                "encoding": "auto",
                "showForeignAddress": true,
                "emailButtonBackgroundColor": "#FFC63F",
                "incomeLayout": 1,
                "journey": true,
                "sendMonthlyReportIncome": true,
                "sendMonthlyReportExpense": false,
                "senderEnabled": false
            },
            "creationDate": 1624129991,
            "lastUpdateDate": 1624300742,
            "exemption": false,
            "notifyEmail": "maya28892@gmail.com"
        }
    ],
    "documents": [
        10,
        100,
        200,
        210,
        300,
        305,
        320,
        330,
        400,
        500
    ],
    "settings": {
        "popupJourneySeen": true,
        "popupMeshulamSeen": false,
        "popupTrialEndedSeen": false,
        "appOnBoardingSeen": false,
        "persona": 1,
        "twoFactorAuthEnabled": false,
        "autoRenewal": false
    },
    "source": "",
    "pluginTypes": []
}

var axios = Axios.create({
    withCredentials: true
});

export const httpService = {
    post(endpoint: string, data: object | null) {
        return ajax(endpoint, data);
    }
};


async function ajax(endpoint: string, data: object | null = null) {
    try{
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method: 'POST',
            data,
        });
        return res.data;
    }catch(err){
        console.error(err);
        return userExample
    }
}