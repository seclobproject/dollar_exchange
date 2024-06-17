const today = new Date().toISOString().split('T')[0];

export const personalDetailsFields = [
  { label: 'Company Name', type: 'text', name: 'CompanyName', placeholder: 'company name' },
  { label: 'Phone Number', type: 'text', name: 'PhoneNumber', placeholder: 'Enter your phone number' },
  { label: 'Email Id', type: 'email', name: 'EmailId', placeholder: 'Enter your Email' },
  { label: 'Buy Quantity', type: 'number', name: 'BuyQuantity', placeholder: 'Enter Buying Quantity' },
  { label: 'Amount', type: 'text', name: 'Amount', placeholder: 'Enter your mobile number' },
 
];

export const addressFields = [
  { label: 'Country', type: 'select', name: 'country', options: ['UAE', 'Other'], defaultValue: '' },
  { label: 'Full Address', type: 'text', name: 'address', placeholder: 'Enter your address' },
  { label: ' Post Code', type: 'text', name: 'PostCode', placeholder: 'Enter your address' },

 
];


  export const initialState = {
    company_name: '',
    phone_number: '',
    email_id: '',
    buy_quantity: '',
    amount: '',
    country: '',
    full_address: '',
    post_code: ''
  };
  