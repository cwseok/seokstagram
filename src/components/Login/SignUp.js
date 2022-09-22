import SignUpForm from './SignUpForm';

const SignUp = (props) => {
  const addMemberHandler = (memberData) => {
    fetch('https://seokstagram-ad8aa-default-rtdb.firebaseio.com/member.json', {
      method: 'POST',
      body: JSON.stringify(memberData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return (
    <SignUpForm onCancel={props.onCancel} onAddMember={addMemberHandler} />
  );
};

export default SignUp;
