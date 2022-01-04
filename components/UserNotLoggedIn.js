const UserNotLoggedIn = () => {
  return (
    <section>
      <div className="split small-space">
        <div className="flow-content">
          <h1>Hi, Stranger</h1>
          <h5>Pls login to access the event!</h5>
          <a href="/api/auth/login" className="btn small-space">
            Log me in!!!
          </a>
        </div>
      </div>
    </section>
  );
};

export default UserNotLoggedIn;
