const Login = () => {
  return (
    <div className="center">
      <form className="card">
        <h3>Admin Login</h3>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login