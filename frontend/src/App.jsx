function App() {

  return (

    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0f172a'
      }}
    >

      <div
        style={{
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '10px',
          width: '300px'
        }}
      >

        <h1>Login Escolar</h1>

        <input
          type="email"
          placeholder="Digite seu email"
          style={{
            width: '100%',
            padding: '10px',
            marginTop: '20px'
          }}
        />

        <input
          type="password"
          placeholder="Digite sua senha"
          style={{
            width: '100%',
            padding: '10px',
            marginTop: '10px'
          }}
        />

        <button
          style={{
            width: '100%',
            padding: '10px',
            marginTop: '20px',
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none'
          }}
        >
          Entrar
        </button>

      </div>

    </div>

  )
}

export default App