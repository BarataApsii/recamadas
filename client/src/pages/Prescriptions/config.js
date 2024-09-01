
export const fields = {
  patients: {
    type: 'search',
    label: 'patients',
    entity: 'patients',
    displayLabels: ['name'],
    searchFields: ['name','lenstype'],
    dataIndex: ['patients', 'name', ],
    feedback: 'patients',
    redirectLabel: 'Add New Patients',
    withRedirect: true,
    urlToRedirect: '/patients',
  },
  lenstype: {
    type: 'string',
    required: true,
    label: 'lens type',
  },
  frametype: {
    type: 'string',
    required: true,
    label: 'frame type',
  },
  spherepower: {
    type: 'string',
    required: true,
    label: 'sphere power',
  },
  cylinderpower: {
    type: 'string',
    required: true,
    label: 'cylinder power',
  },
  axis: {
    type: 'string',
    required: true,
  },
  prism: {
    type: 'string',
    required: true,
  },
  pd: {
    type: 'string',
    required: true,
  },
  add: {
    type: 'string',
    required: true,
  },

  created: {
    type: 'date',
    required: true,
    disableForForm: true,
    disableForTable: true
  },
};
