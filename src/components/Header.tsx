import Controls from './Controls';

function Header() {
  return (
    <div className='bg-gray-100 border-b mb-12'>
      <header className='flex justify-between items-center py-4 max-w-screen-md mx-auto'>
        <h1 className='text-3xl tracking-tight font-bold'>Beat Maker</h1>
        <Controls />
      </header>
    </div>
  );
}

export default Header;
