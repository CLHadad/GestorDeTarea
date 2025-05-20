import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Iniciar sesión</h2>
        <form action="/login" method="post">
        <label for="username">Usuario:</label><br></br>
        <input type="text" id="username" name="username"></input><br></br>
        <label for="password">Contraseña:</label><br></br>
        <input type="password" id="password" name="password"></input><br></br>
        <button type="submit">Iniciar sesión</button><br></br>
  </form>
      </header>
    </div>
  );
}
export default App;
