const today = new Date().toISOString().split('T')[0];

export const personalDetailsFields = [
  { label: 'Company Name', type: 'text', name: 'company_name', placeholder: 'company name' },
  { label: 'Phone Number', type: 'text', name: 'phone_number', placeholder: 'Enter your phone number' },
  { label: 'Email Id', type: 'email', name: 'email_id', placeholder: 'Enter your Email' },
  { label: 'Buy Quantity', type: 'number', name: 'buy_quantity', placeholder: 'Enter Buying Quantity' },
  { label: 'Amount', type: 'text', name: 'amount', placeholder: 'Enter your mobile number' },
 
];

export const addressFields = [
  { label: 'Country', type: 'select', name: 'country', options: ['UAE', 'Other'], defaultValue: '' },
  { label: 'Full Address', type: 'text', name: 'full_address', placeholder: 'Enter your address' },
  { label: ' Post Code', type: 'text', name: 'post_code', placeholder: 'Enter your address' },

 
];
export const bankDetailsFields = [
  { label: 'Beneficiary Name', type: 'text', name: 'account_holder_name', placeholder: 'Enter beneficiary name' },
  { label: 'Branch', type: 'text', name: 'branch_name', placeholder: 'Enter branch' },
  { label: 'IFSC Code', type: 'text', name: 'ifsc_code', placeholder: 'Enter IFSC code' },
  { label: 'Buy Quantity', type: 'number', name: 'buy_quantity', placeholder: 'Enter buying quantity' },
  { label: 'Amount', type: 'text', name: 'amount', placeholder: 'Enter amount' },
];

export const bankAccountFields = [
  { label: 'Bank Name', type: 'text', name: 'bank_name', placeholder: 'Enter bank name' },
  { label: 'Account No', type: 'text', name: 'account_no', placeholder: 'Enter account number' },
  { label: 'Account Type', type: 'select', name: 'account_type', options: ['Savings', 'Current'], defaultValue: '' },
];

export const initialState = {
  company_name: '',
  phone_number: '',
  email_id: '',
  buy_quantity: '',
  amount: '',
  country: '',
  full_address: '',
  post_code: '',
};
  