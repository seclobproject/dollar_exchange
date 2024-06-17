// data.js
const today = new Date().toISOString().split('T')[0];

export const personalDetailsFields = [
    { label: 'Name', type: 'text', name: 'name', placeholder: 'Enter your name' },
    { label: 'Nick Name', type: 'text', name: 'nick_name', placeholder: 'Enter your nick name' },
    { label: 'Date of Birth', type: 'date', name: 'dob', placeholder: 'YYYY-MM-DD', defaultValue: today },
    { label: 'Gender', type: 'select', name: 'gender', options: ['Male', 'Female', 'Other'], defaultValue: '' },
    { label: 'Marital Status', type: 'select', name: 'marital_status', options: ['Single', 'Married', 'Divorced', 'Widowed'], defaultValue: '' },
    { label: 'ID Card Number', type: 'text', name: 'id_card', placeholder: 'Enter your ID card number' },
    { label: 'Email', type: 'email', name: 'email', placeholder: 'Enter your email' },
    { label: 'Mobile Number', type: 'text', name: 'mobile', placeholder: 'Enter your mobile number' },
    { label: 'Country', type: 'select', name: 'country', options: ['UAE', 'Other'], defaultValue: '' },
    { label: 'Address', type: 'text', name: 'address', placeholder: 'Enter your address' },
  ];
  
  export const bankAccountFields = [
    { label: 'Bank Name', type: 'text', name: 'bank_name', placeholder: 'Enter your bank name' },
    { label: 'Branch Name', type: 'text', name: 'branch_name', placeholder: 'Enter your branch name' },
    { label: 'Account Number', type: 'text', name: 'account_number', placeholder: 'Enter your account number' },
  ];
  
  export const accountDetailsFields = [
    { label: 'Vaultizo User ID', type: 'text', name: 'vaultizo_user_id', placeholder: 'Enter your user ID' },
    { label: 'Account Creation Date', type: 'date', name: 'account_creation_date', placeholder: 'YYYY-MM-DD', defaultValue: today },
  ];
  
  export const initialState = {
    name: '',
    nick_name: '',
    dob: new Date().toISOString().split('T')[0], 
    gender: '',
    marital_status: '',
    id_card: '',
    email: '',
    mobile: '',
    country: '',
    address: '',
    bank_name: '',
    branch_name: '',
    account_number: '',
    vaultizo_user_id: '',
    account_creation_date: new Date().toISOString().split('T')[0], 
    vaultizo_referral_code: ''
  };
  