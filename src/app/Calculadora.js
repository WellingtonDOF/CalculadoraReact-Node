export default function Calculadora({dados}) {
    return (
      <div style={{ justifyContent: 'flex-end', display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'right' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '15px' }}>
          <p style={{ margin: 0, textAlign: 'right', width: '200px' }}>Gorjeta:</p>
          <span style={{ textAlign: 'left', width: '80px' }}>${dados.gorjetaCalculada}</span>
        </div>
  
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <p style={{ margin: 0, textAlign: 'right', width: '200px' }}>Total a pagar:</p>
          <span style={{ textAlign: 'left', width: '80px' }}>${dados.total}</span>
        </div>
  
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <p style={{ margin: 0, textAlign: 'right', width: '200px' }}>Total a pagar por pessoa:</p>
          <span style={{ textAlign: 'left', width: '80px' }}>${dados.totalPorPessoa}</span>
        </div>
      </div>
    );
  }
  