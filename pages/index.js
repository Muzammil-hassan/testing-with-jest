import LoginForm from '~/components/loginForm/LoginForm';

export default function Home() {
  const handleSubmit = (email, password) => console.log({ email, password });
  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}
