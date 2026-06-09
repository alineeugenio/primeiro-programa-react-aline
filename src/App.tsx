function App() {
   const nomes = [ 'Lucas', 'Maria', 'João', 'Ana', 'José' ];
   const nota = 3;

   
   let numeros = [];
   for (let i = 1; i <= 5; i++) {
     numeros.push(i);
    }

  return (
    
    <div style={{ padding: '20px' }}>
      <h2>1. Estrelas com 'repeat'</h2>
      <p style={{ fontSize: '24px' }}>{'⭐'.repeat(nota)}</p>

      <h2>2. Nomes com 'map'</h2>
      <ul>
        {nomes.map((nome, index) => (
          <li key={index}>{nome}</li>
        ))}
      </ul>
      
      <h2>3. Números com 'for'</h2>
      <div>
        {numeros.map((n) => (
          <span key={n}>{n}</span>


        ))}
      </div>
    </div>


  );
}

export default App;
  
   