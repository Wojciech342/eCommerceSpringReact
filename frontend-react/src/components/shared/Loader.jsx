import ClipLoader from 'react-spinners/ClipLoader';

function Loader({ text }) {
    return (
        <div className='flex justify-center items-center w-full h-[450px]'>
            <div className='flex flex-col items-center gap-1'>
                <ClipLoader
                    color={'green'}
                    loading={true}
                    size={160}
                    aria-label='Loading Spinner'
                    data-testid='loader'
                />
                <p className='text-slate-800'>
                    {text ? text : 'Please wait...'}
                </p>
            </div>
        </div>
    );
}

export default Loader;
