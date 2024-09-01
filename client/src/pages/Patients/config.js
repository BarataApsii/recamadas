export const fields = {
  sinumber: {
    type: 'string',
    required: true,
    label: 'SI No.',
  },
  name: {
    type: 'string',
    required: true
  },
  phone: {
    type: 'phone',
    required: true,
  },
  address: {
    type: 'string',
    required: true,
  },
  senior_citizen_number: {
    type: String,
    label: 'Senior Citizen No.',
    disableForTable: true,
  },
  pwd_citizen_number: {
    type: String,
    label: 'PWD No.',
    disableForTable: true,
  },
  medicalhistory: {
    type: 'textarea',
    // disableForTable: true,
    label: 'Medical History',
  },
  created: {
    type: 'date',
    required: true,
    disableForForm: true,
    label: 'added on'
  },
  
};
