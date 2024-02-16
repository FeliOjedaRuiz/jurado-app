import { StickyNavbar } from '../navbar/StickyNavbar';


function LayoutLoged() {
  return (
    <div className="w-screen flex flex-col" >
    <StickyNavbar/>
    <div className="flex  h-[calc(100vh-58px)] w-full">
      <div className="w-1/3 bg-gray-100">Lista</div>
      <div className="flex flex-col bg-gray-200 justify-center w-full">
        <h1 className="">Hola </h1>
        <h1 className="">Hola </h1>
        <h1 className="">Hola </h1>
        <h1 className="">Hola </h1>
      </div>
      </div>
    </div>
  );
}

export default LayoutLoged;
