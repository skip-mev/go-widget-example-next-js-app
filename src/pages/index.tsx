import { SwapWidget } from '@skip-go/widget';
import '@skip-go/widget/style.css';

const SwapPage = () => {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-24"
    >
      <div
        style={{
          width: '450px',
          height: '820px',
        }}
      >
        <SwapWidget/>
      </div>
    </main>
  );
};

export default SwapPage;