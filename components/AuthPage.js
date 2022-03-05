import { useSession, signIn, signOut } from "next-auth/react";

const AuthPage = () => {
  const { session } = useSession();
  console.log(process.env.GOOGLE_CLIENT_ID);
  console.log(session);

  if (session) {
    return (
      <div style={{ textAlign: "center" }}>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <div style={{ textAlign: "center" }}>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign</button>
      <button
        onClick={() =>
          signIn("google", { callbackUrl: "http://localhost:3000/" })
        }
      >
        Sign with Google
      </button>
    </div>
  );
};

export default AuthPage;
