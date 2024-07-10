// data.js
const today = new Date().toISOString().split('T')[0];

export const personalDetailsFields = [
    { label: 'Name', type: 'text', name: 'name', placeholder: 'Enter your name' },
    { label: 'Nick Name', type: 'text', name: 'nickname', placeholder: 'Enter your nick name', },
    { label: 'Date of Birth', type: 'date', name: 'dateOfBirth', placeholder: 'YYYY-MM-DD', defaultValue: today },
    { label: 'Gender', type: 'select', name: 'gender', options: ['Male', 'Female', 'Other'], defaultValue: '' },
    { label: 'Marital Status', type: 'select', name: 'maritalStatus', options: ['Single', 'Married', 'Divorced', 'Widowed'], defaultValue: '' },
    { label: 'ID Card Number', type: 'text', name: 'idCardNo', placeholder: 'Enter your ID card number' },
    { label: 'Email', type: 'email', name: 'email', placeholder: 'Enter your email' },
    { label: 'Mobile Number', type: 'text', name: 'mobileNumber', placeholder: 'Enter your mobile number' },
    { label: 'Country', type: 'select', name: 'country', options: ['UAE', 'Other'], defaultValue: '' },
    { label: 'Address', type: 'text', name: 'address', placeholder: 'Enter your address' },
  ];
  
  export const bankAccountFields = [
    { label: 'Bank Name', type: 'text', name: 'bankName', placeholder: 'Enter your bank name' },
    { label: 'Branch Name', type: 'text', name: 'branchName', placeholder: 'Enter your branch name' },
    { label: 'Account Number', type: 'text', name: 'accountNo', placeholder: 'Enter your account number' },
  ];
  
  export const accountDetailsFields = [
    { label: 'Vaultizo User ID', type: 'text', name: 'vaultizoUserId', placeholder: 'Enter your user ID' },
    { label: 'Account Creation Date', type: 'date', name: 'accountCreationDate', placeholder: 'YYYY-MM-DD', defaultValue: today },
  ];
  
  export const initialState = {
    name: '',
    nickname: '',
    dateOfBirth: new Date().toISOString().split('T')[0], 
    gender: '',
    maritalStatus: '',
    idCardNo: '',
    email: '',
    mobileNumber: '',
    country: '',
    address: '',
    bankName: '',
    branchName: '',
    accountNo: '',
    vaultizoUserId: '',
    accountCreationDate: new Date().toISOString().split('T')[0], 
    vaultizoReferralCode: ''
  };
  