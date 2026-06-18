function App() {
   let estrelas = []
   let count = 0
   let mensagem = ""

   for (let i = 0; i < 5; i++) {
      estrelas.push('⭐')

      if(count >= 18){
        mensagem = "Boa noite"
      }
      if(count === 24){
        count = 0
      } 
    }
      
    return (
      <>
      
      <section>
        {estrelas.map((estrela, index) => {
          return <p>item {index} : {estrela}</p>
        })}
       </section>
      </>

    )
}  


        

export default App;

   