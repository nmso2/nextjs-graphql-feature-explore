import { useSession, signIn, signOut } from "next-auth/react";

const AuthPage = () => {
  const { session } = useSession();
  console.log(process.env.GOOGLE_CLIENT_ID);
  console.log(session);

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign</button>
    </>
  );
};

export default AuthPage;
