import ReactCompareImage from 'react-compare-image';
import Shade from '../../assets/shade.png';
import Before from '../../assets/before.png';
import After from '../../assets/after.png';

export const VirtualComponent = () => {
  return (
    <div className='virtual mt-24 mb-24 p-8 flex flex-row justify-around max-md:gap-4 max-md:flex-col max-md:justify-center max-md:items-center max-md:mt-8 max-md:mb-8 max-md:p-4 max-md:text-center' id='virtual'>
      <div className='left flex flex-col gap-8 relative'>
        <span className='text-[1.8rem] uppercase block w-80 font-bold'>Virtual Try-On</span>
        <span className='text-[1.4rem] uppercase block w-80'>Nunca mais compre o tom errado</span>
        <span className='text-[1.2rem] font-bold'>Experimente Agora</span>
        <img
          src={Shade}
          alt="imgShade"
          className='absolute w-40 bottom-[4rem] max-md:hidden '
        />
      </div>

      <div className='w-[30rem] max-sm:w-[22rem] '>
        {/* IMPORTAR USANDO npmReactCompare só pesquisar */}
        <ReactCompareImage leftImage={Before} rightImage={After} />
      </div>
    </div>
  )
}