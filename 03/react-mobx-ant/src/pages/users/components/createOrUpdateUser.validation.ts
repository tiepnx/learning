const rules = {
  fullName: [{ required: true, message: 'This Field Is Required' }],
  userName: [{ required: true, message: 'This Field Is Required' }],
  emailAddress: [
    { required: true, message: 'This Field Is Required'},
    {
      type: 'email',
      message: 'The input is not valid E-mail!',
    },
  ],
};

export default rules;
